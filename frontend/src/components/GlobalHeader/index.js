import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import HamburgMenu from "../HamburgMenu";
import Navigations from "./Navigations";
import styles from "./style.module.scss";
import logo from "../../assets/images/logo.png";

// 全局 header 组件，响应式
class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  HamburgMenuClick = () => {
    this.setDrawerVisible(true);
  };

  setDrawerVisible = visible => {
    this.setState({
      visible
    });
  };

  render() {
    const { isMobile } = this.props;
    const { visible } = this.state;

    return (
      <div className={styles.globalHeader}>
        <h1>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>
        <nav className={styles.navbar}>
          <HamburgMenu
            style={{ display: isMobile ? "flex" : "none" }}
            color="#545454"
            HamburgMenuClick={this.HamburgMenuClick}
          />
          <Navigations visible={!isMobile} layout="horizontal" />
          <Drawer
            placement="right"
            width={210}
            visible={visible}
            onClose={() => this.setDrawerVisible(false)}
            bodyStyle={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%"
            }}
          >
            <Navigations layout="vertical" />
          </Drawer>
        </nav>
      </div>
    );
  }
}

export default GlobalHeader;
