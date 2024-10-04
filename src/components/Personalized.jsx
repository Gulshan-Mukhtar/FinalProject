import Aos from 'aos';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const Personalized = () => {

  useEffect (()=>{
    Aos.init({
        duration:1000
    });

},[])

const { t } = useTranslation();

  return (
    <div className='personalised '>
    <div className="container ">
        <div className="transparent-brown-div" data-aos="flip-up">
            <h2><b>{t('Personalized.0')}</b></h2>
            <p> {t('Personalized.1')}</p>
        </div>
    </div>

</div>
  )
}

export default Personalized
