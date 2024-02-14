import ContactFormPage from '@/components/contactFormPage/ContactFormPage';
import ContactHeader from '@/components/contactHeader/ContactHeader';
import Faq from '@/components/faq/Faq';
import React from 'react'

const page = () => {
  return (
    <div>
        {/* <ContactHeader/> */}
        <Faq/>
        <ContactFormPage/>
    </div>
  )
}

export default page;
