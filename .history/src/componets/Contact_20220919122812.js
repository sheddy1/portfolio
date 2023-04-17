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

                <div className="contact_name_div">
                    <input type="text" className="contact_name_txt" placeholder="Name*"/>
                </div>

                <div className="contact_email_div">
                    <input type="text" className="contact_name_txt" placeholder="Email Adress*"/>
                </div>

                <div className="contact_message_div">
                    <textarea id="w3review" name="w3review" rows="4" cols="50" className="contact_name_txtarea" placeholder="Message*">
                    </textarea>

                    <button className="contact_button">

                    </button>
                </div>
            </div>
            
            <div className="contact_comp2">

            </div>
        </div>
    );
}

export default Contact;