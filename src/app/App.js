import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { FirebaseContext, auth } from '../shared';
import Pages from '../pages';

function App() {
  const [user, loading] = useAuthState(auth);
  
  return (
    <FirebaseContext.Provider value={{ user, loading }}>
      <div className="app">
        <Pages />
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
