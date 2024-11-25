import { Button } from '../../../_components/IndexComponents';

import Notification from '../../../utils/Notification';

import { ExternalLink, Heart } from 'lucide-react';

import styles from '../product.module.scss';
import { useSelector } from 'react-redux';

const ProductButtons = () => {
  const { user } = useSelector((state) => state.user);

  const handleShared = () => {
    navigator.clipboard
      .writeText(window.location)
      .then(() => Notification('Ссылка скопирована', 'success'))
      .catch(() => Notification('Что-то пошло не так', 'error'));
  };
  return (
    <div className={styles.product__info_bottom_info_price_buttons}>
      <Button text={user.token ? 'Оставить заявку' : 'Входите'} type={'primary'} />
      {user.token && (
        <Button
          text={
            <>
              Добавить
              <Heart />
            </>
          }
          type={'default'}
        />
      )}
      <Button
        clickFn={() => handleShared()}
        text={
          <>
            Поделиться
            <ExternalLink />
          </>
        }
        type={'default'}
      />
    </div>
  );
};

export default ProductButtons;
