import Link from 'next/link';
import SingleSignOn from 'app/components/Authentication/SSO';
import AuthForm, {
  AuthFormProps
} from 'app/components/Authentication/AuthForm';

const AuthenticationForm = ({ authenticationType }: AuthFormProps) => {
  const routePage =
    authenticationType === 'signup' ? '/auth/login' : '/auth/signup';

  const headerText =
    authenticationType === 'signup' ? 'Get Started Now' : 'Sign In to continue';

  return (
    <div className="authentication-form">
      <SingleSignOn
        headerText={headerText}
        subText="Enter your credentials to access your account"
        authenticationType={authenticationType}
      />

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-200" />
        <span className="px-4 text-gray-500">or</span>
        <hr className="flex-grow border-gray-200" />
      </div>

      <AuthForm authenticationType={authenticationType} />

      <div className="text-center mt-4">
        <span>
          {authenticationType === 'signup'
            ? 'Already have an account? '
            : "Don't have an account yet? "}
        </span>
        <Link
          href={routePage}
          className="text-primary hover:text-primary-darker ml-1"
        >
          {authenticationType === 'signup' ? 'Sign In' : 'Sign Up'}
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationForm;
