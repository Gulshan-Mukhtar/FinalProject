import React, { useContext, useEffect } from 'react';
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next'
import Posters from '../components/Posters';


const Wishlist = () => {
    const {
        isWishlistEmpty,
        items,
        removeWishlistItem,
        inWishlist
    } = useWishlist();

    const { addItem } = useCart();

    const handleRemoveFromWishlist = (itemId) => {
        removeWishlistItem(itemId);
        toast.error(t("Wishlist.0"))

    };

    const handleAddToCart = (item) => {
        addItem(item);
        toast.success(t("Wishlist.1"))
    };

    const [mode] = useContext(ModeContext);

    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    const {t}=useTranslation();



    return (
        <div className={`wish-back  ${mode}`}>

            <div className="container-fluid ">
                <div className='wishlist-box '>
                    <p data-aos="fade-down">{t("Wishlist.2")}</p>
                </div>
            </div>
            <div className="container ">

                {isWishlistEmpty ? (
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src="https://25.media.tumblr.com/e5e401e35d609e217c19a24204360b8d/tumblr_mg3h0yvGFD1rgpyeqo1_500.gif" alt="" />
                    </div>
                ) : (
                    <>
                        <div className="row ">
                            {items.map(item => (

                                <div className="col-lg-4 col-md-6 mb-4 my-5" key={item.id}>
                                    <div className="card position-relative single-card">
                                        <div className="heart-icon position-absolute">
                                            <button onClick={() => handleRemoveFromWishlist(item.id)} className='wish-btn'>
                                                {inWishlist(item.id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                                            </button>
                                        </div>
                                        <img src={item.photo} className="card-img-top" alt="Product" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center"><b>{item.title}</b></h5>
                                            <p className="card-price text-center">Price: {item.price}$</p>
                                            <div className="row justify-content-center">
                                                <div className='col-6 text-center'>
                                                    <button className="btn add-cart" onClick={() => handleAddToCart(item)}><i class="fa-solid fa-cart-shopping"></i></button>
                                                </div>
                                                <div className='col-6 text-center'>
                                                    <Link to={`/allproducts/${item.id}`} className="btn add-cart"><i class="fa-solid fa-eye"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <Posters/>

        </div>
    );
}

export default Wishlist;



