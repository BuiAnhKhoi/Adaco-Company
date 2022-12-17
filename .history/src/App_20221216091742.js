import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import Header from "./Components/Headers";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import AllProducts from "./Components/Products/AllProducts/AllProducts";
import HomePage from "./Components/Homepage";
import DetailProduct from "./Components/Products/DetailProduct/DetailProduct";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaKXtEsDJlCwkZ_VCrQq5mIHUwjZMvBBY",
  authDomain: "adaco-company.firebaseapp.com",
  projectId: "adaco-company",
  storageBucket: "adaco-company.appspot.com",
  messagingSenderId: "959370533461",
  appId: "1:959370533461:web:95bef32893439e11bd12dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/allproducts" element={<AllProducts />}></Route>
        <Route path="/detailProduct" element={<DetailProduct /> productName="a"}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
