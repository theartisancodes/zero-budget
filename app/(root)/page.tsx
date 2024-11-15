import { getSession } from '@auth0/nextjs-auth0';

async function Dashboard() {
  const session = await getSession();

  return (
    <div>
      <h1>Welcome to the Dashboard, {session.user.name}!</h1>
    </div>
  );
}

export default Dashboard;
