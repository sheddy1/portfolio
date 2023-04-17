import React from "react";
import './Home.css';
import figma from './photos/figma.png';
import linkdn from './photos/linkedin.png';
import facebook from './photos/facebook.png';
import instagram from './photos/instagram.png';
import github from './photos/github.png';

const Sidelines = () => {
    return(
        <div className="leftbar2">
            <div className="leftbar"></div>
            <a href='#'><img src={figma} class="leftbar1 figma_photo"/></a>
            <a href='#'><img src={linkdn} class="leftbar1 linkdn_photo"/></a>
            <a href='#'><img src={facebook} class="leftbar1 facebook_photo"/></a>
            <a href='#'><img src={instagram} class="leftbar1 instagram_photo"/></a>
            <a href='#'><img src={github} class="leftbar1 github_photo"/></a>
        </div>

            <div className="rightbar"> </div>
            <a href="#" className="mail_left">Shadrachgodwin@gmail.com</a>
        </div> 
        
    )
}

export default Sidelines;