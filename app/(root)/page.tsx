import { getServerSession } from 'next-auth';
import { authOptions } from 'app/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div>
      <h1>Welcome to the Dashboard, {session.user?.name}!</h1>
    </div>
  );
}
