import { useQuery } from '@tanstack/react-query';
import { ProductSerices } from '../services/product.services';

export const useGetproducts = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: ProductSerices.getProducts,
  });
