import React, { useContext } from 'react'
import ProductForm from '../../components/ProductFrom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';
import { toast } from 'react-toastify';
import { ModeContext } from '../../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18next';


const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mode] = useContext(ModeContext);
    const {t}=useTranslation();


    return (
        <div className={`edit-dark-back ${mode}`}>

            <div className="div container-fluid">
            <div className='about-box'>
                    <p data-aos="fade-down">{t("AddProduct.0")}</p>
                </div>

                <h1 className='text-center my-5'></h1>

            <ProductForm onFormSubmit={async (fd) => {
                const { data, error } = await supabase.from('products').insert(fd)
                if (error) {
                    console.log(error);
                } else {
                    toast.success(t("AddProduct.1"));
                    setTimeout(() => {
                        window.location.assign('/dashboard');
                    }, 1500)
                }
            }} />
            </div>
        </div>
    )
}

export default AddProduct
