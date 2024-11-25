import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useCurrentProduct = (id) => {
  const [product, setProduct] = useState(null);
  const { items } = useSelector((state) => state.items);

  useEffect(() => {
    const product = items.filter((product) => product.id == id);
    setProduct(product[0]);
  }, [id]);
  return product;
};
