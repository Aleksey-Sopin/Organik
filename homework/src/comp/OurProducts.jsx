import Products from './products/Products';
import AllProducts from './products/AllProducts';
import MoreButton from './products/MoreButton';
import HideButton from './products/HideButton';
import { useState } from 'react';

function OurProducts() {

    // состояние продуктов
    const [prod , setProd] = useState(<Products/>)
    //сщстояние и рендер кнопки
    const [button, setButton] = useState(<MoreButton renderMoreProd={renderMoreProd}/>)
    // рендер Всех продуктов
    function renderMoreProd(){
        setProd(<AllProducts />)
        setButton(<HideButton handleClickHide={hideButton}/>) 
    }
    // рендер 8 продуктов
    function hideButton(){
        setProd(<Products/>)
        setButton(<MoreButton renderMoreProd={renderMoreProd}/>)
    } 
    return (
        <>
            <section className="ourProducts">
                <div className="ourProducts__container">
                    <div className="ourProducts__title-block">
                        <div className="ourProducts__subtitle">Categories</div>
                        <div className="ourProducts__title">Our Products</div>
                    </div>
                    <ul className="ourProducts__content-list">
                        {/* выводим продукты */}
                        {prod} 
                    </ul>
                        {/* выводим Кнопку */}
                        {button}
                </div>
            </section>
        </>
    )
}

export default OurProducts;


