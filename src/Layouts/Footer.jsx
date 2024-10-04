import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const Footer = () => {

    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });


    }, []);

    // UP button'nuna tıklandiqda yuxari qalx
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animasyon surusdurme
        });
    };



    return (
        <div className={`footer-bg ${mode}`}>
            <div className="container">
                <div className="row my-5 ">

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-about">
                            <div className="footer-about-center-box">
                            <h4>{t('Footer.0')}</h4>
                            <p ><i class="fa-solid fa-location-arrow"></i> WB Studio Tour London</p>
                            <p > <i class="fa-solid fa-mobile-screen"></i> {t('Footer.1')}:  (000) 111-234
                            </p>
                            <p ><i class="fa-regular fa-envelope"></i>  {t('Footer.2')}: (000) 000-1234
                            </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-about">
                           <div className="footer-about-center-box">
                           <h4>{t('Footer.3')}</h4>
                            <Link to='/faqs' className='ftr-link'>{t('Footer.4')}</Link>
                            <p><a href="https://www.wbdprivacy.com/policycenter/b2c/"> {t('Footer.5')}</a></p>
                            <p><a href="https://www.wizardingworld.com/childrens-privacy-policy"> {t('Footer.6')}
                            </a></p>
                            <p><a href="https://www.wizardingworld.com/legals"> {t('Footer.7')} </a></p>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-about">
                            <div className="footer-about-center-box">
                            <h4>{t('Footer.8')}</h4>
                            <p><a href="https://www.instagram.com/harrypotter/">
                                <i class="fa-brands fa-square-instagram"></i>  Instagram
                            </a></p>
                            <p><a href="https://x.com/harrypotter"><i class="fa-brands fa-twitter"></i>  Twitter</a></p>
                            <p><a href="https://www.wizardingworld.com/"><i class="fa-solid fa-wand-sparkles"></i> Wizarding World</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-12">
                        <div className='Sign-up-box'>
                            <span> {t('Footer.9')} <Link to='/login' className='footer-btn'>{t('Footer.10')}</Link></span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                    style={{
                        position: 'fixed',
                        right: '50px',
                        bottom: '70px',
                        display: visible ? 'block' : 'none',
                        backgroundColor: 'ffd277',
                        border: '1 px solid #FFD700',
                        borderRadius: '5px',
                        width:'30px',
                        background: 'linear-gradient(to right, #77530a, #bb9341)',
                        color:'#fff',
                        border:'1px solid #fff',
                        padding:"2px"
                    }}

                    onClick={scrollToTop}
                >
                    <i class="fa-solid fa-arrow-up"></i> </button>
        </div>
    );
}

export default Footer;

