import React, { Component } from 'react';
import vector1 from './photos/Vector1.png';
import './Home.css';

const Intro = () => {
    return(
        <div className='container intro_div'>
            <label className='hi_there'>Hi there, my name is:</label>
            <label className='shadrach'>Shadrach</label>
            <img src='{vector1} '/>
        </div>
    )
}

export default Intro;