# Configurare Cognito cu simplu.io Callback

## Prezentare Generală

Această aplicație folosește AWS Cognito pentru autentificare, cu callback-ul configurat să se facă prin `simplu.io/auth/callback`, indiferent dacă aplicația rulează pe localhost sau pe `dental.simplu.io`.

## Configurare AWS Cognito

### 1. User Pool Configuration

În AWS Console → Cognito → User Pools → selectează pool-ul tău:

1. **App integration** → App client settings
2. **Callback URLs**: Adaugă următoarele:
   - `https://simplu.io/auth/callback`
   - `http://localhost:5173/auth/callback` (pentru development)
3. **Sign out URLs**: Adaugă următoarele:
   - `https://dental.simplu.io`
   - `http://localhost:5173`
4. **Allowed OAuth Flows**: 
   - Authorization code grant
   - Implicit grant
5. **Allowed OAuth Scopes**:
   - phone
   - openid
   - email

### 2. Domain Configuration

În **App integration** → Domain name:
- Configurează un domain custom sau folosește domain-ul Cognito
- Asigură-te că domain-ul este accesibil public

## Configurare pe simplu.io

### 1. Pagina de Callback

Creează o pagină la `https://simplu.io/auth/callback` care să redirecționeze utilizatorul către aplicația ta:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Redirecting...</title>
</head>
<body>
    <script>
        // Get URL parameters from Cognito
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');
        const errorDescription = urlParams.get('error_description');
        
        // Determine target application URL based on environment
        const isDevelopment = window.location.hostname === 'localhost';
        const targetBase = isDevelopment 
            ? 'http://localhost:5173' 
            : 'https://dental.simplu.io';
        
        const targetUrl = new URL(`${targetBase}/auth/callback`);
        
        // Copy all parameters to target URL
        if (code) targetUrl.searchParams.set('code', code);
        if (state) targetUrl.searchParams.set('state', state);
        if (error) targetUrl.searchParams.set('error', error);
        if (errorDescription) targetUrl.searchParams.set('error_description', errorDescription);
        
        // Redirect to dental application
        window.location.href = targetUrl.toString();
    </script>
    <p>Redirecting to dental application...</p>
</body>
</html>
```

### 2. CORS Configuration

Asigură-te că serverul de pe `simplu.io` permite CORS pentru domeniile tale:

```javascript
// Exemplu pentru Express.js
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://dental.simplu.io'
  ],
  credentials: true
}));
```

## Configurare Aplicație

### 1. Environment Variables

Creează un fișier `.env.development` în rădăcina proiectului:

```env
# Development Environment Configuration
VITE_DEMO_MODE=false
VITE_API_URL=http://localhost:4000
VITE_WS_URL=ws://localhost:4000/socket

# Cognito Configuration
VITE_COGNITO_AUTHORITY=https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_KUaE0MTcQ
VITE_COGNITO_CLIENT_ID=ar2m2qg3gp4a0b4cld09aegdb
VITE_COGNITO_REDIRECT_URI=https://simplu.io/auth/callback
```

Pentru producție, creează `.env.production`:

```env
# Production Environment Configuration
VITE_DEMO_MODE=false
VITE_API_URL=https://api.dental.simplu.io
VITE_WS_URL=wss://api.dental.simplu.io/socket

# Cognito Configuration
VITE_COGNITO_AUTHORITY=https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_KUaE0MTcQ
VITE_COGNITO_CLIENT_ID=ar2m2qg3gp4a0b4cld09aegdb
VITE_COGNITO_REDIRECT_URI=https://simplu.io/auth/callback
```

### 2. Vite Configuration

Configurația din `vite.config.js` include deja proxy-ul pentru development:

```javascript
server: {
  proxy: {
    '/auth/callback': {
      target: 'https://simplu.io',
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace('/auth/callback', '/auth/callback')
    }
  }
}
```

## Flux de Autentificare

1. **Utilizatorul accesează aplicația** pe `dental.simplu.io` sau `localhost:5173`
2. **Aplicația redirecționează** către Cognito pentru autentificare
3. **Cognito procesează autentificarea** și redirecționează către `simplu.io/auth/callback`
4. **simplu.io/auth/callback** redirecționează înapoi către aplicația ta cu parametrii de autentificare
5. **Aplicația procesează callback-ul** și autentifică utilizatorul

## Testare

### Development (localhost)

1. Pornește aplicația: `npm run dev`
2. Accesează `http://localhost:5173`
3. Testează autentificarea

### Production (dental.simplu.io)

1. Build aplicația: `npm run build`
2. Deploy pe `dental.simplu.io`
3. Testează autentificarea

## Troubleshooting

### Probleme Comune

1. **CORS Errors**: Verifică configurația CORS pe `simplu.io`
2. **Invalid Redirect URI**: Verifică callback URL-urile în Cognito
3. **State Mismatch**: Asigură-te că state-ul este transmis corect
4. **Code Expired**: Verifică că redirect-ul se face rapid

### Debug

1. Verifică console-ul browser-ului pentru erori
2. Verifică Network tab pentru request-uri eșuate
3. Verifică CloudWatch logs pentru Cognito
4. Verifică server logs pe `simplu.io`

## Securitate

1. **HTTPS**: Folosește HTTPS în producție
2. **State Parameter**: Verifică state-ul pentru a preveni CSRF
3. **Token Validation**: Validează token-urile pe server
4. **Session Management**: Gestionează corect sesiunile
