import React, { Component } from 'react';
import { Card } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { formatRouterSearch } from '../../utils';
import SearchInput from './SerchInput';
import config from '../../config';
import styles from './style.module.scss';

const { categorys } = config;

// 博客左侧组件
class BlogNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: undefined
    };
  }

  componentDidMount() {
    const {
      location: { search }
    } = this.props;
    const { categoryId } = formatRouterSearch(search);
    this.setState({
      categoryId: categoryId ? Number(categoryId) : 1
    });
  }

  handleCategoryClick = categoryId => {
    this.setState({
      categoryId: Number(categoryId)
    });
  };

  render() {
    const { categoryId } = this.state;

    return (
      <div className="wrapper">
        <Card
          headStyle={{ background: 'grey' }}
          title={<SearchInput />}
          bordered={false}
          style={{ marginBottom: 20 }}
          bodyStyle={{ padding: '20px 0' }}
        >
          <ul className={styles.categorys}>
            {categorys.map(category => (
              <li key={category.key}>
                <Link
                  onClick={() => this.handleCategoryClick(category.key)}
                  to={`/blog?categoryId=${category.key}&page=1`}
                  className={categoryId === category.key ? styles.active : ''}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="热门文章" bordered={false} style={{ marginBottom: 20 }}>
          <ul className={styles.articles}>
            <li>
              <span>1</span>
              <a href="1">
                dsadasdasdasdasdasdddddd 阿瑟东按时大苏打撒大阿三阿三
              </a>
            </li>
            <li>
              <span>2</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>3</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>4</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>4</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>4</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>4</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>4</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
            <li>
              <span>4</span>
              <a href="1">dsadasdasdasdasdasdddddd</a>
            </li>
          </ul>
        </Card>
        <Card title="标签搜索" bordered={false}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default withRouter(BlogNavigation);
