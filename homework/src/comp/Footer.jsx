function Footer(){
    return(
        <>
            <section className="footer">
                <div className="footer__container">
                    <div className="footer__content-main">
                        <div className="footer__contacts-block">
                            <div className="footer__contacts-title">Contact Us</div>
                            <ul className="footer__contacts-list">
                                <li className="footer__contacts-item">
                                    <div className="footer__contacts-item-title">Email</div>
                                    <div className="footer__contacts-item-info">needhelp@Organia.com</div>
                                </li>
                                <li className="footer__contacts-item">
                                    <div className="footer__contacts-item-title">Phone</div>
                                    <div className="footer__contacts-item-info">666 888 888</div>
                                </li>
                                <li className="footer__contacts-item">
                                    <div className="footer__contacts-item-title">Address</div>
                                    <div className="footer__contacts-item-info">88 road, broklyn street, USA</div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__social-block">
                            <div className="footer__social-logo-block">
                                <img className="footer__social-logo" src="/images/footer/logo.svg" alt="logo" />
                                <div className="footer__social-logo-text">Organick</div>
                            </div>
                            <div className="footer__social-description">
                                Simply dummy text of the printing and typesetting industry.Lorem Ipsum simply dummy text of the printing 
                            </div>
                          
                            <ul className="footer__social-list">
                                <li className="footer__social-item">
                                    <img src="/images/footer/1.svg" alt="insta" />
                                </li>
                                <li className="footer__social-item">
                                    <img src="/images/footer/2.svg" alt="face" />
                                </li>
                                <li className="footer__social-item">
                                    <img src="/images/footer/3.svg" alt="twiter" />
                                </li>
                                <li className="footer__social-item">
                                    <img src="/images/footer/4.svg" alt="pinterest" />
                                </li>
                            </ul>
                        </div>
                        <div className="footer__utility-block">
                            <div className="footer__utility-title">Utility Pages</div>
                            <ul className="footer__utility-list">
                                <li className="footer__utility-item">Style Guide</li>
                                <li className="footer__utility-item">404 Not Found</li>
                                <li className="footer__utility-item">Password Protected</li>
                                <li className="footer__utility-item">Licencies</li>
                                <li className="footer__utility-item">Changelog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                        <hr className="footer__hr"/>
                        <div className="footer__copuright">Copyright © <strong>Organick</strong> | Designed by <strong>VictorFlow</strong> Templates - Powered by <strong>Webflow</strong></div>
                </div>
            </section>
        </>
    )
}

export default Footer;