import React from "react";
import smile from './photos/smile.png';
import location from './photos/location.png';
import mail from './photos/mail.png';
import phone from './photos/phone.png';
import github from './photos/github1.png';
import linkdn from './photos/linkedin1.png';
import whatsapp from './photos/whatsapp.png';
import facebook from './photos/facebook1.png';
import instagram from './photos/instagram1.png';

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
                    <img src={mail} className="contact1_location_icon" />
                    <label className="contact1_location_txt1">
                        shadrachgodwin@gmail.com 
                    </label>
                </div>

                <div className="contact1_phone">
                    <img src={phone} className="contact1_location_icon" />
                    <label className="contact1_location_txt1">
                         07065575067, 09012438732 
                    </label>
                </div>

                <div className="contact_social">
                    <a href="#"><img src={github} className="contact_social_github" /></a>
                    <a href="#"><img src={linkdn} className="contact_social_linkdn" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;