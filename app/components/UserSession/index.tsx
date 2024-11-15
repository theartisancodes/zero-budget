import { useMemo } from 'react';
import { getSession } from '@auth0/nextjs-auth0';

const UserSession = async () => {
  const session = await getSession();

  return useMemo(() => {
    if (session?.user) {
      return session.user;
    }
    return null;
  }, [session]);
};
export default UserSession;
