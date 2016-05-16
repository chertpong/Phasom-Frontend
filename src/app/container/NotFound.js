import React, { PropTypes } from 'react';

export default class NotFound extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="notFound">
        <p>404 Not found</p>
      </div>
    );
  }
}
NotFound.propTypes = {

};
NotFound.defaultProps = {

};
