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
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };

    return (
        <div className={`footer-bg ${mode}`}>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-about">
                            <div className="footer-about-center-box">
                                <h4>{t('Footer.0')}</h4>
                                <p><i className="fa-solid fa-location-arrow"></i> WB Studio Tour London</p>
                                <p><i className="fa-solid fa-mobile-screen"></i> {t('Footer.1')}: (000) 111-234</p>
                                <p><i className="fa-regular fa-envelope"></i> {t('Footer.2')}: (000) 000-1234</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-about">
                            <div className="footer-about-center-box">
                                <h4>{t('Footer.3')}</h4>
                                <Link to='/faqs' className='ftr-link'>{t('Footer.4')}</Link>
                                <p><a href="https://www.wbdprivacy.com/policycenter/b2c/"> {t('Footer.5')}</a></p>
                                <p><a href="https://www.wizardingworld.com/childrens-privacy-policy"> {t('Footer.6')}</a></p>
                                <p><a href="https://www.wizardingworld.com/legals"> {t('Footer.7')}</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-about">
                            <div className="footer-about-center-box">
                                <h4>{t('Footer.8')}</h4>
                                <p><a href="https://www.instagram.com/harrypotter/">
                                    <i className="fa-brands fa-square-instagram"></i> Instagram
                                </a></p>
                                <p><a href="https://x.com/harrypotter"><i className="fa-brands fa-twitter"></i> Twitter</a></p>
                                <p><a href="https://www.wizardingworld.com/"><i className="fa-solid fa-wand-sparkles"></i> Wizarding World</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className='Sign-up-box'>
                            <span>{t('Footer.9')} <Link to='/login' className='footer-btn'>{t('Footer.10')}</Link></span>
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
                    backgroundColor: '#ffd277', 
                    border: '1px solid #FFD700',
                    borderRadius: '5px',
                    width: '30px',
                    background: 'linear-gradient(to right, #77530a, #bb9341)',
                    color: '#fff',
                    padding: "2px"
                }}
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default Footer;

