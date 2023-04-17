import React from "react";
import smile from './photos/smile.png';
import location from './photos/location.png';

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

                <div className="contact_name_div">
                    <input type="text" className="contact_name_txt" placeholder="Name*"/>
                </div>

                <div className="contact_email_div">
                    <input type="text" className="contact_name_txt" placeholder="Email Adress*"/>
                </div>

                <div className="contact_message_div">
                    <textarea id="w3review" name="w3review" rows="4" cols="50" className="contact_name_txtarea" placeholder="Message*">
                    </textarea>
                </div>

                <button className="contact_button">
                        Send Message
                    </button>
            </div>
            
            <div className="contact_comp2">
                <label className="contact1_intro">
                    Contact Me
                </label>

                <div className="contact1_location">
                    <img src={location} className="contact1_location_icon" />
                    <label className="contact1_location_txt">
                    No 1, Mohammed Abbass Abare<br/>
                    Street, new kado Abuja, Nigeria. 
                    </label>
                </div>

                <div className="contact1_email">
                    <img src={location} className="contact1_location_icon" />
                    <label className="contact1_location_txt">
                    No 1, Mohammed Abbass Abare<br/>
                    Street, new kado Abuja, Nigeria. 
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Contact;