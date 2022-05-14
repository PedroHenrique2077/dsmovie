import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './index.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <Link to="/">
                        <h1>DSMovie</h1>
                    </Link>
                    <a href="https://github.com/PedroHenrique2077" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/PedroHenrique2077</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;