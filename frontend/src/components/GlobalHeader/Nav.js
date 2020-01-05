import { Menu } from 'antd';

export default function() {
  const current = 'mail';

  const handleClick = e => {
    console.log('click ', e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail">首页</Menu.Item>
      <Menu.Item key="app">博客</Menu.Item>
    </Menu>
  );
}
