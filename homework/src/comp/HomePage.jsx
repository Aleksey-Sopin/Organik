function HomePage(){
    return(
        <>
           <section className="homePage">
            <div className="homePage__container">
              <div className="homePage__background">
                    <div className="homePage__content">
                        <div className="homePage__subtitle">
                            100% Natural Food
                        </div>
                        <div className="homePage__title">
                            Choose the best healthier way <br /> of life
                        </div>
                        <button className="homePage__button">
                            <div className="homePage__button-text">Explore Now</div>
                            <img src="/images/homePage/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>

           </section>
        </>
    )
}

export default HomePage;