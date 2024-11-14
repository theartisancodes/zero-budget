import { getSession, getAccessToken } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { user } = await getSession();
  const { accessToken } = await getAccessToken();

  if (!accessToken) {
    redirect('/auth/login');
  }
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
  localStorage.setItem('user', JSON.stringify(user));
  return (
    <div>
      <h1>Welcome to the Dashboard, {user?.name}!</h1>
    </div>
  );
}
