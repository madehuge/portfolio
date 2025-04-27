import React from 'react';
const Navbar = ({ setActiveSection, activeSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => handleNavClick('resume')}
          >
            Resume
          </button>
        </li>
        {/* <li className="navbar-item">
          <button
            className={`navbar-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={() => handleNavClick('portfolio')}
          >
            Portfolio
          </button>
        </li> */}
        {/* <li className="navbar-item">
          <button
            className={`navbar-link ${activeSection === 'blog' ? 'active' : ''}`}
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </button>
        </li> */}
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;