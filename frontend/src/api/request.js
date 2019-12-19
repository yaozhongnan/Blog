import { BASE_URL } from './index';
import config from '../config';
import { notification } from 'antd';

const { successCode, errorCode } = config;

export default function request(url, data = {}, type = 'GET', async = true) {
  return new Promise((resolve, reject) => {
    const method = type.toUpperCase();
    const xhr = new XMLHttpRequest();

    if (method === 'GET') {
      let str = '';
      Object.keys(data).forEach(key => {
        str += `${key}=${data[key]}&`;
      });
      url = str ? `${url}?${str.substring(0, str.lastIndexOf('&'))}` : url;
      xhr.open(method, `${BASE_URL}${url}`, async);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send();
    } else if (method === 'POST') {
      xhr.open(method, `${BASE_URL}${url}`, async);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else {
      reject('type error');
    }

    xhr.onreadystatechange = () => {
      /**
       * readyState:
       *  0 - 代理被创建，但尚未调用 open() 方法。
       *  1 - open() 方法已经被调用。
       *  2 - send() 方法已经被调用，并且头部和状态已经可获得。
       *  3 - 响应内容接收中； responseText 属性已经包含部分数据。
       *  4 - 请求操作已经完成。这意味着数据传输已经彻底完成或失败。
       * */

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response =
            typeof xhr.response === 'object'
              ? xhr.response
              : JSON.parse(xhr.response);

          if (response.code === successCode) {
            resolve(response);
          }
          if (response.code === errorCode) {
            notification.open({
              message: '跳转到500，温馨提示',
              description: response.msg
            });
          }
        } else {
          console.log('request status: ' + xhr.status);
        }
      }
    };
  });
}
