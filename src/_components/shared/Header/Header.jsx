import { Heart, User } from 'lucide-react';

import { Button, CenterContent, LinkComponent } from '../../IndexComponents';

import { useSelector } from 'react-redux';

import styles from './header.module.scss';

export const Header = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <CenterContent>
        <div className={styles.header__content}>
          <div className={styles.header__content_left}>
            <img src="/logo-white.png" alt="" />
            <Button text={'Каталог'} type={'default'} />
          </div>

          <div className={styles.header__content_center}>
            <LinkComponent text={'Сотрудничество'} path={'/'} type={'link'} />
            <LinkComponent text={'Частые вопросы'} path={'/about'} type={'link'} />
          </div>
          {user.token && (
            <div className={styles.header__content_right}>
              <>
                <Heart />
                <div className={styles.header__content_right_user}>
                  {/* <Link to="/">
                  <User /> {user.name}
                </Link> */}
                  <LinkComponent
                    type="primary"
                    path="/"
                    text={
                      <>
                        <User /> {user.name}
                      </>
                    }
                  />
                </div>
              </>
            </div>
          )}
        </div>
      </CenterContent>
    </header>
  );
};
