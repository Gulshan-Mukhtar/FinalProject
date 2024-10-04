import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModeContext } from '../context/ModeContext';
import '../i18n/i18next';
import Posters from '../components/Posters';

const FAQs = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [mode] = useContext(ModeContext);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`faqs-box ${mode}`}>
            <div className="container-fluid">
                <div className='faq-box'>
                    <p data-aos="fade-down">{t('faqs.1.title')}</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 my-5">
                        <div className="accordion">
                            {Array.from({ length: 7 }).map((_, index) => (
                                <div className="accordion-item" key={index}>
                                    <button
                                        className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {t(`faqs.${index + 2}.title`)}
                                        <span className={`accordion-icon ${activeIndex === index ? 'rotate' : ''}`}>
                                            {activeIndex === index ? '-' : '+'}
                                        </span>
                                    </button>
                                    {activeIndex === index && (
                                        <div className="accordion-content">
                                            <p>{t(`faqs.${index + 2}.message`)}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Posters/>

            </div>

        </div>
    );
};

export default FAQs;






