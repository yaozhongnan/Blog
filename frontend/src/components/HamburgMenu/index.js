import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.scss';

// 汉堡菜单组件
function HamburgMenu(props) {
  const { style, color, HamburgMenuClick, status } = props;
  const spans = [1, 2, 3];

  const handleHamburgMenuClick = () => {
    HamburgMenuClick();
  };

  return (
    <div
      className={classnames(styles.hamburgMenu, status ? styles.active : '')}
      style={style}
      onClick={handleHamburgMenuClick}
    >
      {spans.map(span => (
        <span key={span} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

HamburgMenu.defaultProps = {
  status: false,
  style: {},
  color: '#fff',
  HamburgMenuClick: () => {}
};

HamburgMenu.propTypes = {
  status: PropTypes.bool,
  style: PropTypes.object,
  color: PropTypes.string,
  HamburgMenuClick: PropTypes.func
};

export default HamburgMenu;
