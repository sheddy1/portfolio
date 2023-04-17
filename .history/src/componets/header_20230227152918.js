import React from "react";
import './Home.css';
// import menu from './photos/menu.png';
import menu from './photos/menu.png';
import cancel from './photos/cancel.png';

const Header = () => {
    return(
        <div className='container header'>

            <img src={menu} className="menu"/>
            <div class='logo_name'>
                <label class='logo_names'>s</label>
            </div>

                <label class='name'>Shadrach Godwin</label>
            

            <button class='resume'>
                Resume
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
