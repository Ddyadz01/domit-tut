import React from 'react';

import styles from './item-card.module.scss';
import { Button, TextComponent } from '../../IndexComponents';
import { MoveRight } from 'lucide-react';

export const ItemCard = ({ item }) => {
  return (
    <div className={styles.item__card}>
      <div className={styles.item__card_top}>
        <img src={item.imageURL} alt="" />
      </div>
      <div className={styles.item__card_content}>
        <TextComponent size="lg" text={item.title} />
        <div className={styles.item__card_content__list}>
          {item.features.sleeping_places && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/icon_bed.png" />
              <TextComponent size="base" text={`${item.features.sleeping_places} cпальных мест`} />
            </div>
          )}
          {item.features.bathhouse && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/banya.png" />
              <TextComponent size="base" text={'Баня'} />
            </div>
          )}
          {item.features.pool && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/icon_waterpool.png" />
              <TextComponent size="base" text={'Бассейн'} />
            </div>
          )}
          {item.features.table_tennis && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/icon_entertainment.png" />
              <TextComponent size="base" text={'Настольный тенис'} />
            </div>
          )}
        </div>
        <div className={styles.item__card_content_bottom}>
          <TextComponent text={'от 10 000 ₽ / сутки'} size="lg" />
          <Button text={'Подробнее'} type={'line'} />
          <MoveRight />
        </div>
      </div>
    </div>
  );
};
