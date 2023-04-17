import React from "react";
import pic from './photos/pic.png';
import rqmark from './photos/rqmark.png';
import facebook from  './photos/facebook.png';
import instagram from './photos/instagram.png';
import linkdn from './photos/linkedin.png';

const Testimonies = () => {
    return(
        <div class="container testimony_comp">
            <label className="testimony_comp_header">TESTIMONIES ABOUT ME!</label>

            <div className="testimony_body">
                <div class="testimony_body_pic">
                    <img src={pic} class="testimony_body_pic1"/>
                </div>

                <div class="testimony_body_writeup">
                    <div class="testimony_body_writeup1">
                        <img src={rqmark} class="testimony_body_writeup1_rqmark"/>
                    </div>
                    <div class="testimony_body_writeup2">
                        <label class="testimony_body_writeup2_name">
                            Anthony Ebenezer David
                        </label>
                        <div className="testimony_body_writeup2_split"></div>
                        <img src={facebook} class="testimony_body_writeup2_facebook"/>
                        <img src={instagram} class="testimony_body_writeup2_insta"/>
                        <img src={linkdn} class="testimony_body_writeup2_linkdn"/>
                    </div>
                    <div class="testimony_body_writeup3">
                        <label class="testimony_body_writeup3_intro">
                            Amazing Customer Service
                        </label>
                    </div>
                    <div class="testimony_body_writeup4">
                        <label class="testimony_body_writeup4_lab">
                            I had a job to do, back in 2015, of which i assigned it to Shadrach, 
                            and he did the job like a professional would and made sure that all 
                            my needs were met he is someone that pays attention to details to make
                            sure that his client gets the best. 
                        </label>
                    </div>
                    <div class="testimony_body_writeup5">
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies;