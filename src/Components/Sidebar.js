import React from 'react';

const Sidebar = () => {

 const ContactItem = ({ icon, title, link, value }) => (
  <li className="contact-item">
    <div className="icon-box">
      <ion-icon name={icon}></ion-icon>
    </div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {link ? (
        <a href={link} className="contact-link" aria-label={`Contact via ${title}`}>
          {value}
        </a>
      ) : (
        value
      )}
    </div>
  </li>
);

const SocialItem = ({ href, icon }) => (
  <li className="social-item">
    <a href={href} target="_blank"  rel="noreferrer" className="social-link" aria-label={`Follow on ${icon.split('-')[1]}`}>
      <ion-icon name={icon}></ion-icon>
    </a>
  </li>
);


return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/manish-passport.png" alt="Manish Kumar Jangir" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Manish Kumar Jangir">Manish Kumar Jangir</h1>
          <p className="title">Sr. Software Developer (Full Stack)</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          aria-expanded="false"
          aria-controls="sidebar-info_more"
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more" id="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <ContactItem
            icon="mail-outline"
            title="Email"
            link="mailto:manishjangir027@gmail.com"
            value="manishjangir027@gmail.com"
          />
          <ContactItem
            icon="phone-portrait-outline"
            title="Phone"
            link="tel:+918114489686"
            value="+91 (811) 448-9686"
          />
          <ContactItem
            icon="calendar-outline"
            title="Birthday"
            value={<time dateTime="1992-05-03">May 03, 1992</time>}
          />
          <ContactItem
            icon="location-outline"
            title="Location"
            value={<address>Noida, Delhi-NCR, India</address>}
          />
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <SocialItem href="https://www.facebook.com/manish.jangir.127/" target="_blank"  rel="noreferrer" icon="logo-facebook" />
          <SocialItem href="https://www.linkedin.com/in/iammanishjangir/" target="_blank"  rel="noreferrer" icon="logo-linkedin" />
          <SocialItem href="https://www.instagram.com/its_me_manish027/" target="_blank"  rel="noreferrer" icon="logo-instagram" />
          <SocialItem href="https://github.com/madehuge" target="_blank" rel="noreferrer" icon="logo-github" />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
