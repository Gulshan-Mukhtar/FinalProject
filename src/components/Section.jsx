import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const Section = () => {
    const { totalItems } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [keyword, setKeyword] = useState('');
    const data = useSelector(state => state);
    const [mode] = useContext(ModeContext);
    
    const isLoggedIn = localStorage.getItem("login") === "true"; 
    const displayTotalItems = isLoggedIn ? totalItems : 0; 

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setKeyword(''); 
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setKeyword(''); 
    };

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value.toLowerCase());
    };

    const handleItemClick = () => {
        setIsModalOpen(false); 
    };

    const { t } = useTranslation();

    return (
        <section className={`first-section ${mode}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-6 wb-logo">
                        <div className='warnerbros-logo-box'></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6 logo-col">
                        <Link to='/'><div className="box"><div className="logo-box-2"></div></div></Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mi-col">
                        <div className="main-inst-box">
                            <Button type="primary" onClick={showModal} className='text-center magni-box'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Button>
                            <Modal
                                className="custom-modal"
                                title={t("Search.0")}
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={null}
                            >
                                <div className="input-group mb-3">
                                    <input
                                        onChange={handleKeywordChange}
                                        type="text"
                                        className="form-control"
                                        placeholder={t("Search.1")}
                                        aria-label={t("Search.1")}
                                        aria-describedby="basic-addon2"
                                    />
                                </div>
                                <ul className="list-group">
                                    {!keyword ? " " : data.filter(p => p.title.toLowerCase().includes(keyword)).map(item =>
                                        <li key={item.id} className="list-group-item d-flex justify-content-start custom-link">
                                            <Link to={`/allproducts/${item.id}`} onClick={handleItemClick}>
                                                <img height={70} style={{ objectFit: "contain" }} width={70} src={item.photo} alt="img" />
                                                <span className='ms-3'>{item.title}</span>
                                            </Link>
                                        </li>
                                    )}
                                    {data.every(item => !item.title.toLowerCase().includes(keyword)) && (
                                        <p>{t("Search.2")}</p>
                                    )}
                                </ul>
                            </Modal>
                            <Link to='/wishlist'><span className='wish-box'><i className="fa-solid fa-heart"></i></span></Link>
                            <Link to='/basket' className="position-relative basket-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="shop-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ color: 'white' , background: 'linear-gradient(to right, #77530a, #bb9341)',
    opacity: 1  }}>
                                    {displayTotalItems} 
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;

