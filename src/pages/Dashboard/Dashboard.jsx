import React, { useContext, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { supabase } from '../../supabase/supabaseClient';
import { toast } from 'react-toastify';
import { ModeContext } from '../../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18next';

const Dashboard = () => {
    const products = useSelector((state) => state);

    const [mode] = useContext(ModeContext);
    const {t}=useTranslation();


    useEffect (()=>{
        Aos.init({
            duration:1000
        });

    },[])

    return (
        <section className={`dark-back  ${mode}`}>

            <div className="container-fluid ">
                <div className='dash-box'>
                    <p data-aos="fade-down">{t("Dashboard.0")}</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <div className="table-container my-5 ">
                    <Link to="/dashboard/add" className='btn btn-dark mb-3 my-5'>{t("Dashboard.1")}</Link>


                        <table className="my_table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">{t("Dashboard.2")}</th>
                                    <th scope="col">{t("Dashboard.3")}</th>
                                    <th scope="col">{t("Dashboard.4")}</th>
                                    <th scope="col">{t("Dashboard.5")}</th>
                                    <th scope="col">{t("Dashboard.6")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, count) => (
                                    <tr key={item.id}>
                                        <th scope="row">{count + 1}</th>
                                        <td>
                                            <img src={item.photo} width={60} alt="" className='mt-3' />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>$ {item.price}</td>
                                        <td>
                                            <Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-outline-secondary btn-dash'>{t("Dashboard.5")}</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-dark btn-dash" onClick={async () => {
                                                const {  error } = await supabase.from('products').delete().eq('id', item.id);

                                                if (error) {
                                                    console.log(error);
                                                } else {
                                                    toast.error(t("Dashboard.7"));
                                                    setTimeout(() => { window.location.assign('/dashboard') }, 1500);
                                                }
                                            }}>X</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

