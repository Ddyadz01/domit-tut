import React from 'react';
import { CenterContent, MiniSlider } from '../../_components/IndexComponents';

import styles from './home.module.scss';

const HomeComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__background}>
        <img src="/home__bg-image.png" alt="" />
      </div>
      <CenterContent>
        <div className={styles.home__content}>
          <div className={styles.home__content_left}>
            <h1>Аренда коттеджей и домов в Казани</h1>
            <p>Найдите идеальный вариант сами или предоставьте это нам</p>
            <MiniSlider />
            <div className={styles.home__content_left_media}>
              <img src="/icons/social_media/youtube.png" alt="" />
              <img src="/icons/social_media/instagram.png" alt="" />
              <img src="/icons/social_media/vk.png" alt="" />
              <img src="/icons/social_media/whatsapp.png" alt="" />
              <img src="/icons/social_media/telegram.png" alt="" />
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};

export default HomeComponent;
