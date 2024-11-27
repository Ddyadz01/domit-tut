import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { CenterContent, Footer, Header } from './_components/IndexComponents';

import { About, Home, ProductPage } from './_pages/IndexPages';

import { setProducts } from './store/Slices/ItemsSlice';

import { useGetproducts } from './hooks/useGetProducts';

import { ScrollToTop } from './utils/ScrollToTop';

import HeaderDevelopment from './develompentComponents/HeaderDevelopment/HeaderDevelopment';

import PrivateRoutes from './PrivateRoutes';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  const { data, status } = useGetproducts();
  const {user} = useSelector(state => state.user)

  useEffect(() => {
    dispatch(setProducts({ data, status }));
  }, [data]);

  const publichRoutes = [
    {
      id: 1,
      path: '/',
      element: <Home />
    }

  ]

    const privateRoutes = [
      {
        id: 1,
        path: '/product/:id',
        element: <ProductPage />
      },
      {
        id: 2,
        path: '/about',
        element: <About />
      }
    ]

    
  return (
    <>
      <Header />
      <HeaderDevelopment />
      <ScrollToTop />

      <Routes>
        {publichRoutes.map(route => (
          <Route key={route.id} path = {route.path} element={route.element} />
        ))}
      </Routes>

       <PrivateRoutes user={user}>
          <Routes>
            {privateRoutes.map(route => (
          <Route key={route.id} path = {route.path} element={route.element} />
        ))}
          </Routes>
        </PrivateRoutes>
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
