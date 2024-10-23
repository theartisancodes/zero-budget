import NextAuth, { Account, Profile, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { CredentialInput } from 'next-auth/providers';

import GoogleProvider from 'next-auth/providers/google';

interface GoogleProfile extends Profile {
  email_verified?: boolean;
}

interface AuthOptions {
  user: User | AdapterUser;
  account: Account;
  profile?: GoogleProfile;
  email?: {
    verificationRequest?: boolean;
  };
  credentials?: Record<string, CredentialInput>;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    signIn({ account, profile }: AuthOptions) {
      if (account.provider === 'google') {
        return profile.email_verified && profile.email.endsWith('@gmail.com');
      }
      return true;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
