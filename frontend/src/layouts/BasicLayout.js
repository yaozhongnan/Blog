import React, { Component } from 'react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import config from '../config';
import Media from 'react-media';
import styles from './BasicLayout.module.scss';

class BasicLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Media query={`(max-width: ${config.headerQuery}px)`}>
        {isMobile => (
          <div className={styles.basicLayout}>
            <div className={styles.headerContainer}>
              <div className={styles.headerWrapper}>
                <GlobalHeader isMobile={isMobile} />
              </div>
            </div>
            <div className={styles.mainContainer}>{children}</div>
            <div className={styles.footerContainer}>
              <GlobalFooter isMobile={isMobile} />
            </div>
          </div>
        )}
      </Media>
    );
  }
}

export default BasicLayout;
