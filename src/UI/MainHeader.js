import { NavLink } from "react-router-dom"; //prevents page refresh and state data loss  //<Link to=''>
import classes from './MainHeader.module.css';                  //link vs Nav link    
                                                      
//NavLink activeClassName: if we are on the page this link leads to then add special css class
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/socialcurrency">Social Currency</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/reducetaxes">Reduce Taxes</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/cryptohacks">Crypto Hacks</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/bigpicture">Big Picture</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;