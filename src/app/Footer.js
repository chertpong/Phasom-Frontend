import React from 'react';

const style = {
  footer: {
    backgroundColor: '#795548',
  },
  p: {
    color: '#FFFFFF',
  },
};
const Footer = props => (
  <footer className="footer" style={style.footer}>
    <p style={style.p}>Footer</p>
  </footer>
);

export default Footer;
