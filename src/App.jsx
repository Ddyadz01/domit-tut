import { Route, Router, Routes, useParams } from 'react-router-dom';
import { Header } from './_components/IndexComponents';
import Home from './_pages/Home/Home';
import About from './_pages/About/About';
import Footer from './_components/shared/Footer/Footer';
import ProductPage from './_pages/Product/ProductPage';
import { ScrollToTop } from './utils/ScrollToTop';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/product/:id" exact element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
