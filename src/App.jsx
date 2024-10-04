import React from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsBox from './components/ProductsBox';
import ShopNow from './components/ShopNow';
import CardSlider from './components/CardSlider';
import Personalized from './components/Personalized';
import TrendingProducts from './components/HarryPotter';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import FAQs from './pages/FAQs';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/Dashboard/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProducts from './pages/Dashboard/EditProduct';
import Account from './pages/Account/Account';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Details from './pages/Details';
import Section from './components/Section';
import CheckOut from './pages/CheckOut';
import SuccsessPayment from './pages/SuccessPayment';
import TopPics from './components/TopPics';
import MyAccount from './pages/MyAccount';
import Posters from './components/Posters';


const App = () => {

  return (
    <div >
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <Header />
        <Section />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/faqs" element={<FAQs />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboard/add" element={<AddProduct />}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/dashboard/edit/:slug" element={<EditProducts/>}/>
          <Route path="/" element={<MainContent  />} />
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/allproducts/:id" element={<Details/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path='/success_payment' element={<SuccsessPayment/>}></Route>
          <Route path='/toppics' element={<TopPics/>}></Route>
          <Route path='/myaccount' element={<MyAccount/>}></Route>
          <Route path='/posters' element={<Posters/>}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const MainContent = () => {
  return (
    <div>
      <Slider  />
      <ProductsBox />
      <Personalized />
      <CardSlider />
      <ShopNow />
      <TrendingProducts />
    </div>
  );
}

export default App;

