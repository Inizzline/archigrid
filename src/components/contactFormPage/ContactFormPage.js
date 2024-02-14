"use client"
import React from 'react'
import ContactFormPageCss from "./ContactFormPage.module.css"
import MapContactForm from '../mapContactForm/MapContactForm'

const ContactFormPage = () => {

  return (
    <div className={ContactFormPageCss.mainContainer}>
      <div className={ContactFormPageCss.container}>
        <div className={ContactFormPageCss.leftSide}>
            {/* <h1>Send us a message</h1> */}
            <form className={ContactFormPageCss.form}>
                <input className={ContactFormPageCss.input} placeholder='Enter full name'/>
                <input className={ContactFormPageCss.input} placeholder='Email'/>
                <input className={ContactFormPageCss.input} placeholder='Subject'/>
                <textarea className={ContactFormPageCss.textarea} rows={10} placeholder='Type your message'/>
                <button className={ContactFormPageCss.button}>Submit</button>
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
