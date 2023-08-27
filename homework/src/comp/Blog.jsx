function Blog(){
    return (
        <>
            <section className="blog">
                <div className="blog__container">
                    <div className="blog__title-block">
                        <div className="blog__title-block-left">
                            <div className="blog__subtitle">
                               News
                            </div>
                            <div className="blog__title">
                                Discover weekly content about organic food, & more
                            </div>
                        </div>
                        <button className="blog__button">
                            <div className="blog__text">More News</div>
                            <img className="blog__arrow" src="/images/blog/arrow.svg" alt="" />
                        </button>
                    </div>
                    <div className="blog__content-block">
                        <div className="blog__content-left">
                            <div className="blog__date-block">
                                <div className="blog__number">25</div>
                                <div className="blog__month">Nov</div>
                            </div>
                            <div className="blog__article-block article">
                                <div className="article__author-block">
                                    <div className="article__author-icon"><img src="/images/blog/user-i.svg" alt="user-icon" /></div>
                                    <div className="article__author-name">By Rachi Card</div>
                                </div>
                                <div className="article__headline">The Benefits of Vitamin D & How to Get It</div>
                                <div className="article__text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                                <button className="article__button">
                                    <div className="article__button-text">Read More</div>
                                    <img className="article__button-img" src="/images/blog/arrow.svg" alt="arrow" />
                                </button>
                            </div>
                        </div>
                        <div className="blog__content-right">
                            <div className="blog__date-block">
                                <div className="blog__number">18</div>
                                <div className="blog__month">Dec</div>
                            </div>
                            <div className="blog__article-block article">
                                <div className="article__author-block">
                                    <div className="article__author-icon"><img src="/images/blog/user-i.svg" alt="user-icon" /></div>
                                    <div className="article__author-name">By Unaky Card</div>
                                </div>
                                <div className="article__headline">Our Favourite Summertime Tommeto</div>
                                <div className="article__text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                                <button className="article__button">
                                    <div className="article__button-text">Read More</div>
                                    <img className="article__button-img" src="/images/blog/arrow.svg" alt="arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;