import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p12co5i', 'template_p8dr0uc', form.current, 'r8k01cshIlcG_JK7v')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactinfo'>
      <h3 className='conatact_question'>GOT A QUESTION?</h3>
    <h1 className='ContactMe'>Contact Me...</h1>
    <p className='contact_theory'>We're here to help and answer any question you might have. We look forward to hearing for you <br />🙂 </p>
    <form ref={form} onSubmit={sendEmail} className='form_class'>
      

      <input type="text" name='from_name' placeholder='Enter your name' />
      <br />

      <input type="email" name='from_email' placeholder='Enter your email'/>
      <br />

      <textarea name="message" placeholder='Your Message'/>
      <br />
      <br />
      <input type="submit" value="Send Message" className='send_area' />
    </form>

      
    </div>
    
  );
}
