import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

import '../i18n/i18next';
import Posters from '../components/Posters';

const MyAccount = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const adminData = {
        fullname: "Admin",
        email: "admin@gmail.com",
        password: "123",
        phone: "+000-111-22-33"
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();

        if (adminData.email === email && adminData.password === password) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(adminData));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            toast.info(t("MyAccount.0"));
        } else {
            toast.error(t("MyAccount.1"));
        }
    };

    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();


    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <div className={`login ${mode}`}>
            <div className="container-fluid">
                <div className="log-box">
                    <p data-aos="fade-down">{t("MyAccount.2")}</p>
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center flex-column my-5">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 admin-border">
                    <h1 data-aos="zoom-in" className="my-5" style={{ color: 'white' }}>{t("MyAccount.3")}</h1>
                    <form onSubmit={loginSubmit}>
                        <div className="mb-3" data-aos="zoom-in">
                            <label data-aos="zoom-in" className="form-label">{t("MyAccount.4")}</label>
                            <input 
                                onChange={e => setEmail(e.target.value)} 
                                type="email" 
                                className="form-control" 
                                value={email}
                            />
                        </div>
                        <div className="my-5" data-aos="zoom-in">
                            <label data-aos="zoom-in" className="form-label">{t("MyAccount.5")}</label>
                            <div className="input-group">
                                <input 
                                    onChange={e => setPassword(e.target.value)} 
                                    type={showPassword ? "text" : "password"} 
                                    className="form-control" 
                                    value={password}
                                />
                                <span 
                                    className="input-group-text" 
                                    style={{ cursor: 'pointer', height: '38px' }} 
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>
                        <button data-aos="zoom-in" type="submit" className="btn btn-dark">{t("MyAccount.6")}</button>
                    </form>


                </div>

                <Posters/>

            </div>
        </div>
    );
};

export default MyAccount;



