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
        </div>
    );
}

export default Experience;