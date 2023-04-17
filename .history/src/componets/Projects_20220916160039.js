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
                
                <label className="projects_name">
                    Github Finder
                </label>

                <label className="projects_desc">
                    Github finder is a website developed <br/>
                    using the react, it is linked with the github <br/>
                    api and is used in finding diffrent users <br/>
                    that has been registered on github along <br/>
                    side their repositories
                </label>
                
                <div className="pro_resources">
                    
                    <div className="project_recources">
                        React.js
                    </div>

                    <div className="project_recources1">
                        Css
                    </div>

                    <div className="project_recources2">
                        Typescript
                    </div>

                    <div className="project_recources3">
                        VSX
                    </div>
                </div>

                <div className="pro_links">
                    <a href="#"><div className="project_link">
                        View website
                    </div></a>

                    <a href="#"><div className="project_link1">
                        Visit Github Repo
                    </div></a>

                    <a href="#"><div className="project_link2">
                        View Figma Design
                    </div></a>
                </div>

            </div>
        </div>
    )
}

export default Projects;