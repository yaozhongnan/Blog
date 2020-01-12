import { Fragment } from 'react';
import CategoryBar from '@/components/CategoryBar';
import GlobalHeader from '@/components/GlobalHeader';
import styles from './index.css';

function GlobalLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {props.location.pathname === '/' ? null : (
          <Fragment>
            <GlobalHeader />
            <CategoryBar />
          </Fragment>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default GlobalLayout;
