import React, { Component } from 'react';
import vector from './photos/Vector1.png';
import hexagon from './photos/image1.png'
import './Home.css';

const Intro = () => {
    return(
        <div className='container intro_div'>
            <label className='hi_there'>Hi there, my name is:</label>
            <label className='shadrach'>Shadrach</label>
            <label className='godwin'>Godwin</label>
            <img src={vector} className="s_g"/>
            <div className='three_ext'></div>
            <div>
                <img src={hexagon} className='hexagon1'/>
            </div>
        </div>
    )
}

export default Intro;