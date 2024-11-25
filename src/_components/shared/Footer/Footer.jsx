import React from 'react';

import styles from './footer.module.scss';
import { Button, CenterContent, LinkComponent, TextComponent } from '../../IndexComponents';

const Footer = () => {
  return (
    <footer>
      {/* <div className={styles.footer__background}>
        <img src="/images/footer.png" />
        <CenterContent>
          <div className={styles.footer__top_content}>
            <TextComponent text={'Хотите сдать дом?'} size={'heading'} />
            <TextComponent text={'Оставьте заявку и мы свяжемся с вами для уточнения деталей'} />
            <Button text={'Оставить заявку'} type={'primary'} />
          </div>
        </CenterContent>
      </div> */}
      <div className={styles.footer__content}>
        <CenterContent>
          <div className={styles.footer__content_info}>
            <div className={styles.footer__content_info_logo}>
              <img src="/src/assets/logo-white.png" alt="" />
            </div>
            <div className={styles.footer__content_info_catalog}>
              <TextComponent text={'Каталог'} size={'lg'} />
              <ul>
                <li>С бассейном</li>
                <li>Семейные и уютные</li>
                <li>Хиты продаж</li>
                <li>Под свадьбы и корпоративы</li>
                <li>С русской баней на дровах</li>
              </ul>
            </div>
            <div className={styles.footer__content_info_links}>
              <ul>
                <li>
                  <LinkComponent path={'/'} text={'Сотрудничество'} />
                </li>
                <li>
                  <LinkComponent path={'/about'} text={'Частые вопросы'} />
                </li>
              </ul>
            </div>
            <div className={styles.footer__content_info_contacts}>
              <TextComponent text={'8 (843) 528-65-48'} size={'lg'} />
            </div>
          </div>
        </CenterContent>
      </div>
    </footer>
  );
};

export default Footer;
