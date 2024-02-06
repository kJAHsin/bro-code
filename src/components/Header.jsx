import React from 'react';
import classes from '../classes/classes';

const Header = () => {
    return (
        <header className={classes("header")}>
            <div id="contentWrapper" className={classes("content-wrapper")}>
                <div id='logo' className={classes("logo")}>
                    <a href="/" className={classes("logo-img")}></a>
                </div>
                <ul role='navigation' className={classes("nav")}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Events</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;