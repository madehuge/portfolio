import React, { useState } from 'react';

const Contact = ({ activeSection }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Abuse words check
    const badWords = ['abuse', 'spam', 'fake', 'badword']; 
    const hasBadWords = badWords.some(word =>
      formData.message.toLowerCase().includes(word)
    );

    if (hasBadWords) {
      alert('Inappropriate language detected. Please modify your message.');
      return;
    }

    // Actual form submission to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString(),
    })
      .then(() => setFormStatus('SUCCESS'))
      .catch(() => setFormStatus('ERROR'));
  };

  return (
    <article className={`contact ${activeSection === 'contact' ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135672.4775637062!2d75.75130976826587!3d26.912433257572474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c5b446dd2a515%3A0x5b1e70ed3f10d7b4!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1678994056801!5m2!1sen!2sus"
            width="400"
            height="300"
            loading="lazy"
            aria-label="Map showing location of Jaipur, Rajasthan, India"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        {formStatus === 'SUCCESS' && <p className="success-message">Thank you! Your message has been sent.</p>}
        {formStatus === 'ERROR' && <p className="error-message">Oops! Something went wrong. Try again later.</p>}

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="form"
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field */}
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" onChange={handleChange} /></label>
          </p>

          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              aria-label="Full name"
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email address"
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your message"
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            aria-label="Send Message"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
