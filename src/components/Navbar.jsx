import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next'

const Navbar = () => {

  const [mode] = useContext(ModeContext);
  const {t}=useTranslation();

  return (
    <section className={`section-second ${mode}`}>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="arrow-box"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="menu-box "> 
              <Link to='/about' className="menu-link">{t('Navbar.0')}</Link>
              <span className='menu-icon-box'></span>
              <Link to='/allproducts' className="menu-link">{t('Navbar.1')}</Link>
              <span className='menu-icon-box'></span>
              <Link to='/faqs' className="menu-link">{t('Navbar.2')}</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="arrow-box-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

