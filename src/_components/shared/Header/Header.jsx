import { Heart, Search } from 'lucide-react';

import { Button, CenterContent, LinkComponent } from '../../IndexComponents';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <CenterContent>
        <div className={styles.header__content}>
          <div className={styles.header__content_left}>
            <img src="/src/assets/logo-white.png" alt="" />
            <Button text={'Каталог'} type={'default'} />
          </div>

          <div className={styles.header__content_center}>
            <LinkComponent text={'Сотрудничество'} path={'/'} type={'link'} />
            <LinkComponent text={'Частые вопросы'} path={'/about'} type={'link'} />
          </div>

          <div className={styles.header__content_right}>
            <Heart />
            <div className={styles.header__content_right_search}>
              <Search />
              <input type="text" placeholder="Поиск по названию" />
            </div>
          </div>
        </div>
      </CenterContent>
    </header>
  );
};
