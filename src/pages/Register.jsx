import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next'
import Posters from '../components/Posters';


const Register = () => {
    const [user, setUser] = useState({
        fullname: "",
        tel: "+000-11-222-33-44",
        email: "",
        password: "",
        againPassword: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showAgainPassword, setShowAgainPassword] = useState(false); // Yeni state

    const registerSubmit = (e) => {
        e.preventDefault();
        if (!user.fullname || !user.tel || !user.email || !user.password || !user.againPassword) {
            toast.info(t('Register.0'));
        } else {
            if (user.password === user.againPassword) {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                const existingUser = registeredUsers.find((u) => u.email === user.email);
                if (existingUser) {
                    toast.info(t('Register.1'));
                } else {
                    registeredUsers.push(user);
                    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                    setTimeout(() => {
                        window.location.assign("/login");
                    }, 2000);
                    toast.success(t('Register.2'));
                }
            } else {
                toast.warning(t('Register.3'));
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowAgainPassword = () => { // Yeni funksiya
        setShowAgainPassword(!showAgainPassword);
    };

    const [mode] = useContext(ModeContext);

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div>
            <div className={` register ${mode}`}>
                <div className="container-fluid ">
                    <div className='reg-box'>
                        <p data-aos="fade-down"></p>
                    </div>
                </div>

                <div className="container d-flex align-items-center justify-content-center flex-column my-5">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 register-border">
                        <h1 className='my-5'data-aos="zoom-in" style={{ color: 'white', textAlign: 'center' }}>
                            {t('Register.4')}
                        </h1>                        <form onSubmit={registerSubmit}>
                            <div className="mb-3" data-aos="zoom-in">
                                <label className="form-label" data-aos="zoom-in">{t('Register.5')}</label>
                                <input data-aos="zoom-in" type="text" className="form-control" name='fullname' onChange={handleChange} />
                            </div>
                            <div className="mb-3 " data-aos="zoom-in">
                                <label data-aos="zoom-in" className="form-label">{t('Register.6')}</label>
                                <input data-aos="zoom-in" type="text" className="form-control" name='tel' onChange={handleChange} />
                            </div>
                            <div className="mb-3" data-aos="zoom-in">
                                <label data-aos="zoom-in" className="form-label">{t('Register.7')}</label>
                                <input data-aos="zoom-in" type="email" className="form-control" name='email' onChange={handleChange} />
                            </div>
                            <div className="mb-3" data-aos="zoom-in">
                                <label  data-aos="zoom-in"className="form-label">{t('Register.8')}</label>
                                <div data-aos="zoom-in"  className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        name='password'
                                        onChange={handleChange}
                                    />
                                    <span className="input-group-text" style={{ height: '38px' }} onClick={toggleShowPassword}>
                                        {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3" data-aos="zoom-in">
                                <label data-aos="zoom-in" className="form-label">{t('Register.9')}</label>
                                <div className="input-group">
                                    <input
                                        type={showAgainPassword ? 'text' : 'password'} 
                                        className="form-control"
                                        name='againPassword'
                                        onChange={handleChange}
                                    />
                                    <span  className="input-group-text" style={{ height: '38px' }} onClick={toggleShowAgainPassword}>
                                        {showAgainPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                                    </span>
                                </div>
                            </div>
                            <button data-aos="zoom-in" type="submit" className="btn btn-dark">{t('Register.10')}</button>
                        </form>
                        <Link data-aos="zoom-in" to='/login' className='my-3 btn btn-dark register-btn'>{t('Register.11')}</Link>
                    </div>
                    <Posters />

                </div>
            </div>
        </div>
    );
};

export default Register;


