import React from 'react'
import '../index.css';
import contactImage from '../assets/images/contactimage.png' ;

const contact = () => {
  return (
    <section id='contact' className="contact-section">
      <div className="contact-card">
      <div className='contact-image'>
      <img src={contactImage} alt='contact illustration'/>
      </div>
        <div className="contact-form">
            <h2>Get in touch</h2>
            <p>Have any questions, feedback, or suggestions? We'd love to hear from you! <br/> Fill out the form below and our team will get back to you as soon as possible.</p>
            <form>
                <input type='email' placeholder='Enter a Valid Email adress' required></input>
                <input type='text' placeholder='Enter your Name' required></input>
                <button type='submit'>Submit</button>
            </form>
        </div>

        <div className='contact-info'>

        </div>
        </div>
    </section>
  )
}

export default contact