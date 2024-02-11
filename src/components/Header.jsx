import classes from '../classes/classes';
import burgerIconSVG from '../assets/burgerIcon';
import xIconSVG from '../assets/xIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        const nav = document.querySelector("[role='navigation']")
        setIsNavOpen(prevIsNavOpen => !prevIsNavOpen);

        if (!isNavOpen) {
            nav.classList.remove("-translate-x-full")
        }
        else {
            nav.classList.add("-translate-x-full")
        }
    }

    return (
        <>
            <header className={classes("header")}>
                <div id="contentWrapper" className={classes("content-wrapper")}>
                    <div className={classes("viking-lattice")}></div>
                    <ul aria-roledescription='navigation' aria-expanded="false" role='navigation' className={classes("nav")}>
                        <li className={classes("nav-links")}><Link to="/">Home</Link></li>
                        <li className={classes("nav-links")}><Link to="/events">Events</Link></li>
                        <li className={classes("nav-links")}><Link to="/about">About us</Link></li>
                        <li className={classes("nav-links")}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div id='logo' className={classes("logo")}>
                        <a href="/" className={classes("logo-img")}></a>
                    </div>
                    <button onClick={handleNavToggle} className={classes("hamburger-toggle-btn")}>
                        <span className={classes("hamburger-toggle-icon")}>
                            {!isNavOpen ? burgerIconSVG : xIconSVG}
                        </span>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;