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
                    <div style={{
                        backgroundImage: `url("/bg-pattern.png")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'contain',
                        position: 'absolute',
                        inset: '0'
                        }} className={classes("viking-lattice")}></div>
                    <ul aria-roledescription='navigation' aria-expanded="false" role='navigation' className={classes("nav")}>
                        <li className={classes("nav-links")}><Link className='py-8 block' to="/">Home</Link></li>
                        <li className={classes("nav-links")}><Link className='py-8 block' to="/events">Events</Link></li>
                        <li className={classes("nav-links")}><Link className='py-8 block' to="/about">About us</Link></li>
                        <li className={classes("nav-links")}><Link className='py-8 block' to="/contact">Contact</Link></li>
                    </ul>
                    <div id='logo' className={classes("logo")}>
                        <Link to="/" style={{
                            backgroundImage: `url("/DRM-logo__full.png")`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom',
                            display: 'block',
                            height: '9rem',
                            aspectRatio: '16 / 9',
                            marginBlockEnd: '5rem',
                            position: 'relative',
                        }} className={classes("logo-img")}></Link>
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