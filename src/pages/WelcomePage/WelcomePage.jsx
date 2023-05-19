import './WelcomePage.css';

import { SignInButton } from '../../features';

const Welcome = () => {
  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <SignInButton />
    </main>
  );
};

export default Welcome;