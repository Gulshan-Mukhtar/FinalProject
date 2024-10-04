import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../context/ModeContext';
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [mode, toggleMode] = useMode();
    const { t } = useTranslation();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        setActiveUser(user);
        window.scrollTo(0, 0);

        const savedLang = localStorage.getItem("lang") || 'en'; 
        changeMyLang(savedLang);
    }, []);

    const icon = mode === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>; 
const [lang, setLang] = useState('en');

    const changeMyLang = (lang) => {
        i18n.changeLanguage(lang);
        setLang(lang);
        localStorage.setItem("lang", lang); 
    };

    return (
        <header className={mode}>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">
                        <div className="end-logo-box">
                            <div className="img-box"></div>

                            {localStorage.getItem("login") === "true" ? (
                                <Link to="/account">
                                    {activeUser && activeUser.fullname === "Admin" ? "Admin" : activeUser?.fullname}
                                </Link>
                            ) : (
                                <Link to="/login">{t("Login.6")}</Link>
                            )}
                            <button onClick={toggleMode} className='dark-light'>
                                {icon}
                            </button>
                            <select
                                className='lang-select'
                                value={lang}
                                onChange={(e) => changeMyLang(e.target.value)}
                            >
                                <option value="en">EN</option>
                                <option value="az">Az</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;





