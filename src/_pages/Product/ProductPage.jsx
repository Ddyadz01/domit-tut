import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CenterContent, TextComponent } from '../../_components/IndexComponents';

import styles from './product.module.scss';
import { BedDouble, Heart, MapPin, Share2, User } from 'lucide-react';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { items } = useSelector((state) => state.items);
  const { id } = useParams();

  useEffect(() => {
    const product = items.filter((product) => product.id == id);
    setProduct(product[0]);
  }, [id]);

  return product ? (
    <div className={styles.product__page}>
      <CenterContent>
        <div className={styles.product__info}>
          <div className={styles.product__info_top}>
            <div className={styles.product__info_top_text}>
              <TextComponent text={product.title} size={'heading'} />
              <TextComponent text={product.addres} size={'base'} icon={<MapPin />} />{' '}
            </div>
            <div className={styles.product__info_top_btns}>
              <Heart />
              <Share2 />
            </div>
          </div>
          <div className={styles.product__info_content}>
            <div className={styles.product__info_content_left}>
              <img src={product.imageURL} alt="" />
            </div>
            <div className={styles.product__info_content_right}>
              {product.features?.images?.map((image) => (
                <img src={image} />
              ))}
            </div>
          </div>
          <div className={styles.product__info_bottom}>
            <div className={styles.product__info_bottom_info_home}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">
                      <TextComponent text={'Тип жилья'} size="sm" />
                    </th>
                    <th scope="col">
                      <TextComponent text={'Этажи'} size="sm" />
                    </th>
                    <th scope="col">
                      <TextComponent text={'Площадь'} size="sm" />
                    </th>
                    <th scope="col">
                      <TextComponent text={'Участок'} size="sm" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.persons_info.type_house}</td>
                    <td>{product.persons_info.floors}</td>
                    <td>
                      {product.persons_info.house_area}м<sup>2</sup>
                    </td>
                    <td>{product.persons_info.plot_size} соток</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.product__info_bottom_info_home_persons}>
                <TextComponent
                  text={`${product.persons_info.sleeping_places} спальных мест`}
                  icon={<BedDouble />}
                  size="lg"
                />
                <TextComponent
                  text={`${product.persons_info.count_bedrooms} спален`}
                  icon={<BedDouble />}
                  size="lg"
                />
                <TextComponent
                  text={`до ${product.persons_info.max_persons} человек`}
                  icon={<User />}
                  size="lg"
                />
              </div>
            </div>
            <div className={styles.product__info_bottom_info_price}>{/* <h1>Prices</h1> */}</div>
          </div>
        </div>
      </CenterContent>
    </div>
  ) : (
    'Товар не найден'
  );
};

export default ProductPage;
