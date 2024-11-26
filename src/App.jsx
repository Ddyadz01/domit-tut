import { Route, Routes } from 'react-router-dom';

import { Header } from './_components/IndexComponents';
import Footer from './_components/shared/Footer/Footer';

import HeaderDevelopment from './develompentComponents/HeaderDevelopment/HeaderDevelopment';

import Home from './_pages/Home/Home';
import About from './_pages/About/About';
import ProductPage from './_pages/Product/ProductPage';
import Catalog from './_pages/Catalog/Catalog';

import { ScrollToTop } from './utils/ScrollToTop';

import { ToastContainer } from 'react-toastify';

import { useGetproducts } from './hooks/useGetProducts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/Slices/ItemsSlice';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  const { data, status } = useGetproducts();

  useEffect(() => {
    data && dispatch(setProducts({ data, status }));
  }, [data]);
  return (
    <>
      <Header />
      <HeaderDevelopment />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path={'*'} exact element={<h1>Not Found</h1>} />
      </Routes>
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
