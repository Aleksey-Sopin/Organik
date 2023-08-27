function About(){
    return(
        <>
            <section className="about">
                <div className="about__background">
                    <div className="about__container">
                        <div className="about__headline-block">
                            <div className="about__subtitle">About Us</div>
                            <div className="about__title">We Believe in Working Accredited Farmers</div>
                            <div className="about__description">
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </div>
                        </div>
                        <div className="about__context-block context-block">
                            <div className="context-block__item-1">
                                <img className="context-block__item-1-icon" src="/images/about/icon-1.png" alt="icon-1" />
                                <div className="context-block__item-1-descr">
                                    <div className="context-block__item-1-title">Organic Foods Only</div>
                                    <div className="context-block__item-1-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                                </div>
                            </div>
                            <div className="context-block__item-2">
                                <img className="context-block__item-2-icon" src="/images/about/icon-2.png" alt="icon-2" />
                                <div className="context-block__item-2-descr">
                                    <div className="context-block__item-2-title">Quality Standards</div>
                                    <div className="context-block__item-2-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                                </div>
                            </div>
                        </div>
                        <button className="about__button">
                            <div className="about__button-text">Shop Now</div>
                            <img className="about__button-img" src="/images/about/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;