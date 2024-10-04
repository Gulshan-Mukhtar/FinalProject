import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from "react-use-wishlist";
import { toast } from 'react-toastify';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const SingleCard = ({ alldata }) => {
    const { addItem } = useCart();
    const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

    const handleAddToCart = () => {
        const isLogin = localStorage.getItem('login');
        if (isLogin === 'true') {
            addItem(alldata);
            toast.success(t('SingleCard.1'));
        } else {
            toast.error(t('SingleCard.2'));
        }
    };

   

    const handleToggleWishlist = () => {
        const isLogin = localStorage.getItem('login');
        if (isLogin === 'true') {
            if (inWishlist(alldata.id)) {
                removeWishlistItem(alldata.id);
                toast.error(t('SingleCard.3'))
            } else {
                addWishlistItem(alldata);
                toast.success(t('SingleCard.4'));
            }
        } else {
            toast.error(t('SingleCard.2'));
        }
    };
    

    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    const { t } = useTranslation();


    return (
        <div className="card position-relative single-card moving-content" data-aos="flip-left">
            <div className="heart-icon position-absolute">
                <button onClick={() => handleToggleWishlist(alldata)} className='wish-btn'>
                    {inWishlist(alldata.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
            </div>
            <img src={alldata.photo} alt={alldata.title} />
            <div className="card-body">
                <h5 className="card-title text-center"><b>{alldata.title}</b></h5>
                <p className="card-price text-center">{t('SingleCard.0')} ${alldata.price}</p>
                <div className="row justify-content-center">
                    <div className='col-6 text-center'>
                        <button onClick={handleAddToCart} className="btn add-cart"><i className="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    <div className='col-6 text-center'>
                        <Link to={`/allproducts/${alldata.id}`} className="btn add-cart"><i className="fa-solid fa-eye"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCard;
