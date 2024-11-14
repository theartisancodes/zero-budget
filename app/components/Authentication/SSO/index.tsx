import { Google, X } from '@mui/icons-material';
import Button from '@components/Button';
import { useAuth0 } from '@auth0/auth0-react';

interface SingleSignOnProps {
  headerText: string;
  subText?: string;
}

const SingleSignOn = ({ headerText, subText }: SingleSignOnProps) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async (connection: string) => {
    await loginWithRedirect({
      authorizationParams: {
        login_hint: connection
      }
    });
  };
  return (
    <div className="flex flex-col items-start">
      <span className="text-4xl text-gray-700">{headerText}</span>
      <p className="text-m">{subText}</p>
      <div className="flex gap-7 w-full">
        <Button
          state="outline"
          className="mt-8 font-semibold w-1/2"
          textClassName="text-lg"
          icon={Google}
          iconSize="medium"
          onClick={() => handleLogin('google-oauth2')}
        >
          Sign in with Google
        </Button>
        <Button
          state="outline"
          className="mt-8 font-semibold w-1/2"
          textClassName="text-lg"
          icon={X}
          iconSize="medium"
          onClick={() => handleLogin('auth0')}
        >
          Sign in with X
        </Button>
      </div>
    </div>
  );
};

export default SingleSignOn;
