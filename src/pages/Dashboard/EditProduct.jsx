import React, { useContext } from 'react';
import ProductForm from '../../components/ProductFrom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { updateProductFromDatabase } from '../../tools/actions/shopAction';
import { ModeContext } from '../../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18next';

const EditProduct = () => {
    const { slug } = useParams();
    const products = useSelector((state) => state);
    const editData = products.find((p) => slugify(p.title) === slug);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();

    const handleFormSubmit = async (fd) => {
        try {
            await updateProductFromDatabase(editData.id, fd);
            toast.success(t("EditProduct.1"));
            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);
        } catch (error) {
            console.error("Update error:", error);
            toast.error(t("EditProduct.Error")); // Xeta mesajı
        }
    };

    return (
        <div className={`edit-dark-back ${mode}`}>
            <div className="container-fluid">
                <div className='about-box'>
                    <p data-aos="fade-down">{t("EditProduct.3")}</p>
                </div>

                <h1 className='text-center my-5'></h1>

                {editData ? (
                    <ProductForm 
                        sendedit={editData} 
                        onFormSubmit={handleFormSubmit} 
                    />
                ) : (
                    <p>{t("EditProduct.2")}</p>
                )}
            </div>
        </div>
    );
};

export default EditProduct;


