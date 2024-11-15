import { getSession } from '@auth0/nextjs-auth0';

export const useUserSession = async () => {
  const session = await getSession();

  return {
    user: session?.user || null
  };
};
