import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next';

const ProductForm = ({ sendedit,onFormSubmit }) => {
    const [photo, setPhoto] = useState(sendedit ? sendedit.photo : "");
    const [title, setTitle] = useState(sendedit ? sendedit.title : "");
    const [price, setPrice] = useState(sendedit ? sendedit.price : "");

   

    const formSubmitted = e => {
        e.preventDefault();
        if (!photo || !title || !price) {
            toast.error(t("ProductForm.0"));
        } else {
            onFormSubmit({photo,title,price})

        }
    };

    const {t}=useTranslation();


    return (

        
        <div className="d-flex align-items-center justify-content-center ">

            <div className="col-sm-6 my-5">
                <form onSubmit={formSubmitted}>
                    <div className="mb-3">
                        <label className="form-label">{t("ProductForm.1")}</label>
                        <input value={photo} onChange={e => setPhoto(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">{t("ProductForm.2")}</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">{t("ProductForm.3")}</label>
                        <input value={price} onChange={e => setPrice(e.target.value)} type="text" className="form-control" />
                    </div>
                    <button type="submit" className=" submit-btn">{t("ProductForm.4")}</button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
