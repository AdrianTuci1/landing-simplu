# Environment Configuration

## Development Environment (.env.development)

Creează un fișier `.env.development` în rădăcina proiectului cu următoarele variabile:

```env
# Development Environment Configuration
VITE_DEMO_MODE=false
VITE_API_URL=http://localhost:4000
VITE_WS_URL=ws://localhost:4000/socket

# Cognito Configuration
VITE_COGNITO_AUTHORITY=https://auth.simplu.io
VITE_COGNITO_CLIENT_ID=ar2m2qg3gp4a0b4cld09aegdb
VITE_COGNITO_REDIRECT_URI=http://localhost:5173/auth/callback
```

## Production Environment (.env.production)

Creează un fișier `.env.production` în rădăcina proiectului cu următoarele variabile:

```env
# Production Environment Configuration
VITE_DEMO_MODE=false
VITE_API_URL=https://api.dental.simplu.io
VITE_WS_URL=wss://api.dental.simplu.io/socket

# Cognito Configuration
VITE_COGNITO_AUTHORITY=https://auth.simplu.io
VITE_COGNITO_CLIENT_ID=ar2m2qg3gp4a0b4cld09aegdb
VITE_COGNITO_REDIRECT_URI=https://simplu.io/auth/callback
```

## Utilizare

Aceste variabile de mediu sunt accesibile în aplicație prin `import.meta.env.VITE_*`:

```javascript
const cognitoAuthority = import.meta.env.VITE_COGNITO_AUTHORITY;
const cognitoClientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const redirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;
```
