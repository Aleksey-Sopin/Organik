function ButtonOrder(props){

    return(
        <>
            <button onClick={()=>{
                props.showForm();
            }} className="cart__button">
                <div className="cart__button-text">To order</div>
                <img src="/images/ourProducts/arrow.svg" alt="arrow" />
            </button>
        </>
    )
}

export default ButtonOrder;