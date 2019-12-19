import React from "react";
import { Select } from "antd";
const { Option } = Select;

function SerarchInput(props) {
  return (
    <Select
      showSearch
      placeholder='搜索文章'
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      notFoundContent={null}
      style={{width: '100%'}}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </Select>
  );
}

export default SerarchInput;
