import React, { useState } from 'react';

const testimonialsData = [
  {
    avatar: './assets/images/the-leader.png',
    title: 'The Leader (Oct 2022) - OneClick IT Consultancy Pvt Ltd',
    text: 'Awarded for outstanding leadership, organizational growth, and innovative approaches in leading the team to achieve remarkable success for the company.',
    date: '2022-10-15',
    displayDate: '15 Oct, 2022',
  },
  {
    avatar: './assets/images/dream-team.png',
    title: 'Dream Team (Oct 2023) - AgreeYa Solutions India Pvt Ltd',
    text: 'For innovative product delivery in WordPress CMS, team bonding, team coordination, team support, and team quality work.',
    date: '2023-10-18',
    displayDate: '18 Oct, 2023',
  },
];

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <>
      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Appreciations, Awards & Recognitions</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => openModal(testimonial)}
                style={{ cursor: 'pointer' }}
              >
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.title}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                  {testimonial.title}
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal Section */}
      {isModalOpen && selectedTestimonial && (
        <div className="modal-container active" data-modal-container>
          <div className="overlay active" data-overlay onClick={closeModal}></div>

          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              data-modal-close-btn
              onClick={closeModal}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.title}
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="./assets/images/icon-quote.png" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {selectedTestimonial.title}
              </h4>

              <time dateTime={selectedTestimonial.date}>
                {selectedTestimonial.displayDate}
              </time>

              <div data-modal-text>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Testimonials;
