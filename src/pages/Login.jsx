import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';
import Posters from '../components/Posters';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const user = registeredUsers.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(user));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            toast.info(t("Login.0"));
        } else {
            toast.error(t("Login.1"));
        }
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
            <div className={`login ${mode}`}>
                <div className="container-fluid ">
                    <div className='log-box'>
                        <p data-aos="fade-down"  >{t("Login.6")}</p>
                    </div>
                </div>

                <div className="container d-flex align-items-center justify-content-center flex-column ">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 login-border my-5">
                        <h1 className='my-5 ' style={{ color: 'white' }} data-aos="zoom-in">{t("Login.6")}</h1>
                        <form onSubmit={loginSubmit}>
                            <div className="mb-3 " data-aos="zoom-in">
                                <label className="form-label" data-aos="zoom-in">{t("Login.2")}</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                            </div>
                            <div className="my-5" data-aos="zoom-in">
                                <label className="form-label" data-aos="zoom-in">{t("Login.3")}</label>
                                <div className="input-group" data-aos="zoom-in">
                                    <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" />
                                    <span className="input-group-text" style={{ cursor: 'pointer', height: '38px' }} onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                    </span>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark" data-aos="zoom-in"
                                data-aos-anchor-placement="top-bottom">{t("Login.6")}</button>
                        </form>
                        <h4 className='my-5' data-aos="zoom-in"
                            data-aos-anchor-placement="top-bottom">{t("Login.4")}</h4>
                        <Link to='/register' className="btn btn-dark" 
                            data-aos="zoom-in">{t("Login.5")}</Link>


                    </div>

                    <Posters />



                </div>


            </div>


        </div>
    );
};

export default Login;



