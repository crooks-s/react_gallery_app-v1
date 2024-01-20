import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <li><NavLink to="/dogs"></NavLink></li>
      <li><NavLink to="/cats"></NavLink></li>
      <li><NavLink to="/computers"></NavLink></li>
    </header>
  );
}

export default Nav;