import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r9irs0j', 'template_ex2weba', form.current, {
        publicKey: 'HwSia7_DpQV4Flbfa',
      })
      .then(
        (result) => {
          console.log('result.text!');
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section id="contacto" className="contact">
      <h2>Contáctame</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" id="name" name="from_name" placeholder="Nombre" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="from_email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Escríbeme un mensaje" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
