import React, { Component } from 'react';
import { Spin } from 'antd';
import styles from './style.module.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false
    };
  }

  componentDidMount() {}

  render() {
    const { loading } = this.state;

    return (
      <Spin spinning={loading}>
        <div className={styles.comment_container}>
          <div className={styles.title}>全部评论</div>
          <div className={styles.comment_list}>
            <ul>
              <li>
                <img
                  src="https://images.gitee.com/uploads/images/2018/1226/113453_a425da51_1305863.png"
                  alt="评论人头像"
                />
                <div className={styles.details}>
                  <div className={styles.info}>
                    <span>11</span>
                    <div className={styles.desc}></div>
                    <div className={styles.data}>
                      <span>2楼</span>
                      <span>时间</span>
                      <span>名字</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Spin>
    );
  }
}

export default CommentList;
