import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './App.css';
import Header from './Components/Headers';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import AllProducts from './Components/Products/AllProducts/AllProducts';
import HomePage from './Components/Homepage';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage title={t('homepageHeaderMenu')} />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/allproducts" element={<AllProducts/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
