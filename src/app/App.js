import React, {PropTypes} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const propTypes = {
  children: PropTypes.node,
};

const App = (props) => (
  <div className="wrapper">
    <Navbar />
    <div className="bodyWrapper">
      {props.children}
    </div>
    <Footer />
  </div>

);

App.propTypes = propTypes;

export default App;
