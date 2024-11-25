import React from 'react';

import { TextComponent } from '../../_components/IndexComponents';

import { Heart, MapPin, Share2 } from 'lucide-react';

import { ShareLinkProduct } from '../../utils/ShareLinkProduct';

import styles from './product.module.scss';

const ProductInfoTop = ({ product }) => {
  return (
    <div className={styles.product__info_top}>
      <div className={styles.product__info_top_text}>
        <TextComponent text={product.title} size={'heading'} />
        <TextComponent text={product.addres} size={'base'} icon={<MapPin />} />
      </div>
      <div className={styles.product__info_top_btns}>
        <Heart />
        <Share2 onClick={ShareLinkProduct} />
      </div>
    </div>
  );
};

export default ProductInfoTop;
