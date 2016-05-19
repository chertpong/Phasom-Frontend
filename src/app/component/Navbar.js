import React from 'react';
import NavLink from './NavLink';
import AppBar from 'material-ui/AppBar';

const style = {
  navbar: {
    backgroundColor: '#795548',
  },
};

const Navbar = (props) => (
  <AppBar title="WatDoiPhaSom">
    <ul className="navbar__list">
      <li className="navbar__list-item"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
      <li className="navbar__list-item"><NavLink to="/products">Products</NavLink></li>
      <li className="navbar__list-item"><NavLink to="/shoppingCart">Cart</NavLink></li>
    </ul>
  </AppBar>
);

export default Navbar;
