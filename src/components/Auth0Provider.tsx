import { useNavigate } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";

type Auth0ProviderWithProps = {
    children: any;
}

const Auth0ProviderWithNav: React.FC<Auth0ProviderWithProps> = ({children}) => {
    const navigate = useNavigate();
    const domain = "dev-2c30io1f7cuibwi7.us.auth0.com";
    const clientId = "n2dhGCVy28Dd6FoGYKSQh26SukqZMfQI";
    const redirectUri = "http://localhost:5173/";

    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
                scope: "openid profile email"
            }}
            onRedirectCallback={onRedirectCallback}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNav;