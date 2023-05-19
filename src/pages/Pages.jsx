import { useContext } from 'react';
import { FirebaseContext } from '../shared';
import { Navbar } from '../features';
import ChatPage from './ChatPage';
import WelcomePage from './WelcomePage';

const Pages = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <>
      <Navbar />
      {!user ? (
        <WelcomePage />
      ) : (
        <ChatPage />
      )}
    </>
  );
};

export default Pages;