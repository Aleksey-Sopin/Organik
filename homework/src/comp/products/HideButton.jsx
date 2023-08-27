function HideButton(props) {

    return(
        <>  
            <button onClick={props.handleClickHide} className="ourProducts__button">
                <div className="ourProducts__button-text">Hide All</div>  
                <img src="/images/ourProducts/arrow.svg" alt="arrow" />
            </button>
        </>
    )
}

export default HideButton;