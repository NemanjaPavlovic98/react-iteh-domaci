import { Fragment } from 'react';
import { Link } from 'react-router-dom'; 

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link Style="text-decoration:none" to="/home"><h1>ItehMeals</h1></Link>
        <div Style="display:flex; flex-direction: row">
          <Link Style="text-decoration:none" to="/home"><h3 Style="margin-right:30px">Homepage</h3></Link>
          <Link Style="text-decoration:none" to="/about"><h3>About</h3></Link>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />

      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table with food!' />
      </div>
    </Fragment>
  );
};

export default Header;
