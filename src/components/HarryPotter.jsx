import React, { useContext, useEffect } from 'react';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';
import Aos from 'aos';

const HarryPotter = () => {
    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);


    return (
        <div className={`slickSlider  ${mode}`}>
            <div className="container movie-box ">
                <div className="row movie-content">
                    <div className="col-lg-5 ">
                        <div className="arrow-box"></div>
                    </div>
                    <div className="col-lg-2 ">
                        <h4 className='text-center'>{t('HarryPotter.0')}</h4>
                    </div>
                    <div className="col-lg-5 ">
                        <div className="arrow-box-2"></div>
                    </div>
                </div>

                <div className="container movie ">
                    <div className="row ">
                        <div className="col-md-3 col-sm-6 ">
                            <div className="p-3 border bg-light text-center poster-box poster-box-1" data-aos="zoom-in"></div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="p-3 border bg-light text-center poster-box poster-box-2" data-aos="zoom-in" ></div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="p-3 border bg-light text-center poster-box poster-box-3" data-aos="zoom-in"></div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="p-3 border bg-light text-center poster-box poster-box-4" data-aos="zoom-in"></div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-3 col-sm-6 ">
                            <div className="p-3 border bg-light text-center poster-box poster-box-5" data-aos="zoom-in"></div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="p-3 border bg-light text-center poster-box poster-box-6" data-aos="zoom-in" ></div>
                        </div>
                        <div className="col-md-3 col-sm-6 ">
                            <div className="p-3 border bg-light text-center poster-box poster-box-7" data-aos="zoom-in"></div>
                        </div>
                        <div className="col-md-3 col-sm-6 ">
                            <div className="p-3 border bg-light text-center poster-box poster-box-8" data-aos="zoom-in"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HarryPotter;

