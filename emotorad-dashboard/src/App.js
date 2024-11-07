import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {
    const [accessToken, setAccessToken] = useState(null);

    const handleLoginSuccess = async (response) => {
        const authorizationCode = response.code;

        try {
            const { data } = await axios.post('http://localhost:5000/exchange-token', { code: authorizationCode });
            setAccessToken(data.access_token);
            console.log("Access Token:", data.access_token);
        } catch (error) {
            console.error("Failed to exchange authorization code:", error);
        }
    };

    const handleLoginFailure = (error) => {
        console.error("Login failed:", error);
    };

    return (
        <GoogleOAuthProvider clientId="clientid">
            <div className="App">
                <h1>Login with Google</h1>
                {accessToken ? (
                    <div>Access Token Acquired</div>
                ) : (
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginFailure}
                        flow="auth-code" // Use the authorization code flow
                    />
                )}
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
