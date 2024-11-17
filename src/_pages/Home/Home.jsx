import React from 'react';

import styles from './home.module.scss';
import { CenterContent } from '../../_components/IndexComponents';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__background}>
        <img src="/src/assets/home__bg-image.png" alt="" />
      </div>

      <CenterContent>
        <div className={styles.home__content}>
          <div className={styles.home__content_left}>
            <h1>Аренда коттеджей и домов в Казани</h1>
            <p>Найдите идеальный вариант сами или предоставьте это нам</p>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};

export default Home;
