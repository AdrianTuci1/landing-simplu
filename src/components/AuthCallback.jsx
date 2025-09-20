import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { exchangeCodeForTokens } from "@/lib/auth";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processCallback = async () => {
      try {
        // Get parameters from URL
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');

        console.log('Auth callback parameters:', { code, state, error, errorDescription });

        if (error) {
          console.error('Auth error:', error, errorDescription);
          navigate("/error");
          return;
        }

        if (!code) {
          console.error('No authorization code received');
          navigate("/error");
          return;
        }

        // Decode redirect target from state
        let redirectTarget = null;
        if (state) {
          try {
            const decoded = JSON.parse(atob(state));
            if (decoded.redirect) {
              redirectTarget = decoded.redirect;
              console.log('Redirect target from state:', redirectTarget);
            }
          } catch (e) {
            console.warn("Could not decode state:", e);
          }
        }
        
        // If no redirect target in state, try to get it from referrer or default
        if (!redirectTarget) {
          // Try to get from referrer header
          const referrer = document.referrer;
          if (referrer && referrer !== window.location.origin) {
            redirectTarget = new URL(referrer).origin;
            console.log('Using referrer as redirect target:', redirectTarget);
          } else {
            // Fallback to a default client URL
            redirectTarget = "https://simplu.io";
            console.log('Using default redirect target:', redirectTarget);
          }
        }

        // Exchange authorization code for tokens
        console.log('Starting token exchange for code:', code);
        const tokenResponse = await exchangeCodeForTokens(code);
        
        if (tokenResponse.error) {
          console.error('Token exchange failed:', tokenResponse.error);
          // Instead of navigating to error page, try to redirect to client with error
          const errorParams = new URLSearchParams({
            error: 'token_exchange_failed',
            error_description: tokenResponse.error,
            state: state || '',
          }).toString();
          
          const errorRedirectUrl = `${redirectTarget}/auth/callback?${errorParams}`;
          console.log('Redirecting to client with error:', errorRedirectUrl);
          window.location.href = errorRedirectUrl;
          return;
        }

        // Store tokens locally
        localStorage.setItem('auth_token', tokenResponse.access_token);
        localStorage.setItem('id_token', tokenResponse.id_token);
        if (tokenResponse.refresh_token) {
          localStorage.setItem('refresh_token', tokenResponse.refresh_token);
        }
        
        // Prepare tokens for client
        const authParams = new URLSearchParams({
          access_token: tokenResponse.access_token,
          id_token: tokenResponse.id_token,
          state: state || '',
        }).toString();

        // Add refresh token if available
        if (tokenResponse.refresh_token) {
          authParams += `&refresh_token=${tokenResponse.refresh_token}`;
        }

        // Redirect to client with tokens
        const finalRedirectUrl = `${redirectTarget}/auth/callback?${authParams}`;
        console.log('Final redirect URL:', finalRedirectUrl);
        console.log('Redirecting client with tokens:', {
          hasAccessToken: !!tokenResponse.access_token,
          hasIdToken: !!tokenResponse.id_token,
          hasRefreshToken: !!tokenResponse.refresh_token,
          redirectTarget: redirectTarget
        });
        window.location.href = finalRedirectUrl;
      } catch (e) {
        console.error("Failed to process callback", e);
        navigate("/error");
      } finally {
        setIsProcessing(false);
      }
    };

    processCallback();
  }, [searchParams, navigate]);



  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700">
          {isProcessing ? "Se finalizează autentificarea..." : "Redirecționare..."}
        </p>
      </div>
    </div>
  );
}
