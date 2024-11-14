'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface AuthProviderWrapperProps {
  children: ReactNode;
}

const AuthProviderWrapper = ({ children }: AuthProviderWrapperProps) => (
  <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri:
        typeof window !== 'undefined' ? window.location.origin : undefined
    }}
  >
    {children}
  </Auth0Provider>
);

export default AuthProviderWrapper;
