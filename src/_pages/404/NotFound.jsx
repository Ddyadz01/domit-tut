import React from 'react';

import { CenterContent } from '../../_components/IndexComponents';

import styles from './404.module.scss';

const NotFound = () => {
  return (
    <CenterContent>
      <div className={styles.not__found}>
        <img src="/404.svg" alt="" />
      </div>
    </CenterContent>
  );
};

export default NotFound;
