import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import twitter from '../icons/twitter.svg';
import youtube from '../icons/youtube.svg';
import mail from '../icons/mail.svg';

import React,{useState,useRef} from 'react';
function check_email_type(email){
    let count = 0;
    let at_occurence = 0;
    let dot_occurence = 0;
    if(email.includes('@')){
        count++;
        at_occurence = email.indexOf('@', 0);
    }
    if(email.includes('.') && email.indexOf('.', 0) != (email.length -1) ){
        count++;
        dot_occurence = email.indexOf('.', 0);
    }
    if(at_occurence < dot_occurence){
        count++;
    }
    
    //final checking


    if(count === 3){
        return true;
    }
    else{
        return false;
    }
}
function FooterElement(props){

    let [bg_type, set_bg_type] = useState(1); 
    let btn_ref = useRef(null);
    let input = useRef(null);

    return(
        <footer>
            <div className="contact">
                <h1><i>Wiki</i>How</h1>
                <div>
                    <span style={{backgroundImage : `url(${facebook})`}}></span>
                    <span style={{backgroundImage : `url(${instagram})`}}></span>
                    <span style={{backgroundImage : `url(${twitter})`}}></span>
                    <span style={{backgroundImage : `url(${mail})`}}></span>
                    <span style={{backgroundImage : `url(${youtube})`}}></span>
                </div>
            </div>
            <ul className="first-column">
                <li>Home</li>
                <li>About Us</li>
                <li>Experts</li>
                <li>Jobs</li>
                <li>Contact Us</li>
            </ul>
           <div className="newsletter" >
                <div className="icon"></div>
                <h1>Wiki<i>How</i> NewsLetter</h1>
                <div type={bg_type}>
                    <input placeholder="Your Mail Address Here" ref={input} />
                    <button ref={btn_ref}  onClick={(e)=>{
                        if(!check_email_type(input.current.value)){
                            set_bg_type(1);
                        }
                        else{
                            set_bg_type(0);
                        }
                    }}></button>
                </div>
            </div>
            <ul className="second-column">
                <li>T&C</li>
                <li>Site Map</li>
                <li>Privacy Policy</li>
                <li>Contribute</li>
            </ul>
     
        </footer>
    );
}

export default FooterElement;