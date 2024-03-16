"use client"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactFormPageCss from "./ContactFormPage.module.css"
import MapContactForm from '../mapContactForm/MapContactForm'
import Fade from 'react-reveal/Fade';

const ContactFormPage = () => {

  const ref = useRef()

  const [ succes, setSuccess ] = useState(false)
  console.log(succes);
  useEffect(() => {
    const timer = setTimeout(()=> {
      if(succes === true) {
        setSuccess(false)
      }
    }, 3500)
    return () => clearTimeout(timer);
  }, [succes])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ref.current);
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_KEY, ref.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log(result.text);
          ref.current.reset();
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        },
      );
    
  }

  return (
    <div className={ContactFormPageCss.mainContainer}>
      <div className={ContactFormPageCss.container}>
        <div className={ContactFormPageCss.leftSide}>
            <form ref={ref} onSubmit={handleSubmit} className={ContactFormPageCss.form}>
              <Fade left duration={2000}>
                <input className={ContactFormPageCss.input} name="name" placeholder='Enter full name' required/>
              </Fade>
              <Fade left duration={2500}>
                <input className={ContactFormPageCss.input} name="email" placeholder='Email' required/>
              </Fade>
              <Fade left duration={3000}>
                <input className={ContactFormPageCss.input} name="subject" placeholder='Subject' required/>
              </Fade>
              <Fade left duration={3500}>
                <textarea className={ContactFormPageCss.textarea} name="message" rows={10} placeholder='Type your message' required/>
              </Fade>
              <Fade up duration={4000}>
                <button type='submit' className={ContactFormPageCss.button}>Submit</button>
              </Fade>
                <p className={ContactFormPageCss.p}>{succes && "Your message has been sent. We'll get back to you soon 😊 "}</p>
            </form>
        </div>
        <div className={ContactFormPageCss.rightSide}>
            <MapContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactFormPage;
