import React, { useRef, useContext, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleCard from './../pages/SingleCard';
import { useSelector } from 'react-redux';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const SlickSlider = () => {
    const sliderRef = useRef(null);
    const data = useSelector(state => state);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();

    const nextSlide = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); 
        }
    }, []);

    return (
        <div className={`slickSlider ${mode}`}>
            <div className="container">
                <div className="row cardSlider">
                    <div className="col-lg-5 my-5">
                        <button onClick={nextSlide} className="arrow-box">Next</button>
                    </div>
                    <div className="col-lg-2 my-5">
                        <h4 className='text-center'>{t('CardSlider.0')}</h4>
                    </div>
                    <div className="col-lg-5 my-5">
                        <div className="arrow-box"></div>
                    </div>
                </div>

                <div className="cardSlider">
                    <Slider {...settings} ref={sliderRef}>
                        {data.length === 0 ? (
                            <p className='alert alert-warning text-center'>{t('CardSlider.1')}</p>
                        ) : (
                            data.map(item => (
                                <div className="card custom-card my-5" key={item.id}>
                                    <SingleCard alldata={item} />
                                </div>
                            ))
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SlickSlider;



