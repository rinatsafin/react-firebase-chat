import './Navbar.css';

import { AuthButton } from '../AuthButton';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      <AuthButton />
    </nav>
  );
};

export default Navbar;