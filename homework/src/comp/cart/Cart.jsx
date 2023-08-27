import axios from 'axios';
import {nanoid} from 'nanoid';
import { useState, useEffect } from 'react';
import FormOrder from './FormOrder';
import ButtonOrder from './ButtonOrder';

function Cart(props){
    //! get products from orderProduct DB
    const [order, setOrder] = useState([])
    let price = 0;
    let discount=0;
    let finalPrice=0;
    //! get totalprice
    const [totalPrice, setTotalPrice] = useState(price)
    function getTotalPrice(){
        order.map(item=>{
            price += +(item.totalPrice * item.amount) 
        })
        setTotalPrice(price)
    }
    //! get totalDiscount 
    const [totalDiscount, setTotalDiscount] = useState(finalPrice)
    function getTotalDiscount(){
        order.map(item=>{
            let elem_discount=0
            if(item.discount){elem_discount = item.amount}
            discount += +(item.discount * elem_discount )  
        })
            finalPrice = (price - discount)  
        setTotalDiscount(finalPrice)
    }
    //! удалить выбраные товары \ нажатием на "Х" 
    // ! РАБОТАЕТ ПРИ ОТКРЫТОЙ КОНСОЛЕ РАЗРОБОТЧИКА ПОЧЕМУТО ;-(
    //! delete product from cart!
    function deleteAllChoise(item){
        postID(item) 
        setLoaded(true)
    }
    async function postID(item) {
        try {
            const response = await fetch("http://localhost:5000/cart", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = response.json();
            console.log("Успех: json" + json);
        } catch (err) { console.log(err); }
    }
    // ! add products amount
    function addBalance(item){
        item.amount = item.amount+1
        postAmount(item)
        setLoaded(true)
    }  
    async function postAmount(item) {
        try {
            const res = await fetch("http://localhost:5000/addAmountFromCart", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = res.json();
            console.log("Успех: json" + json);
        } catch (err) { console.log(err); }
    }
    // ! show FORM
    const [form, setForm] = useState()
    function showForm(){
        setForm(<FormOrder/>)
        setButtOrder()
    }
    // ! state for Button 'To Order'
    const[buttOrder,setButtOrder] = useState(<ButtonOrder showForm={showForm}/>)
    // ! get data
    const fetchAllOrderProduct = async() => {
        try{
            const result = await axios.get('http://localhost:5000/showProdinCart');
            setOrder(result.data)
        }catch (err){
            console.log(err)
        }
    };
    const[loaded, setLoaded] = useState(false)
    // ! работа вывод выбраных продуктов \ считаем цену
    useEffect(()=>{
        setLoaded(false)
        fetchAllOrderProduct()
        getTotalPrice();
        getTotalDiscount()   
    },[loaded]) 
  
// ---------------------------------------------------------------------
    return(
        <>
            <section className="cart">
                <div className="cart__container">
                    <div className="cart__title-block"> 
                    </div>
                    <div className="cart__content">
                        <ul className="cart__products-list">
                            { order.map(item=>{
                                return (
                                    <li key={nanoid()} className="cart__item">
                                        <div className="cart__info-block">
                                            <div className="cart__info-img">
                                                <img src={item.src} alt="product" />
                                            </div>
                                            <div className="cart__info-block-name">{item.name}</div>
                                            <div className="cart__info-block-discount">${item.discount}</div>
                                            <div className="cart__info-block-price">${item.totalPrice}</div>
                                        </div>
                                        <div className="cart__quality-block">
                                            <div className="cart__quality-text">Quantity :</div>
                                                <button onClick={ () => {
                                                        const elem = document.querySelector('.cart__item')
                                                        if(elem){addBalance(item)};
                                                        props.ChengeCheck();
                                                        }}
                                                        className="cart__quality-count"                                              
                                                >{item.amount}</button>
                                                <button onClick={ () => {const elem = document.querySelector('.cart__item')
                                                            if(elem)
                                                            deleteAllChoise(item)} 
                                                    } className="cart__quality-delete">X</button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="cart__sum-block">
                            <div className="cart__total">Total Cost <span id="total">{totalPrice}$</span></div>
                            <div className="cart__discount">Discount <span id="discount">{totalDiscount}$</span></div>
                        </div>
                        {form}

                        {buttOrder}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;