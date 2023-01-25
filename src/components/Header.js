import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <h1 className={style.h1}>Math Magicians</h1>
    <nav>
      <ul className={style.navigation}>
        <li>
          <Link to="/">Home</Link>
        </li>
        |
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        |
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
