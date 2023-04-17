import React from "react";
import smile from './photos/smile.png';

const Contact = () => {
    return (
        <div className="container contact_comp"> 
            <div className="contact_comp1">
                <label className="contact_comp1_intro">
                    Get in Touch
                </label>

                <div>
                    <label className="contact_comp1_desc">Feel free to contact me when you can</label>
                    <img src={smile} className="contact_comp1_desc_img"/>
                </div>

                <div>
                    <input type="text" className="contact_name_txt"/>
                </div>
            </div>
            
            <div className="contact_comp2">

            </div>
        </div>
    );
}

export default Contact;