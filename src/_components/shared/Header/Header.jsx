import { Heart, Search, User } from 'lucide-react';

import { Button, CenterContent, LinkComponent, TextComponent } from '../../IndexComponents';

import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '../../../store/Slices/UserSlice';

import styles from './header.module.scss';

export const Header = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

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
            {user.token && (
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
            )}
          </div>
          <div className={styles.header__content__toggle}>
            <Button text={'В системе'} type={'default'} clickFn={() => dispatch(login())} />
            <Button text={'Не в системе'} type={'default'} clickFn={() => dispatch(logout())} />
          </div>
        </div>
      </CenterContent>
    </header>
  );
};
