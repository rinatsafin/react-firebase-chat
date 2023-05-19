import { useContext } from 'react';
import { FirebaseContext, Button, auth } from '../../shared';
import { SignInButton } from '../SignInButton';

const AuthButton = () => {
  const { user } = useContext(FirebaseContext);
  const signOut = () => {
    auth.signOut();
  };

  return user ? (
    <Button onClick={signOut} className="sign-out">
      Sign Out
    </Button>
  ) : (
    <SignInButton />
  );
};

export default AuthButton;
