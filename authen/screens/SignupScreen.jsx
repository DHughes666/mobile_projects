import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
