import Nav from './Nav';
import Search from './Search';
import MobileNav from './MobileNav';
import Link from 'umi/link';
import Media from 'react-media';
import logo from '@/assets/logo.png';
import styles from './index.less';

export default function() {
  return (
    <Media
      queries={{
        mini: '(max-width: 390px)',
        small: '(max-width: 478px)',
        medium: '(max-width: 600px)',
      }}
    >
      {({ mini, small, medium }) => (
        <header className={styles.container} style={{ padding: medium ? '0 12px' : 0 }}>
          <div className={styles.wrapper}>
            <div className={styles.main}>
              <div>
                <Link
                  to="/"
                  className={styles.logo}
                  style={{
                    marginRight: (() => {
                      if (mini) {
                        return 10;
                      }
                      if (medium) {
                        return 30;
                      }
                      return 50;
                    })(),
                  }}
                >
                  <img
                    style={{
                      width: (() => {
                        if (mini) {
                          return '80px';
                        }
                        if (medium) {
                          return '100px';
                        }
                      })(),
                    }}
                    src={logo}
                    alt="logo"
                  />
                </Link>
                {medium ? <MobileNav /> : <Nav />}
              </div>
              <Search isMobile={small} />
            </div>
          </div>
        </header>
      )}
    </Media>
  );
}
