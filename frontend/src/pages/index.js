import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Media from 'react-media';
import styles from './index.less';

function Home(props) {
  const handleEnterBlogClick = () => {
    const { history } = props;
    history.push('/blog');
  };

  return (
    <Media query="(max-width: 599px)">
      {isMobile => (
        <div className={styles.home_container}>
          <div className={styles.main}>
            <div className={styles.logo} style={{ width: isMobile ? '100%' : '350px' }}>
              <img
                src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"
                alt="logo"
                style={{ width: isMobile ? '200px' : '100%' }}
              />
            </div>
            <div className={styles.content} style={{ letterSpacing: isMobile ? '4px' : '10px' }}>
              虽多尘色染，犹见墨痕浓。
            </div>
            <Button
              onClick={handleEnterBlogClick}
              className={styles.enter_btn}
              ghost
              size={isMobile ? 'default' : 'large'}
            >
              {' '}
              Enter Blog{' '}
            </Button>
          </div>
        </div>
      )}
    </Media>
  );
}

export default withRouter(Home);
