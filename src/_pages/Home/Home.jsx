import React from 'react';

import { CenterContent, MiniSlider, TextComponent } from '../../_components/IndexComponents';

import { Instagram, QrCode, Youtube } from 'lucide-react';

import styles from './home.module.scss';

const Home = () => {
  return (
    <div className="home_page">
      <div className={styles.home}>
        <div className={styles.home__background}>
          <img src="/src/assets/home__bg-image.png" alt="" />
        </div>
        <CenterContent>
          <div className={styles.home__content}>
            <div className={styles.home__content_left}>
              <h1>Аренда коттеджей и домов в Казани</h1>
              <p>Найдите идеальный вариант сами или предоставьте это нам</p>
              <MiniSlider />
              <div className={styles.home__content_left_media}>
                <Youtube />
                <Instagram />
                <QrCode />
              </div>
            </div>
          </div>
        </CenterContent>
      </div>
      <div className="home_test">
        <CenterContent>
          <TextComponent size={'heading'} text={'О нас'} />
        </CenterContent>
      </div>
    </div>
  );
};

export default Home;
