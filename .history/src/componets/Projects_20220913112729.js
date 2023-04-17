import React from "react";
import './Home.css';
import desktop from './photos/desktp1.png';

const Projects = () =>{
    return (
        <div className="container projects_comp">
            <label className="projects_intro">
                03. Projects I've worked on
            </label>

            <div className="projects_comp1">
                <img src={desktop} className="projects_desktop"/>
            </div>
        </div>
    )
}

export default Projects;