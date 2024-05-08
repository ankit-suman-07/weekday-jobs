import React from 'react';
import "./Navbar.css";

import LogoIcon from "../../assets/logo.png";
import CodeIcon from "../../assets/code.png";
import LinkedInIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.png";

const Navbar = () => {
    return (
        <div className='nav' >
            <div className='nav-logo' >
                <img src={LogoIcon} alt='logo=icon' />
            </div>
            <div className='nav-socials' >
                <a href='https://github.com/ankit-suman-07/weekday-jobs' >
                    <img src={CodeIcon} alt='code-icon' />
                </a>
                <a href='https://www.linkedin.com/in/ankit-suman-6925011b6/' >
                    <img src={LinkedInIcon} alt='linkedIn-icon' />
                </a>
                <a href='https://github.com/ankit-suman-07' >
                    <img src={GitHubIcon} alt='gitHub-icon' />
                </a>
            </div>
        </div>
    )
}

export default Navbar