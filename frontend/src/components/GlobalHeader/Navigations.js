import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function Navigations(props) {
  // visible 控制该组件的显示和隐藏，默认显示
  // layout 值有 horizontal/横排列 vertical/纵排列
  const { visible = true, layout } = props;
  const className =
    layout === "horizontal"
      ? styles.navigations_horizontal
      : layout === "vertical"
      ? styles.navigations_vertical
      : "";

  return (
    <ul className={className} style={{ display: visible ? "flex" : "none" }}>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link className={styles.active} to="/blog">
          博客
        </Link>
      </li>
      <li>
        <Link to="/">关于</Link>
      </li>
      <li>
        <Link to="/">音乐</Link>
      </li>
      <li>
        <Link to="/">留言</Link>
      </li>
      <li>
        <Link to="/">友链</Link>
      </li>
    </ul>
  );
}

export default Navigations;
