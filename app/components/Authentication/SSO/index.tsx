'use client';
import { Google, X } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Button from '@components/Button';

interface SingleSignOnProps {
  headerText: string;
  subText?: string;
  authenticationType?: 'login' | 'signup';
}

const SingleSignOn = ({
  headerText,
  subText,
  authenticationType
}: SingleSignOnProps) => {
  const router = useRouter();

  const handleLogin = (connection: string) => {
    router.push(`/api/auth/login?login_hint=${connection}`);
  };

  const handleSignup = (connection: string) => {
    router.push(`/api/auth/login?login_hint=${connection}&screen_hint=signup`);
  };

  const onClickSSO = (connection: string) => {
    if (authenticationType === 'login') {
      handleLogin(connection);
    } else if (authenticationType === 'signup') {
      handleSignup(connection);
    }
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
          onClick={() =>
            onClickSSO(process.env.NEXT_PUBLIC_AUTH0_LOGIN_HINT_GOOGLE)
          }
        >
          {authenticationType === 'login'
            ? 'Sign in with Google'
            : 'Sign up with Google'}
        </Button>
        <Button
          state="outline"
          className="mt-8 font-semibold w-1/2"
          textClassName="text-lg"
          icon={X}
          iconSize="medium"
          onClick={() => onClickSSO(process.env.NEXT_PUBLIC_AUTH0_LOGIN_HINT_X)}
        >
          {authenticationType === 'login' ? 'Sign in with X' : 'Sign up with X'}
        </Button>
      </div>
    </div>
  );
};

export default SingleSignOn;
