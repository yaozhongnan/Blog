import React from 'react';
import { Redirect } from 'react-router-dom';
import { notification } from 'antd';

function Exception404() {
  notification.open({
    message: '404 Not Found',
    description: '您访问的页面不存在，现已为您跳转至博客首页。'
  });

  return <Redirect to="/" />;
}

export default Exception404;
