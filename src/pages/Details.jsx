import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import { useWishlist } from "react-use-wishlist";
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';
import Posters from '../components/Posters';

const Details = () => {
    const { id } = useParams(); //
    const data = useSelector(state => state);
    const details = data.find(p => p.id === parseInt(id));

    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(details);
        toast.success(t("Details.7"));
    };

    const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

    const handleToggleWishlist = () => {
        if (inWishlist(details.id)) {
            removeWishlistItem(details.id);
            toast.success(t("Details.1"));
        } else {
            console.log("Adding to wishlist:", details);
            addWishlistItem(details);
            toast.success(t("Details.2"));
        }
    };

    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();



    return (
        <div className={`details-box ${mode}`}>

            <div className="container-fluid my-5">
                <div className='dash-box'>
                    <p data-aos="fade-down">Details</p>
                </div>
            </div>


            {details === undefined ? (
                <h1>{t("Details.3")}</h1>
            ) : (


                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 " >
                            <img src={details.photo} className="d-block mx-lg-auto img-fluid" alt={details.title} width={500} height={500} loading="lazy" />
                        </div>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{details.title}</h1>
                            <p className="lead"><b>{t("Details.5")}</b> ${details.price}</p>
                            <div className="button-group d-flex gap-2 mb-3">
                                <Link to="/allproducts" className="btn btn-dark btn-lg px-4">{t("Details.4")}</Link>
                                <button onClick={handleAddToCart} className="details-btn btn btn-lg px-4"><i className="fa-solid fa-cart-shopping"></i></button>
                                <button onClick={handleToggleWishlist} className="btn btn-primary btn-lg px-4">
                                    {inWishlist(details.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Posters />

        </div>
    );
}

export default Details;


