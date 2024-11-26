import React from 'react';

import { BedDouble, User } from 'lucide-react';

import { TextComponent } from '../../_components/IndexComponents';

import ProductPrice from './ProductPriceInfo/ProductPrice';

import styles from './product.module.scss';

const ProductInfoBottom = ({ product }) => {
  return (
    <div className={styles.product__info_bottom}>
      <div className={styles.product__info_bottom_info_house}>
        <table className={styles.product__info_bottom_info_house__table_row}>
          <thead>
            <tr>
              <th scope="col">
                <TextComponent text={'Тип жилья'} size="base" />
              </th>
              <th scope="col">
                <TextComponent text={'Этажи'} size="base" />
              </th>
              <th scope="col">
                <TextComponent text={'Площадь'} size="base" />
              </th>
              <th scope="col">
                <TextComponent text={'Участок'} size="base" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.persons_info.type_house}</td>
              <td>{product.persons_info.floors}</td>
              <td>
                {product.persons_info.house_area} м<sup>2</sup>
              </td>
              <td>{product.persons_info.plot_size} соток</td>
            </tr>
          </tbody>
        </table>
        <table className={styles.product__info_bottom_info_house__table_col}>
          <thead>
            <tr>
              <th scope="col" colSpan={4}>
                <TextComponent text={'Дополнительная информация'} size="lg" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TextComponent
                  text={`${product.persons_info.sleeping_places} спальных мест`}
                  icon={<BedDouble />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent
                  text={`${product.persons_info.count_bedrooms} спален`}
                  icon={<BedDouble />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent
                  text={`до ${product.persons_info.max_persons} человек`}
                  icon={<User />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent text={`Еще что-то`} icon={<User />} size="sm" />
              </td>
            </tr>
            <tr>
              <td>
                <TextComponent
                  text={`${product.persons_info.sleeping_places} спальных мест`}
                  icon={<BedDouble />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent
                  text={`${product.persons_info.count_bedrooms} спален`}
                  icon={<BedDouble />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent
                  text={`до ${product.persons_info.max_persons} человек`}
                  icon={<User />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent text={`Еще что-то`} icon={<User />} size="sm" />
              </td>
            </tr>
            <tr>
              <td>
                <TextComponent
                  text={`${product.persons_info.sleeping_places} спальных мест`}
                  icon={<BedDouble />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent
                  text={`${product.persons_info.count_bedrooms} спален`}
                  icon={<BedDouble />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent
                  text={`до ${product.persons_info.max_persons} человек`}
                  icon={<User />}
                  size="sm"
                />
              </td>
              <td>
                <TextComponent text={`Еще что-то`} icon={<User />} size="sm" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.product__info_bottom_info_house_persons}></div>
      </div>
      <ProductPrice product={product} />
    </div>
  );
};

export default ProductInfoBottom;
