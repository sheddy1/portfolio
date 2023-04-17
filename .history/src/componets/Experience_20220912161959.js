import React from "react";
import './Home.css';

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
            The National Social safety net coordinating office Abuja, is a Project which was setup by the office <br/> 
            of the vice president to help the poor <br/>
            and vulnurable in Nigeria. ( April 2021 - Present)
            </label>
        </div>
    );
}

export default Experience;