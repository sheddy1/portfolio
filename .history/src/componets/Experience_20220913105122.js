import React from "react";
import './Home.css';
import playButton from './photos/playbutton.png';

const Experience = () => {
    return (
        <div className="container experience_comp">
            <label className="exp_intro">02. My Experience</label>

            <div className="exp_heading">
                <table className="exp_heading_table" border='0px'>
                    <td className="exp_job_title">
                        NASSCO
                      
                    </td>
                    <td className="exp_job_title">NNPC</td>
                    <td className="exp_job_title">Viepaix</td>
                </table>
                <div className="exp_job_title_idn1"></div>
                <div className="exp_job_title_idn"></div>
            </div>

            <label className="job_desc">
            The National Social safety net coordinating office Abuja, is a Project of the vice president
             to help the poor and vulnurable in Nigeria. The orgarnisation does this by collecting data 
             of the poor and vulnurable accross all the 36 states in nigeria nigeria( April 2021 - Present)<br/>
            
            </label>

            <div className="exp_duties">
                <img src={playButton} className="exp_duties_pic" />
                <label class="exp_duties_writeup">
                    Cleaning and managing of data 
                </label>
            </div>

            <div className="exp_duties1">
                <img src={playButton} className="exp_duties_pic" />
                <label class="exp_duties_writeup">
                    Monitoring and Validation of data in diffrent states in Nigeria
                </label>
            </div>

            <div className="exp_duties3">
                <img src={playButton} className="exp_duties_pic" />
                <label class="exp_duties_writeup">
                    Developement of the Nassp Retirement Application 
                </label>
            </div>

            <div className="exp_duties4">
                <img src={playButton} className="exp_duties_pic" />
                <label class="exp_duties_writeup">
                    Managing of the Chart platform on the NASSP website
                </label>
            </div>

            <div className="exp_duties5">
                <img src={playButton} className="exp_duties_pic" />
                <label class="exp_duties_writeup">
                    Monitoring and Validation of data in diffrent states in Nigeria
                </label>
            </div>
        </div>
    );
}

export default Experience;