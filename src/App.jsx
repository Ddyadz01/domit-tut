import { Route, Routes } from 'react-router-dom';

import { Header } from './_components/IndexComponents';

import Home from './_pages/Home/Home';
import About from './_pages/About/About';
import Footer from './_components/shared/Footer/Footer';
import ProductPage from './_pages/Product/ProductPage';
import Catalog from './_pages/Catalog/Catalog';

import { ScrollToTop } from './utils/ScrollToTop';

import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/product/:id" exact element={<ProductPage />} />
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
