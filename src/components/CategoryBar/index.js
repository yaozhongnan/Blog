import Media from 'react-media';
import styles from './index.less';

export default function() {
  return (
    <Media
      queries={{
        medium: '(max-width: 980px)',
      }}
    >
      {({ medium }) => (
        <div className={styles.container}>
          <ul
            className={styles.list}
            style={{ width: medium ? 'auto' : '', overflowX: medium ? 'auto' : 'hidden' }}
          >
            <li className={styles.active} style={{ padding: medium ? '0 12px' : '0 12px 0 0' }}>
              全部
            </li>
            <li>前端</li>
            <li>后端</li>
            <li>个人笔记</li>
            <li>转载</li>
            <li>其他</li>
          </ul>
        </div>
      )}
    </Media>
  );
}
