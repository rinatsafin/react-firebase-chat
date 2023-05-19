import { useCallback, useContext } from 'react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth, Button, GoogleSignInImage, FirebaseContext } from '../../shared';

const SignInButton = () => {
  const { loading } = useContext(FirebaseContext);
  const googleSignIn = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }, []);

  if (loading) return <>Loading ...</>
  return (
    <Button onClick={googleSignIn} className="sign-in" disabled={loading}>
      <GoogleSignInImage />
    </Button>
  );
};

export default SignInButton;
