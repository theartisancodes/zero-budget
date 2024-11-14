import { getSession, getAccessToken } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { user } = await getSession();
  const { accessToken } = await getAccessToken();
  if (!accessToken) {
    return redirect('/auth/login');
  }
  console.log(accessToken, '__access');
  return (
    <div>
      <h1>Welcome to the Dashboard, {user?.name}!</h1>
    </div>
  );
}
