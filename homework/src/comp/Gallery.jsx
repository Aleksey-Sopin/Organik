function Gallery(){
    return(
        <>
            <section className="gallery">
                <div className="gallery__container">
                    <ul className="gallery__list">
                        <li className="gallery__item gallery__item-1">
                            {/* <img src="/images/gallery/image-1.png" alt="image-1" className="gallery__img" /> */}
                            <button className="gallery__button">Organic Juice</button>
                        </li>
                        <li className="gallery__item gallery__item-2">
                            {/* <img src="/images/gallery/image-2.png" alt="image-1" className="gallery__img" /> */}
                            <button className="gallery__button">Organic Food</button>
                        </li>
                        <li className="gallery__item gallery__item-3">
                            {/* <img src="/images/gallery/image-3.png" alt="image-3" className="gallery__img" /> */}
                            <button className="gallery__button">Nuts Cookis</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Gallery;