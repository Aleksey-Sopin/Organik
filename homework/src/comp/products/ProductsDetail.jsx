import { useState } from "react";
import { React ,forwardRef } from "react";

let ProductsDetail = forwardRef((props, ref) => {
    //! состояние инфо-блока
    const [stateInfo, setStateInfo] = useState(props.additional)
    //! state balance с валидацией по кол-ву в наличии
    let [stateBalance, setStateBalance] = useState( (props.balance-props.balance) +1 )
    // 
    function addBalance(){
        let count = stateBalance
        if(count < props.balance){
            setStateBalance(count+1)
        }
    }
    //! add TO Cart 
    const url = ("http://localhost:5000");
    const data = {
        id: props.id,
        discount: props.discount,
        src: props.src,
        name: props.name,
        price: props.price,
        category: props.category,
        description: props.description,
        additional: props.additional,
        balance: stateBalance
    };
    // ! получить данные о товаре \ отправить при клике на кнопку "TO CART" данные в корзину
    async function postData() {
        try {
            const response = await fetch(url, {
                method: "POST", 
                body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                headers: {
                "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            console.log("Успех:" + json);
        } catch (error) {
            console.error("Ошибка:", error);
            }
    }
    // ! view info description
    function showDescription(){
        setStateInfo(props.description)
        let additionalBtn = document.querySelector('.productsDetail__button-info')
        additionalBtn.classList.remove('productsDetail__button-info-hover')
        // 
        let descrlBtn = document.querySelector('.productsDetail__button-descr')
        descrlBtn.classList.add('productsDetail__button-descr-hover')
    }
    // ! view info Additional
    function showAdditional(){
        setStateInfo(props.additional)
        let descrlBtn = document.querySelector('.productsDetail__button-descr')
        descrlBtn.classList.remove('productsDetail__button-descr-hover')
        // 
        let additionalBtn = document.querySelector('.productsDetail__button-info')
        additionalBtn.classList.add('productsDetail__button-info-hover')
    }
    // 
    return (
        <>
            <div ref={ref} className="productsDetail">
                <div className="productsDetail__container">             
                      <button onClick={()=>{
                        props.closeModal();
                        }}  
                        className="productsDetail__button-close">X</button>
                    <div className="productsDetail__content">
                        <div className="productsDetail__content-left">
                            <div className="productsDetail__category">{props.category}</div>
                            <img src={props.src} alt="products" />
                        </div>
                        <div className="productsDetail__block">
                            <div className="productsDetail__title">
                                {props.name}
                            </div>
                            <ul className="productsDetail__content-reting-list">
                                <li className="productsDetail__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="productsDetail__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="productsDetail__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="productsDetail__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="productsDetail__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                            </ul>
                            <div className="productsDetail__price-block">
                                <div className="productsDetail__content-discount">${props.discount}</div>
                                <div className="productsDetail__content-price">${props.price}</div>
                            </div>
                            <div className="productsDetail__content-descriptions">
                                {props.description}
                            </div>
                            <div method="post" className="productsDetail__quality-block">
                                <div className="productsDetail__quality">Quantity :</div>
                                {/*  */}
                                <button onClick={()=>{
                                    addBalance();
                                }} className="productsDetail__count">{stateBalance}</button>
                                {/*  */}
                                <button onClick={()=>{
                                    postData();
                                }} className="productsDetail__button">
                                    <div className="productsDetail__button-text">
                                        Add to Cart 
                                    </div>    
                                    <img src="images/ourProducts/arrow.svg" alt="arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="productsDetail__bottom-block">
                        <div className="productsDetail__bottom-button-block">
                            {/*  */}
                            <button onClick={showDescription} className="productsDetail__button-descr">
                                Product Description
                            </button>
                            {/*  */}
                            <button onClick={showAdditional} className="productsDetail__button-info productsDetail__button-info-hover">
                                Additional Info
                            </button>
                        </div>
                        <div className="productsDetail__text">
                            {stateInfo}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default ProductsDetail;