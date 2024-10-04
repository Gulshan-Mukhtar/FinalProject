import Aos from 'aos';
import React, { useContext, useEffect } from 'react';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next'

const About = () => {

    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    const [mode] = useContext(ModeContext);
    const {t}=useTranslation();


    return (
        <div className={`about-main ${mode}`}>
            <div className="container-fluid ">
                <div className='about-box'>
                    <p data-aos="fade-down">{t('About.0')}</p>
                </div>
            </div>
            <div className="container ">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                   

                    <div className="col-lg-9">
                        <div className="about-info" data-aos="zoom-out">
                            <p data-aos="zoom-in"  >{t('About.1')}</p>

                            <p data-aos="zoom-in"> {t('About.2')}</p>

                            <p data-aos="zoom-in">{t('About.3')}</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="p-3 border bg-light text-center poster-box poster-box-1" data-aos="fade-right"></div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="p-3 border bg-light text-center poster-box poster-box-2" data-aos="flip-left" ></div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="p-3 border bg-light text-center poster-box poster-box-3" data-aos="flip-right"></div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="p-3 border bg-light text-center poster-box poster-box-4" data-aos="fade-left"></div>
        </div>
      </div>
    </div>

        </div >
    )
}

export default About
