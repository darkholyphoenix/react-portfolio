import React, { useState } from 'react';
import Slate from '../../assets/cover/slate.jpg'
import { validateEmail } from '../../utils/helpers';
import './index.css'

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section href ="#Contact" className= "body" style={{ backgroundImage: `url(${Slate})`}}>
      <h1 data-testid="h1tag" className="title color:'white'">Contact me</h1>
      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className= "name color:'white'">Name:</label>
          <input type="text" className ="text-input" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email" className="email color:'white'">Email address:</label>
          <input type="email" className ="text-input" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message" className="message color:'white'">Message:</label>
          <textarea className ="text-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" className="submit-button" type="submit">Submit</button>
      </form>
      <h2 data-testid="h1tag" className="title color:'white'">If you wish to contact me directly, send me an email at: j.bowen1821@gmail.com</h2>
    </section>
    
    
  );
}

export default ContactForm;
