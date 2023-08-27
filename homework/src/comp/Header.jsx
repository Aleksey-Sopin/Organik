import { NavLink } from "react-router-dom";

const Header=(props)=>{

    return(
        <>
            <div className="header">
                <div className="header__container">
                    <NavLink to='/'>
                        <div className="header__logo-block">
                            <img src="/images/header/Logo.svg" alt="logo" className="header__logo-img" />
                            <div className="header__logo-text">Organick</div>
                        </div>
                    </NavLink>
                    <ul className="header__nav-list">
                        <li className="header__item"><a href="/" className="header__link">Home</a></li>
                        <li className="header__item"><a href="/" className="header__link">About</a></li>
                        <li className="header__item"><a href="/" className="header__link">Pages</a></li>
                        <li className="header__item"><a href="/" className="header__link">Shop</a></li>
                        <li className="header__item"><a href="/" className="header__link">Projects</a></li>
                        <li className="header__item"><a href="/" className="header__link">News</a></li>
                    </ul>
                    <div className="header__right-block">
                        <div className="header__search">
                            <input className="header__search-input"/>
                            <div className="header__search-icon-block">
                                <img className="header__search-icon" src="/images/header/search.svg" alt="search" />
                            </div>
                        </div>
                        <NavLink to="/cart">
                            <button className="header__basket">
                                <div className="header__basket-link"><img src="/images/header/basket.svg" alt="basket" /></div>
                                <div className="header__basket-prod">
                                    {/* кол-во выбраных товаров */}
                                    Cart ({props.amount})
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;