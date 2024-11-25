import { useParams } from 'react-router-dom';

import { CenterContent, TextComponent } from '../../_components/IndexComponents';

import ProductInfoTop from './ProductInfoTop';
import ProductInfoContent from './ProductInfoContent';
import ProductInfoBottom from './ProductInfoBottom';

import { useCurrentProduct } from '../../hooks/useCurrentProduct';

import { useEffect, useRef, useState } from 'react';

import styles from './product.module.scss';
import { Pause, Play } from 'lucide-react';

const ProductPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();

  const handleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const { id } = useParams();

  const product = useCurrentProduct(id);

  return product ? (
    <>
      <div className={styles.product__page}>
        <div className={styles.video_bg}>
          <CenterContent>
            <video autoPlay poster={product.imageURL} src={product?.videoURL} muted loop />
          </CenterContent>
        </div>
        <CenterContent>
          <div className={styles.product__info}>
            <ProductInfoTop product={product} />
            <ProductInfoContent product={product} />
            <ProductInfoBottom product={product} />
            <div className={styles.product__info_more}>
              <TextComponent text={'Описание'} size="title" />
              <div className={styles.product__info_more__text}>
                <TextComponent text={product.information} />
              </div>
            </div>
            <div className={styles.product__info__media}>
              <div className={styles.product__info__media_left}>
                <video
                  width={700}
                  height={500}
                  ref={videoRef}
                  poster={product.imageURL}
                  src={product?.videoURL}
                  onClick={handleVideo}
                />
                {!isPlaying && <Play />}
              </div>
              <div className={styles.product__info__media_right}></div>
            </div>
          </div>
        </CenterContent>
      </div>
    </>
  ) : (
    'Товар не найден'
  );
};

export default ProductPage;
