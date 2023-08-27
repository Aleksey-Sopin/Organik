import { NavLink } from "react-router-dom";

function NotFound(){
    return(
        <>
           <section className="notFound">
                <div className="notFound__container">
                    <img src="/images/NotFound/Pattern.png" alt="not found" />
                    <div className="notFound__content">
                        <div className="notFound__title">
                           404 
                        </div>
                        <div className="notFound__subtitle">Page not Found</div>
                        <div className="notFound__text">The page you are looking for doesn't exist or has been moved</div>
                        <NavLink to='/' >
                            <button className="notFound__button">
                                <div className="notFound__button-text">Go to Homepage</div>
                                <img src="/images/NotFound/arrow.svg" alt="arrow" />
                            </button>
                        </NavLink>
                    </div>
                </div>
           </section>
        </>
    )
}

export default NotFound;