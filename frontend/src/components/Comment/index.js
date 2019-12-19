import React, { Component } from 'react';
import E from 'wangeditor';
import { Button, message } from 'antd';
import styles from './style.module.scss';

/**
 * props: getCommentContent() 获取评论 html 内容
 *
 * @class Comment
 * @extends {Component}
 */
class Comment extends Component {
  componentDidMount() {
    const toolbar = this.refs.toolbar;
    const text = this.refs.text;
    this.editor = new E(toolbar, text);
    // 自定义菜单配置
    this.editor.customConfig.menus = ['emoticon', 'link'];
    this.editor.create();
  }

  handleSubmit = () => {
    const editorContent = this.editor.txt.text();
    const isEmptyValue = editorContent.replace(/&nbsp;| /g, '');
    if (isEmptyValue === '') {
      message.error('请输入评论内容！');
      return;
    }
    const { getCommentContent } = this.props;
    if (getCommentContent) {
      getCommentContent(this.editor.txt.html());
    }
  };

  render() {
    return (
      <div className={styles.comment_container}>
        <div className={styles.editer_container}>
          <div ref="toolbar" className={styles.editer_toolbar}></div>
          <div ref="text" className={styles.editer_text}></div>
        </div>
        <Button type="primary" onClick={this.handleSubmit}>
          发表
        </Button>
      </div>
    );
  }
}

export default Comment;
