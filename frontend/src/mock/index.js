import Mock from 'mockjs';
import { BASE_URL } from '../api';

Mock.setup({
  timeout: '200-500'
});

const arr = ['', '@dataImage(300x180)'];
// 根据问题分类获取问题列表
Mock.mock(RegExp(`${BASE_URL}/article/list.*`), 'get', {
  code: 0,
  msg: '',
  data: {
    pagination: {
      currPage: 1,
      total: 150
    },
    'list|10': [
      {
        'articleId|+1': 22,
        title: '@ctitle(10)',
        description: '@cparagraph(1)',
        'illustration|1': arr,
        'isfixtop|1': false,
        'isoriginal|1': false,
        'watch_num|1-100': 1,
        'reply_num|1-100': 1,
        create_time: '@date(T)'
      }
    ]
  }
});

Mock.mock(RegExp(`${BASE_URL}/article/details.*`), 'get', {
  code: 0,
  data: {
    'articleId|+1': 22,
    title: '@ctitle(10)',
    description: '@cparagraph(1)',
    'illustration|1': arr,
    'isfixtop|1': false,
    'isoriginal|1': false,
    'watch_num|1-100': 1,
    'reply_num|1-100': 1,
    create_time: '@date(T)'
  }
});
