import React from 'react';

const NavFooter = () => {
    return (<div>
        <header className="main-nav__header-one">
            <nav
                className="header-navigation stricky stricked-menu stricky-fixed azul "
            >
                <div className="container">
                    <div className="main-nav__logo-box">
                        <a href="/" className="main-nav__logo nav-logo">
                            <img
                                src="/assets/images/logo-1-1.png"
                                width="105"
                                alt="Awesome Image"
                            />
                            <span>ducando</span>
                        </a>
                        <a href="#" className="side-menu__toggler">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="main-nav__main-navigation">
                        <ul className="one-page-scroll-menu main-nav__navigation-box">
                            <li className="current scrollToLink">
                                <a href="/">inicio</a>
                            </li>
                            <li className="scrollToLink">
                                <a href="#features">¿que hacemos?</a>
                            </li>
                            <li className="scrollToLink">
                                <a href="#app-shots">La plataforma</a>
                            </li>

                            <li className="scrollToLink">
                                <a href="#testimonials">Nuestro equipo</a>
                            </li>

                        </ul>
                    </div>
                    <div className="main-nav__right">
                        <a
                            href="#contact"
                            data-target="#contact"
                            className="thm-btn header__btn scroll-to-target"
                        >
                            Conversemos
                </a>
                    </div>
                </div>
            </nav>
        </header>
    </div >);
}

export default NavFooter;