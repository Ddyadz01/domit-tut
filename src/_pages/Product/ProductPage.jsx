import { useParams } from 'react-router-dom';

import { CenterContent, TextComponent } from '../../_components/IndexComponents';

import ProductInfoTop from './ProductInfoTop';
import ProductInfoContent from './ProductInfoContent';
import ProductInfoBottom from './ProductInfoBottom';

import { useEffect, useRef, useState } from 'react';

import { useCurrentProduct } from '../../hooks/useCurrentProduct';

import { Play } from 'lucide-react';

import styles from './product.module.scss';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { id } = useParams();
  const product = useCurrentProduct(id);

  const videoRef = useRef();

  const handleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

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
                ></video>
                {!isPlaying && (
                  <div className={styles.product__info__media_left_icon}>
                    <Play />
                  </div>
                )}
              </div>
              <div className={styles.product__info__media_right}></div>
            </div>
          </div>
        </CenterContent>
      </div>
    </>
  ) : (
    'Тест'
  );
};

export default ProductPage;
