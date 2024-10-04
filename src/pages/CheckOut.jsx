import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopPics from '../components/TopPics';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';



const CheckOut = () => {
  const { setItems } = useCart();
  const navigate = useNavigate();

  // odenis dtallarinin doldurulub doldurulmadigi yoxlanir
  const [paymentDetailsFilled, setPaymentDetailsFilled] = useState(false);

  const handleInputChange = () => {

    const cardNumber = document.getElementById('cardNumber').value;
    const nameOnCard = document.getElementById('nameOnCard').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvvCode = document.getElementById('cvvCode').value;

    if (cardNumber && nameOnCard && expiryDate && cvvCode) {
      setPaymentDetailsFilled(true);
    } else {
      setPaymentDetailsFilled(false);
    }
  };

  const completePayment = () => {
    if (!paymentDetailsFilled) {
      alert(t("CheckOut.0"));
      return;
    }

    setItems([]);

    navigate('/success_payment');
  };

  useEffect(() => {
    Aos.init({
      duration: 1000
    });

  }, [])

  const [mode] = useContext(ModeContext);
  const { t } = useTranslation();
  const data = useSelector(state => state);

  return (
    <section className={`payment-section ${mode}`}>
      <div className="container-fluid ">
        <div className='check-box '>
          <p data-aos="fade-down">{t("CheckOut.1")}</p>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex align-items-center justify-content-center flex-column">

          <div className="col-lg-9 my-5">
            <div className="accordion" id="accordionPayment"  >
              {/* Kredit karti*/}
              <div className="accordion-item mb-3"  >
                <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                  <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCC" aria-expanded="false">
                   
                  </div>
                  <span>
                    <svg width={34} height={25} xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </span>
                </h2>
                <div id="collapseCC" className="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label className="form-label">{t("CheckOut.2")}</label>
                      <input type="text" className="form-control" id="cardNumber" onChange={handleInputChange} />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3" >
                          <label className="form-label" >{t("CheckOut.3")}</label>
                          <input type="text" className="form-control" id="nameOnCard" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mb-3">
                          <label className="form-label">{t("CheckOut.4")}</label>
                          <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mb-3">
                          <label className="form-label">{t("CheckOut.5")}</label>
                          <input type="password" className="form-control" id="cvvCode" onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PayPal */}
              <div className="accordion-item mb-3 border"  >
                <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                  <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePP" aria-expanded="false" >
                    <input className="form-check-input" type="radio" name="payment" id="payment2" onChange={handleInputChange} />
                    <label className="form-check-label pt-1" htmlFor="payment2" >
                    {t("CheckOut.6")}
                    </label>
                  </div>
                  <span>
                    <svg width={103} height={25} xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </span>
                </h2>
                <div id="collapsePP" className="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">
                    <div className="px-2 col-lg-6 mb-3">
                      <label className="form-label">{t("CheckOut.7")}</label>
                      <input type="email" className="form-control" onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className='btn btn-dark payment-btn my-5' onClick={completePayment} disabled={!paymentDetailsFilled}>
          {t("CheckOut.8")}          </button>

          <TopPics />

        </div>
      </div>
    </section>
  );
};

export default CheckOut;
