import React, { Component } from 'react';
import vector from './photos/vector1.png';
import './Home.css';

const Intro = () => {
    return(
        <div className='container intro_div'>
            <label className='hi_there'>Hi there, my name is:</label>
            <label className='shadrach'>Shadrach</label>
        </div>
    )
}

export default Intro;