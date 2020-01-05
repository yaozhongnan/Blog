import { Input } from 'antd';

const { Search } = Input;

export default function(props) {
  const { isMobile } = props;
  return (
    <Search
      style={{ width: isMobile ? 150 : 240 }}
      placeholder="搜索文章"
      onSearch={value => console.log(value)}
      enterButton={!isMobile}
    />
  );
}
