import React, { PropTypes } from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <p>Home page</p>
      </div>
    );
  }
}
Home.propTypes = {

};
Home.defaultProps = {

};
