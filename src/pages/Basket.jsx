import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next'
import Posters from '../components/Posters';



const Basket = () => {
    const {
        isEmpty,
        items,
        emptyCart,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    const navigate = useNavigate();


    const checkUser = () => {
        const isLogin = localStorage.getItem('login');
        if (isLogin === 'true') {
            navigate('/checkOut')

        } else {
            toast.error(t("Basket.0"));
        }
    }

    const [mode] = useContext(ModeContext);

    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    const {t}=useTranslation();



    return (
        <section className={`dark-back  ${mode}`}>

            <div className="container-fluid ">
                <div className='basket-box '>
                    <p data-aos="fade-down">{t("Basket.1")}</p>
                </div>
            </div>

            {isEmpty ? (
                <div className="d-flex align-items-center justify-content-center">
                    <img src="https://25.media.tumblr.com/e5e401e35d609e217c19a24204360b8d/tumblr_mg3h0yvGFD1rgpyeqo1_500.gif" alt="Empty Basket" />
                </div>
            ) : (
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="col-9 my-5 ">
                            <table className="table-spacing">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">{t("Basket.2")}</th>
                                        <th scope="col">{t("Basket.3")}</th>
                                        <th scope="col">{t("Basket.4")}</th>
                                        <th scope="col">{t("Basket.5")}</th>
                                        <th scope="col">{t("Basket.6")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={item.id} className="item-spacing">
                                            <td data-label="Index">{index + 1}</td>
                                            <td data-label="Photo"><img className="basket-img" src={item.photo} alt="Product" /></td>
                                            <td data-label="Title">{item.title}</td>
                                            <td data-label="Price">{Math.round(item.price * item.quantity)}$</td>
                                            <td data-label="Quantity">
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-dark basket-btn me-3">-</button>
                                                <span className="mx-3">{item.quantity}</span>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-dark basket-btn">+</button>
                                            </td>
                                            <td data-label="Delete">
                                                <button onClick={() => { removeItem(item.id); toast.error(t("Basket.10")); }} className="btn btn-dark basket-btn">X</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>



                            </table>
                            <div className='total-box my-5'>
                               <div basket-center>
                               <h4 className="my-4">{t("Basket.7")}: {Math.round(cartTotal)}$</h4>
                                <button onClick={checkUser} className="btn btn-dark my-btn my-3 me-3">{t("Basket.8")}</button>
                                <button onClick={() => { emptyCart(); }} className="btn btn-dark my-btn my-3">{t("Basket.9")}</button>
                               </div>
                            </div>

                        </div>

                    </div>
                    <Posters/>

                </div>
            )}
        </section>
    );

}

export default Basket;

