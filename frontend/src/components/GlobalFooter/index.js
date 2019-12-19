import React, { Component } from "react";
import { Button, Icon } from "antd";
import classnames from "classnames";
import styles from "./style.module.scss";

// 全局页脚组件
class GlobalFooter extends Component {
  render() {
    const { isMobile } = this.props;
    const wrapperStyle = {
      width: isMobile ? "100%" : "33.333333%",
      height: isMobile ? 180 : 300
    };
    const containerStyle = {
      flexWrap: isMobile ? "wrap" : "nowrap"
    };

    return (
      <div className={styles.footer}>
        <div className={styles.backgroundContainer} />
        <div style={containerStyle} className={styles.container}>
          <div style={wrapperStyle} className={styles.wrapper}>
            <div className={classnames(styles.item, styles.intro)}>
              <h3>墨痕</h3>
              <p>虽多尘色染，犹见墨痕浓。</p>
              <Button type="primary">About Me</Button>
            </div>
          </div>
          <div style={wrapperStyle} className={styles.wrapper}>
            <div className={styles.item}>
              <h3>联系我</h3>
              <ul>
                <li>
                  <Icon style={{ marginRight: 14 }} type="environment" />
                  地址: 浙江省杭州市江干区
                </li>
                <li>
                  <Icon style={{ marginRight: 14 }} type="qq" />
                  QQ: 425923407
                </li>
                <li>
                  <Icon style={{ marginRight: 14 }} type="mail" />
                  邮箱: mh.zahirah@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div style={wrapperStyle} className={styles.wrapper}>
            <div className={styles.item}>
              <h3>联系我</h3>
              <ul>
                <li>
                  <Icon style={{ marginRight: 14 }} type="github" />
                  地址: 浙江省杭州市江干区
                </li>
                <li>
                  <Icon style={{ marginRight: 14 }} type="qq" />
                  QQ: 425923407
                </li>
                <li>
                  <Icon style={{ marginRight: 14 }} type="google" />
                  邮箱: mh.zahirah@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright © mohen All Right Reserved{" "}
        </div>
      </div>
    );
  }
}

export default GlobalFooter;
