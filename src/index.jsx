
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './assets/sass/style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import shopStore from './tools/store/shopStore';
import {  getProduct } from './tools/actions/shopAction';
import { supabase } from './supabase/supabaseClient';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from "react-use-wishlist";
import { ModeProvider } from './context/ModeContext';
import "./i18n/i18next"


const store = shopStore();

store.subscribe(() => {
      console.log(store.getState());
})


const fetchData = async () => {
      const { data, error } = await supabase.from('products').select();

      if (error) {
            console.log(error);
      } else {
            store.dispatch(getProduct(data));
      }
}

fetchData();





ReactDOM.createRoot(document.getElementById('root')).render(

<ModeProvider>
<Provider store={store}>
            <WishlistProvider>
                  <CartProvider>
                        <App />
                  </CartProvider>
            </WishlistProvider>
      </Provider>
</ModeProvider>
     
);
