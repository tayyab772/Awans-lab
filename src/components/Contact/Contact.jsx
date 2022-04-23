import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from 'react';
import {themeContext} from '../../Context'
import { useContext } from "react";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cunidi3', 'template_l4e5ue8', form.current, 'AV9CnFWHWXUutLRln')
            .then((result) => {
                console.log(result.text);
                setDone(true); 
                setTimeout(()=> {
                    setDone(false);
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
    };

    const  theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}} >Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur S-blur" style={{ background: "#ABF1FF94" }}></div>
                </div>

            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}    >
                    <input type="text" name='to_name' className='user' placeholder='Name' />
                    <input type="email" name='from_name' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value="send" className="button" />
                    <span>{done && "Thanks for Contacting us!"}</span>
                    <div className="blur S-blur2" style={{ background: 'var(--purple)' }}></div>

                </form>

            </div>
        </div>
    )
}

export default Contact
