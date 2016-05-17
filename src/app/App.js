import React, { Component, PropTypes } from 'react';
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
import { muiTheme } from './../config';

class App extends Component {
  getChildContext() {
    return { muiTheme };
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="bodyWrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

App.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default App;
