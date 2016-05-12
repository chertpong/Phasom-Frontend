import React from 'react';
import NavLink from './NavLink';

const style = {
  navbar: {
    backgroundColor: '#795548',
  },
};

const Navbar = (props) => (
  <navbar style={style.navbar}>
    <ul className="navbar__list">
      <li className="navbar__list-item"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
      <li className="navbar__list-item"><NavLink to="/products">Products</NavLink></li>
    </ul>
  </navbar>
);

export default Navbar;
