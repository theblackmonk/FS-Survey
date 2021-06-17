import { NavLink } from "react-router-dom";                    //prevents page refresh and state data loss  //<Link to=''>
import classes from './MainFooter.module.css';                  //link vs Nav link    
                  
                                      

//NavLink activeClassName: if we are on the page this link leads to then add special css class
const MainFooter = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          
        </ul>
      </nav>
    </header>
  );
};


// <li>
 //  <NavLink activeClassName={classes.active} to="/socialcurrency">Presentation recording</NavLink>
// </li>
 // <li>
 //   <NavLink activeClassName={classes.active} to="/reducetaxes">Fundamental Secrets Website</NavLink>
 // </li>
 //  <li>
 //   <NavLink activeClassName={classes.active} to="/cryptohacks">Fundamental Secrets Youtube</NavLink>
 // </li>
 // <li>
  //   <NavLink activeClassName={classes.active} to="/bigpicture">Gallery</NavLink>
 // </li>

export default MainFooter;