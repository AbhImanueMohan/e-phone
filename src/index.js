import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-7ylmvrs28va8qm0g.us.auth0.com"
    clientId="i7o70BWqgO2N5dl9KxmdPLS6yrQDppsJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  </Auth0Provider>
);


