import React, { Component } from 'react';
import './Home.css';

const Header = () => {
    return(
        <div className='container header'>
            <div class='logo_name'>
                <label class='logo_names'>s</label>
            </div>

            <label class='name'>Shadrach Godwin</label>
            

            <button class='resume'>
                <label>Resume</label>
            </button>

            <ul>
            <li><a href='#' class='about_me'>About Me</a></li>
            <li><a href='#' class='experience'>Experience</a></li>
            <li><a href='#' class='projects'>Projects</a></li>
            <li><a href='#' class='contact'>Contact</a></li>
            <li><a  href='#' class='testimonies'>Testimonies</a></li>
            </ul>
            

            <label class="down1">xcxsdsd</label>
        </div>
    );
}

export default Header;
