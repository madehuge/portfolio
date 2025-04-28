import React from 'react';
import Testimonials from './Testimonials';

const About = ({ activeSection  }) => {
  return (
    <article className={`about ${activeSection === 'about' ? 'active' : ''}`} data-page="about">


      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
         I belong to Jaipur (Pink City), Rajasthan, India, bringing a rich cultural heritage to my design and development work.
        </p>

          <p>
          My job is to build any web-app/software in a way that it is not only functional and user-friendly but also attractive. I believe in adding a personal touch to each product, ensuring that it’s both eye-catching and easy to use. My aim is to convey your message and identity in the most creative and innovative way possible. I have had the privilege of designing websites for many well-known brands, helping them establish a strong online presence.
          </p>
          <p>I started my journey as a Trainee Web Developer in October 2013 and have progressed to the role of a Full Stack (75% Backend & 25 % Front-end) Sr. Web Presenter by June 2025.</p>
          <p>I specialize in soft skills like leadership, team management, and client handling, which complement my technical expertise. My tech skills include React, Node, WordPress, CMS content management, PHP, MySQL & MariaDB, Rest-APIs, Git & GitHub, Docker, and WSL. I am also experienced with cloud technologies such as AWS, Jenkinsfile, and GitHub Actions.</p>
      </section>

      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-design.png" alt="Design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web-App Design & Development</h4>
              <p className="service-item-text">
                Crafting intuitive and seamless web app designs and development solutions that deliver exceptional user experiences and drive business success.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.png" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Team Leadership & Guidance</h4>
              <p className="service-item-text">
                Empowering and motivating my team by recognizing their strengths, fostering a culture of growth, and inspiring them to reach new heights of success.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-app.png" alt="Mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web & Mobile Device ADA Compatibility</h4>
              <p className="service-item-text">
                Ensuring web and mobile device accessibility by leveraging tools like WAVE, Axe, and SortSite to deliver solutions that fully comply with ADA standards and WCAG guidelines, providing an inclusive experience for all users.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.png" alt="Camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
               Optimizing responsive photography for web apps, ensuring fast load times and seamless user experiences through techniques like lazy loading and adaptive compression.
              </p>
            </div>
          </li>
        </ul>
      </section>

     <Testimonials />

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Companies I’ve worked with</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://agreeya.com/" target='_blank' rel='noreferrer' aria-label="AgreeYa Solutions India Pvt Ltd Website">
              <img src="./assets/images/agreeya.png" alt="AgreeYa Solutions India Pvt Ltd logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.oneclickitsolution.com/" target='_blank' rel='noreferrer' aria-label="One Click IT Consultancy  Pvt Ltd Website">
              <img src="./assets/images/oneclick.png" alt="One Click IT Consultancy Pvt Ltd logo" />
            </a>
          </li>
          
          <li className="clients-item">
            <a href="https://magnious.com/" target='_blank' rel='noreferrer' aria-label="Magnious Solutions Pvt Ltd Website">
              <img src="./assets/images/magnious.png" alt="Magnious Solutions Pvt Ltd logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.facebook.com/ReserveStep/" target='_blank' rel='noreferrer' aria-label="Reserve Step Infotech Facebook Page">
              <img src="./assets/images/reserve-step.png" alt="Reserve Step Infotech logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.linkedin.com/company/yellow-objects-solutions-pvt-ltd-/" target='_blank' rel='noreferrer' aria-label="Yellow Objects Solutions Pvt Ltd Linkedin Page">
              <img src="./assets/images/yellow-object.png" alt="Yellow Objects Solutions Pvt Ltd logo" />
            </a>
          </li>

          {/* Repeat for other clients */}
        </ul>
      </section>

    </article>
  );
}

export default About;
