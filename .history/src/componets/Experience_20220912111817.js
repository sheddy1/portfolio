import React from "react";
import './Home.css';

const Experience = () => {
    return (
        <div className="container experience_comp">
            <label className="exp_intro">02. My Experience</label>

            <div className="exp_heading">
                <table className="exp_heading_table" border='0px'>
                    <td className="exp_job_title">
                        <td>NASSCO</td>
                       <td>
                       <div className="exp_job_title_idn"></div>
                        </td> 
                    </td>
                    <td className="exp_job_title">NNPC</td>
                    <td className="exp_job_title">Viepaix</td>
                    
                </table>
            </div>
        </div>
    );
}

export default Experience;