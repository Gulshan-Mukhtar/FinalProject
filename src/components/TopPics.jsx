import React, { useState, useRef, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleCard from './../pages/SingleCard';
import { useSelector } from 'react-redux'; 
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const TopPics = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = useSelector(state => state);

    const displayedProducts = data.slice(0, 8);

    // const goToNextSlide = () => {
    //     if (sliderRef.current && currentSlide < displayedProducts.length - 1) {
    //         setCurrentSlide(currentSlide + 1);
    //         sliderRef.current.slickNext();
    //     }
    // };

    // const goToPrevSlide = () => {
    //     if (sliderRef.current && currentSlide > 0) {
    //         setCurrentSlide(currentSlide - 1);
    //         sliderRef.current.slickPrev();
    //     }
    // };

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
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
    const {t}=useTranslation();


    return (
        <div className={`slickSlider ${mode}`}>
            <div className="container">
                <div className="row cardSlider">
                    <div className="col-lg-5 my-5">
                        <div className="arrow-box"></div>
                    </div>
                    <div className="col-lg-2 my-5">
                        <h4 className='text-center'>{t("TopPics.0")} </h4>
                    </div>
                    <div className="col-lg-5 my-5">
                        <div className="arrow-box"></div>
                    </div>
                </div>

                <div className="cardSlider">
                    <Slider {...settings} ref={sliderRef}>
                        {displayedProducts.length === 0 ? (
                            <p className='alert alert-warning text-center'>{t("TopPics.1")}</p>
                        ) : (
                            displayedProducts.map(item => (
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

export default TopPics;
