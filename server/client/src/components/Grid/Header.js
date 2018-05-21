import React, { Component, PropTypes } from 'react';

export default class Header extends Component {


  getChildContext() {
    return {
      header: true
    };
  }

  render() {
    const { children } = this.props;
    return (
      <thead>{children}</thead>
    );
  }
}
