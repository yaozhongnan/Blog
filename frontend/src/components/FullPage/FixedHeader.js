import React, { Component } from 'react';

class FixedHeader extends Component {
  render() {
    const headerStyle = {
      position: 'fixed',
      width: '100%',
      zIndex: 10,
      top: 0
    };

    return <header style={headerStyle}>{this.props.children}</header>;
  }
}

export default FixedHeader;
