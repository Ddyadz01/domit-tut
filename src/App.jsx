import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { Footer, Header } from './_components/IndexComponents';

import { About, Home, NotFound, ProductPage } from './_pages/IndexPages';

import { setProducts } from './store/Slices/ItemsSlice';

import { useGetproducts } from './hooks/useGetProducts';

import { ScrollToTop } from './utils/ScrollToTop';

import HeaderDevelopment from './develompentComponents/HeaderDevelopment/HeaderDevelopment';

import AppRoute from './routes/AppRoute';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  const { data, status } = useGetproducts();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setProducts({ data, status }));
  }, [data]);

  const routes = [
    {
      id: 1,
      path: '/',
      element: <Home />,
      type: 'public',
    },
    {
      id: 2,
      path: '*',
      element: <NotFound />,
      type: 'public',
    },
    {
      id: 3,
      path: '/product/:id',
      element: <ProductPage />,
      type: 'public',
    },
    {
      id: 4,
      path: '/about',
      element: <About />,
      type: 'private',
    },
  ];

  return (
    <>
      <Header />
      <HeaderDevelopment />
      <ScrollToTop />
      <AppRoute routes={routes} user={user} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
