import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const ShopNow = () => {

    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    const { t } = useTranslation();

    
    return (
        <div className='shopNow'>
            <div className="container" data-aos="zoom-in">
                <div className="transparent-brown-div">
                    <h1><b>{t('ShopNow.0')}</b></h1>
                    <p>{t('ShopNow.1')}</p>
                    <Link to='/allproducts' className='gold-button'>{t('ShopNow.2')}</Link>
                </div>
            </div>
        </div>
    );
}

export default ShopNow;

