import React from 'react';

import { BedDouble, User } from 'lucide-react';

import { TextComponent } from '../../_components/IndexComponents';

import ProductPrice from './ProductPriceInfo/ProductPrice';

import styles from './product.module.scss';

const ProductInfoBottom = ({ product }) => {
  return (
    <div className={styles.product__info_bottom}>
      <div className={styles.product__info_bottom_info_house}>
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
        <div className={styles.product__info_bottom_info_house_persons}>
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
      <ProductPrice product={product} />
    </div>
  );
};

export default ProductInfoBottom;
