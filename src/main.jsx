import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider domain="dev-z8wr07yp.us.auth0.com"
  clientId="c3S312b5pCDMFkchaMT9X3OZqZakEQyd"
  redirectUri = {window.location.origin}>
      <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
  
)
