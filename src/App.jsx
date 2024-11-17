import { Route, Router, Routes } from 'react-router-dom';
import { Header } from './_components/IndexComponents';
import './App.scss';
import Home from './_pages/Home/Home';
import About from './_pages/About/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
