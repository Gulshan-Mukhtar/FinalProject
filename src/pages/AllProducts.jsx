import React, { useContext, useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import { ModeContext } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../i18n/i18next'

const AllProducts = () => {
    const data = useSelector(state => state); 
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc'); 

    const handleSort = (order) => {
        setSortOrder(order);

        const sorted = [...sortedData].sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (order === 'asc') {
                return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
            } else {
                return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
            }
        });

        setSortedData(sorted);
    };

    const handleFilter = (category) => {
        if (category === 'all' ) {
            setSortedData(data); 
        } else {
            const filtered = data.filter(item => item.title.toUpperCase().includes(category.toUpperCase()));
            setSortedData(filtered);
        }
    };

    useEffect (()=>{
        Aos.init({
            duration:1000
        });
        handleFilter('all');

    },[data])

    const [mode] = useContext(ModeContext);
    const {t}=useTranslation();



    return (
        <div className={`allproducts-main  ${mode}`}>
            <div className="container-fluid">
                <div className='all-box' > <p data-aos="fade-down">{t("AllProducts.0")}</p></div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3 my-5">
                        <ul className="list-group "data-aos="zoom-in">
                            <li className="list-group-item" onClick={() => handleFilter('all')}>{t("AllProducts.0")}</li>
                            <li className="list-group-item" onClick={() => handleFilter('Gryffindor')}>Gryffindor</li>
                            <li className="list-group-item" onClick={() => handleFilter('Hufflepuff')}>Hufflepuff</li>
                            <li className="list-group-item" onClick={() => handleFilter('Ravenclaw')}>Ravenclaw</li>
                            <li className="list-group-item" onClick={() => handleFilter('Slytherin')}>Slytherin</li>
                            <li className="list-group-item" onClick={() => handleSort('asc')}>A-Z</li>
                            <li className="list-group-item" onClick={() => handleSort('desc')}>Z-A</li>
                        </ul>
                    </div>

                    <div className="col-lg-9 my-5">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {sortedData.length === 0 ?
                                <p className='alert alert-warning text-center'> {t("AllProducts.1")}</p> :
                                sortedData.map((item, index) => (
                                    <div className="col mb-4 ">
                                        <SingleCard alldata={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
