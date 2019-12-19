import React, { Component } from "react";
import BasicLayout from "./BasicLayout";
import Media from "react-media";
import config from '../config';
import BlogNavigation from '../components/BlogNavigation';
import styles from "./BlogLayout.module.scss";

class BlogLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Media query={`(max-width: ${config.blogQuery}px)`}>
        {isMobile => (
          <BasicLayout>
            <div className={styles.blogLayoutContainer}>
              <div
                style={{ display: isMobile ? "none" : "block" }}
                className={styles.blogLayoutContainer_left}
              >
                <BlogNavigation />
              </div>
              <div
                style={{ marginLeft: isMobile ? 0 : 20 }}
                className={styles.blogLayoutContainer_list}
              >
                {children}
              </div>
            </div>
          </BasicLayout>
        )}
      </Media>
    );
  }
}

export default BlogLayout;
