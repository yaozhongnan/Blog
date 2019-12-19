import React, { Component } from 'react';
import styles from './GlobalLayout.module.scss';

class GlobalLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.GlobalLayout}>
        <div className={styles.globalContainer}>{children}</div>
      </div>
    );
  }
}

export default GlobalLayout;
