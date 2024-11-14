import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    return redirect('/auth/login');
  }

  return (
    <div>
      <h1>Welcome to the Dashboard, {session?.user?.name}!</h1>
    </div>
  );
}
