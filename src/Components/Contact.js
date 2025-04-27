import React from 'react';

const Contact = ({ activeSection  }) => {
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

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              aria-label="Full name"
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              aria-label="Email address"
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            aria-label="Your message"
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled
            data-form-btn
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
