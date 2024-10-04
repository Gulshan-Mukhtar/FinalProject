import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ModeContext } from '../../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18next'
import Posters from '../../components/Posters';

const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        phone: '+000-11-222-33-44',
        email: '',
    });

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const activeUser = JSON.parse(localStorage.getItem('activeUser'));

            if (activeUser) {
                setUser(activeUser);
            }
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('activeUser');
        setUser({
            fullname: 'Login',
            phone: '',
            email: '',
        });
        navigate('/login');
        window.location.reload()
    };

    const [activeUser, setActiveUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        setActiveUser(user);
        window.scrollTo(0, 0)
    }, []);

    const isAdmin = activeUser && activeUser.email === "admin@gmail.com";

    const [mode] = useContext(ModeContext);

    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    const {t}=useTranslation();



    return (

        <div className={`account ${mode}`}>
            <div className="container-fluid ">
                <div className='account-box'>
                    <p data-aos="fade-down">{t("Account.0")}</p>
                </div>
            </div>

            <div className='container'>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <p className='my-4'>
                        {isAdmin ? (
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        ) : (
                            <Link to='/'>
                                Home
                            </Link>
                        )}
                        <span> /</span> <span>{t("Account.0")}</span>
                    </p>


                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 form-container my-5">
                        <form >
                            <div className="mb-3" data-aos="zoom-in">
                                <label data-aos="zoom-in" className="form-label">{t("Account.1")}</label>
                                <input
                                    name="fullname"
                                    type="text"
                                    className="form-control"
                                    value={user.fullname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3" data-aos="zoom-in">
                                <label data-aos="zoom-in" className="form-label">{t("Account.2")}</label>
                                <input
                                    name="phone"
                                    type="phone "
                                    className="form-control"
                                    value={user.phone}
                                    onChange={handleChange}
                                />


                            </div>
                            <div className="mb-3" data-aos="zoom-in">
                                <label data-aos="zoom-in"className="form-label">E-mail</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                        <div data-aos="zoom-in"className="d-flex flex-column justify-content-center align-items-center">
                            <button style={{color:"white"}} data-aos="zoom-in" onClick={handleLogout} className='btn  mt-4'>{t("Account.3")}</button>
                        </div>


                    </div>

                    <Posters/>

                </div>

            </div>

        </div>

    );
};

export default Account;
