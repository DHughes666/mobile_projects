import { useState, useContext } from 'react';
import { Alert } from 'react-native'
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth_context';

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const {authenticate} = useContext(AuthContext);

  const loginHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check your credentials and try again'
        )
        setIsAuthenticating(false);
    }
    
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
