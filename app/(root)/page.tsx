import { useUserSession } from '@hooks/queries/useUserSession';

const Dashboard = async () => {
  const { user } = await useUserSession();
  return (
    <div>
      <h1>Welcome to the Dashboard, {user.name}!</h1>
    </div>
  );
};

export default Dashboard;
