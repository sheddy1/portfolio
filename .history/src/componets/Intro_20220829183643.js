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

            <div className='hex2_con'></div>

            <div className='hexagon_div3'>
                <img src={hexagon} className='hexagon1'/>
                <label className='full_stack'>Full Stack<br/> Web Developer</label>
            </div>
            
            <label className='into_label'>
                I’m a software engineer who<br/>
                specialises in buliding websites and <br/>
                android applications, i have a passion <br/>
                for coding and i am willing to learn as <br/>
                much as i can to inprove myself daily, I <br/>
                also focus on making beautiful ui/ux <br/>
                design for my clients all around the <br/>
                world. I am a team pleayer and i always <br/>
                strive to put in my best in all that i do. 
            </label>

            <button className='hire_me'>Hire Me</button>
        </div>
    )
}

export default Intro;