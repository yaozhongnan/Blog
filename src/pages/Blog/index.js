import React, { Component } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import reqwest from 'reqwest';
import styles from './index.less';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      hasMore: true,
    };
  }

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <header className={styles.header}>
            <ul>
              <li>前端</li>
              <li>后端</li>
              <li>个人笔记</li>
              <li>转载</li>
              <li>其他</li>
            </ul>
          </header> */}
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Blog;
