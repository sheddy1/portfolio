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
            <div className='hexagon_div1'>
                <img src={hexagon} className='hexagon1'/>
                <label className='full_stack'>Full Stack<br/> Web Developer</label>
            </div>

            <div className='hex1_con'></div>

            <div className='hexagon_div2'>
                <img src={hexagon} className='hexagon1'/>
                <label className='full_stack'>Full Stack<br/> Web Developer</label>
            </div>

            <div className='hex1_con1'></div>

            <div className='hexagon_div3'>
                <img src={hexagon} className='hexagon1'/>
                <label className='full_stack'>Full Stack<br/> Web Developer</label>
            </div>
        </div>
    )
}

export default Intro;