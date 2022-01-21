import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";


const domain="dev-amith.us.auth0.com";
const clientId="N3gnNSrQ1XnuEEs8YLE37ub6s5MRPF6U";
ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

