import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <h1 className={style.h1}>Math Magicians</h1>
    <nav>
      <ul className={style.navigation}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        </li>
        |
        <li>
          <NavLink to="/calculator" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Calculator</NavLink>
        </li>
        |
        <li>
          <NavLink to="/quote" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
