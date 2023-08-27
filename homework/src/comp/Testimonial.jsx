function Testimonial(){
    return (
        <>
            <section className="testimonials">
                <div className="testimonials__container">
                    <div className="testimonials__subtitle">Testimonial</div>
                    <div className="testimonials__title">What Our Customer Saying?</div>
                    <img src="/images/testimonials/photo.png" alt="some-pic" />
                    <ul className="testimonials__reting">
                        <li className="testimonials__item"><img src="/images/testimonials/rating.png" alt="rating" className="testimonials__img" /></li>
                        <li className="testimonials__item"><img src="/images/testimonials/rating.png" alt="rating" className="testimonials__img" /></li>
                        <li className="testimonials__item"><img src="/images/testimonials/rating.png" alt="rating" className="testimonials__img" /></li>
                        <li className="testimonials__item"><img src="/images/testimonials/rating.png" alt="rating" className="testimonials__img" /></li>
                        <li className="testimonials__item"><img src="/images/testimonials/rating.png" alt="rating" className="testimonials__img" /></li>
                    </ul>
                    <div className="testimonials__description">
                       Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </div>
                    <div className="testimonials__userName">Sara Taylor</div>
                    <div className="testimonials__role">Consumer</div>
                    <img src="/images/testimonials/navigation.svg" alt="navigation" className="testimonials__nav-img" />
                    <hr id="testimonials__hr" />
                    <div className="testimonials__advantages-block advantages">
                        <ul className="advantages__list">
                            <li className="advantages__item">
                                <div className="advantages__number">100%</div>
                                <div className="advantages__text">Organic</div>
                            </li>
                            <li className="advantages__item">
                                <div className="advantages__number">285</div>
                                <div className="advantages__text">Active Product</div>
                            </li>
                            <li className="advantages__item">
                                <div className="advantages__number">350+</div>
                                <div className="advantages__text">Organic Orchads</div>
                            </li>
                            <li className="advantages__item">
                                <div className="advantages__number">25+</div>
                                <div className="advantages__text">Years of Farming</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;