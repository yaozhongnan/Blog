import request from './request';

// export const BASE_URL = 'http://localhost:4000/api';
export const BASE_URL = 'http://www.mohenc.top:4000/blog/api';

// 获取文章列表
export const queryArticleList = params => request('/article/list', params);

// 获取文章详情
export const queryArticleDetails = params =>
  request('/article/details', params);
