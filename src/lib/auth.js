// Cognito Hosted UI helpers

export const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_KUaE0MTcQ",
  cognitoDomain: "https://auth.simplu.io", // Cognito Hosted UI domain
  clientId: "ar2m2qg3gp4a0b4cld09aegdb",
  redirectUri: "https://simplu.io/auth/callback",
  responseType: "code",
  scope: "phone openid email",
};

function buildQuery(params) {
  const searchParams = new URLSearchParams(params);
  return searchParams.toString();
}

function buildHostedUiUrl(pathSegment, redirectTarget = null) {
  const { cognitoDomain, clientId, redirectUri, responseType, scope } =
    cognitoAuthConfig;

  const base = `${cognitoDomain.replace(/\/$/, "")}/${pathSegment}`;
  
  // Prepare state parameter with redirect target
  let state = null;
  if (redirectTarget) {
    const stateData = {
      redirect: redirectTarget,
      timestamp: Date.now()
    };
    state = btoa(JSON.stringify(stateData));
  }

  const queryParams = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope,
  };

  // Add state parameter if provided
  if (state) {
    queryParams.state = state;
  }

  const query = buildQuery(queryParams);
  const finalUrl = `${base}?${query}`;
  console.log('Built hosted UI URL:', finalUrl);
  console.log('State parameter:', state);
  return finalUrl;
}

export function redirectToCognitoSignup(redirectTarget = null) {
  window.location.href = buildHostedUiUrl("signup", redirectTarget);
}

export function redirectToCognitoLogin(redirectTarget = null) {
  const url = buildHostedUiUrl("login", redirectTarget);
  console.log('Redirecting to Cognito login with URL:', url);
  console.log('Redirect target:', redirectTarget);
  window.location.href = url;
}

export function signOutRedirect(logoutUri) {
  const { clientId, cognitoDomain, redirectUri } = cognitoAuthConfig;
  const targetLogoutUri = logoutUri || redirectUri;
  const base = `${cognitoDomain.replace(/\/$/, "")}/logout`;
  const query = buildQuery({
    client_id: clientId,
    logout_uri: targetLogoutUri,
  });
  window.location.href = `${base}?${query}`;
}

export async function exchangeCodeForTokens(code) {
  try {
    const tokenEndpoint = `${cognitoAuthConfig.cognitoDomain}/oauth2/token`;
    
    console.log('Exchanging code for tokens at:', tokenEndpoint);
    console.log('Client ID:', cognitoAuthConfig.clientId);
    console.log('Redirect URI:', cognitoAuthConfig.redirectUri);
    
    const requestBody = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: cognitoAuthConfig.clientId,
      code: code,
      redirect_uri: cognitoAuthConfig.redirectUri,
    }).toString();
    
    console.log('Request body:', requestBody);
    
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody,
    });

    console.log('Token exchange response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Token exchange failed:', response.status, errorData);
      return { error: `Token exchange failed: ${response.status} - ${errorData}` };
    }

    const tokenData = await response.json();
    console.log('Token exchange successful:', {
      hasAccessToken: !!tokenData.access_token,
      hasIdToken: !!tokenData.id_token,
      hasRefreshToken: !!tokenData.refresh_token,
      expiresIn: tokenData.expires_in,
      tokenType: tokenData.token_type
    });
    
    return {
      access_token: tokenData.access_token,
      id_token: tokenData.id_token,
      refresh_token: tokenData.refresh_token,
      expires_in: tokenData.expires_in,
      token_type: tokenData.token_type,
    };
  } catch (error) {
    console.error('Token exchange error:', error);
    return { error: error.message };
  }
}

export function signOut() {
  // Clear local authentication tokens
  localStorage.removeItem('auth_token');
  sessionStorage.removeItem('auth_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('refresh_token');
  
  // Redirect to Cognito logout
  signOutRedirect();
}

export function isAuthenticated() {
  const accessToken = localStorage.getItem('auth_token');
  const idToken = localStorage.getItem('id_token');
  return !!(accessToken && idToken);
}

export function getTokens() {
  return {
    access_token: localStorage.getItem('auth_token'),
    id_token: localStorage.getItem('id_token'),
    refresh_token: localStorage.getItem('refresh_token'),
  };
}

