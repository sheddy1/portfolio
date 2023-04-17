import React from "react";
import sheddy from './photos/sheddy.png';
import right_img from './photos/right.png';

const About= () => {
    return(
        <div className="container about_comp">
            <img src={sheddy} className='sheddy_pic'/>
            <label className="about1">1. About Me</label>
            <label className="about2">
            Hey there, my name is Shadrach Godwin, i have always<br/>
            loved to code, plus i always put in the effort to get better <br/>
            in whatever  i set my hands to do, and to do this i<br/> 
            constantly engage in taking lessons and developing<br/> 
            various projects that will help me to become a better<br/>
            developer.<br/>
            I have had over 5 years experience as a developer and i<br/>
            am confident that i could handle any project successfully <br/>
            by the grace of God. I am a good team player and i always<br/> 
            seek to do what is best for whatever team i am in, i always <br/>
            aim to constantly improve myself in all that i do.<br/>
            I have been privilleged to work with some orgarnisations <br/>
            who have good recomedations concerning me. <br/>
            Rest assured i will always deliver a good job.
            </label>

            <label className="about3">
                Here are some tools  that i work with on a daily basis
            </label>

            <div className="skill_line1">
            <div className="skill_react">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">React.js</label>
            </div>

            <div className="skill_php">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">PHP</label>
            </div>

            <div className="skill_Javascript">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">Javascript</label>
            </div>

            <div className="skill_react_native">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">React </label>
                <label className="skill_react_label2">Native</label>
            </div>
            </div>

            <div className="skill_line2">
            <div className="skill_react">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">Laravel</label>
            </div>

            <div className="skill_php">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">HTML</label>
            </div>

            <div className="skill_Javascript">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">Photoshop</label>
            </div>

            <div className="skill_react_native">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">Figma</label>
                {/* <label className="skill_react_label2">Photoshop</label> */}
            </div>
            </div>

            <div className="skill_line3">
            <div className="skill_react">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">Stata</label>
            </div>

            <div className="skill_php">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">CSS</label>
            </div>

            <div className="skill_Javascript">
                <img src={right_img} className="skill_react_right_img"/>
                <label className="skill_react_label">Github</label>
            </div>
            </div>
        </div>
    )
}

export default About