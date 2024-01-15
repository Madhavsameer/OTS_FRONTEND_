import React, { useEffect } from 'react';
import axios from 'axios';

const OAuthCallback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange authorization code for access token
      axios.post('YOUR_TOKEN_ENDPOINT', {
        code,
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        redirect_uri: 'YOUR_REDIRECT_URI',
        grant_type: 'authorization_code',
      })
      .then(response => {
        const accessToken = response.data.access_token;
        // Store the access token in your application state or local storage
      })
      .catch(error => {
        console.error('Error exchanging authorization code for access token', error);
      });
    }
  }, []);

  return (
    <div>
      {/* Loading message or redirecting message */}
      <p>Hii</p>
    </div>
  );
};

export default OAuthCallback;
