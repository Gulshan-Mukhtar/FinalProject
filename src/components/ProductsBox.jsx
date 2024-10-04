import React, { useContext, useEffect } from 'react';
import productsData from '../data/productsData'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const ProductsBox = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    const { t } = useTranslation();
    const [mode] = useContext(ModeContext);

    return (
        <div className={`products-box ${mode}`}>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {productsData.map((product, index) => (
                        <div className="col my-3" data-aos="flip-left" key={product.id}>
                            <div className="card-container">
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt={t(`ProductsBox.product${index + 1}.0`)} />
                                    <a href={`/products/${product.id}`} className='text glow-on-hover'>
                                        <p>{t(`ProductsBox.product${index + 1}.0`)}</p>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsBox;




