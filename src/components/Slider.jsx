import React, { useState, useEffect, useCallback } from 'react';
import sliderData from '../data/sliderData';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((currentSlide + 1) % sliderData.length);
    }, [currentSlide]); // currentSlide bağımlılığı eklendi

    const previousSlide = useCallback(() => {
        const newIndex = currentSlide - 1 < 0 ? sliderData.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    }, [currentSlide]); // currentSlide bağımlılığı eklendi

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 2000);
        return () => {
            clearInterval(intervalId);
        };
    }, [nextSlide]); 

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="slider">
            <img src={sliderData[currentSlide].image} alt="Slide" className="slide-image" />
            <div className="text-overlay">
                <h1 className='text-with-blur-background' data-aos="fade-down-left">
                    {t(`Slider.slide${currentSlide + 1}.0`)}
                </h1>
                <p className='text-with-blur-background' data-aos="flip-left">
                    {t(`Slider.slide${currentSlide + 1}.1`)}
                </p>
            </div>

            <div className="controls">
                <button onClick={previousSlide} className="control-button left-button">
                </button>
                <button onClick={nextSlide} className="control-button right-button">
                </button>
            </div>
        </div>
    );
};

export default Slider;

