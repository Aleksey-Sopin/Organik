import { useEffect, useState, useRef } from "react";
import {nanoid} from 'nanoid';
import ProductsDetail from "./ProductsDetail";

function ProductComp(props){
    // ----------------
    let item = props.item
    const [modalView, setModalView] = useState();
    const [open, setOpen] = useState(false);
    // open modal
    const handleOpen = () => {
      setOpen(true);
      setModalView(<ProductsDetail 
                        id={item.id}
                        src={item.src} 
                        category={item.category}
                        price={item.price}  
                        discount={item.discount}
                        description={item.description}
                        additional={item.additional}
                        name={item.name}
                        balance={item.balance}
                        showModal={showModal}
                        closeModal={closeModal}
                        ref={ref}
                        />)
    };
    // close modal
    const handleClose = () => {
        setModalView()
        setOpen(false); 
      };
    // меняем значение open{true/false}
    function showModal(){
        if(open == false){
            handleOpen();
            setOpen(false);
        }else{
            handleClose();
        }
    }
    //  Добавить класс Закрыть модалку \ также чистить стейт  setModalView()
    function closeModal(){ 
    let modal = document.querySelector('.productsDetail')
        if(modal.classList == 'productsDetail'){
            modal.style.dislay = 'none'
            setModalView(null)
        }   
    }
    // ! Закрытие модалки поза межами модалки
    const ref = useRef(false)
    function handleClickOutside(event){
        if(ref.current && !ref.current.contains(event.target)){
            setModalView(true)
        }
    }
    useEffect(()=>{
            document.addEventListener('click',
                handleClickOutside, true)
        return () => {
            document.addEventListener('click',
                handleClickOutside, true)
        }        
    })
    return (  <>
                {modalView}
                <li key={nanoid()}  onClick={showModal}
                    className="ourProducts__content-item ourProducts__content-item-4">
                    <img  className="ourProducts__content-img" src={item.src} alt="vages" />
                    <div className="ourProducts__content-category">{item.category}</div>
                    <div className="ourProducts__content-desc-block">
                        <div className="ourProducts__content-name">{item.name}</div>
                        <hr className="ourProducts__content-hr" />
                        <div className="ourProducts__content-price-block">
                            <div className="ourProducts__content-discount">${item.discount}</div>
                            <div className="ourProducts__content-price">${item.price}</div>
                            <ul className="ourProducts__content-reting-list">
                                <li className="ourProducts__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="ourProducts__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="ourProducts__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                                <li className="ourProducts__content-reting-item"><img src="/images/offer/rating.png" alt="rating" /></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </> 
    )
}

export default ProductComp;