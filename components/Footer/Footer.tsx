import styles from './Footer.module.scss';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}></div>
    </footer>
  );
};
