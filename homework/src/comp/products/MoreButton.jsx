
function MoreButton(props) {
    return (
        <>
            <button onClick={props.renderMoreProd} className="ourProducts__button">
                <div className="ourProducts__button-text">Load More</div>  
                <img src="/images/ourProducts/arrow.svg" alt="arrow" />
            </button>
        </>
    )
}

export default MoreButton;