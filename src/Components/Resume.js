import React from 'react';

const Resume = ({ activeSection  }) => {
  return (
    <>
      <article className={`resume ${activeSection === 'resume' ? 'active' : ''}`} data-page="resume">
        <header>
          <h2 className="h2 article-title">Journey & Skills</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">RTU(Rajasthan Technical University), Kota</h4>
              <span>2009 — 2013</span>
              <p className="timeline-text">
               Awarded a Bachelor of Technology (B.Tech) degree with Honors in Computer Science & Engineering from Rajasthan, achieving top rank in the class for 4 out of 8 semesters.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">12th Board - RBSE(Rajasthan Board of Secondary Education), Jaipur</h4>
              <span>2007 — 2008</span>
              <p className="timeline-text">
                Achieved 70% aggregate in Science and Mathematics stream from the Rajasthan Board of Secondary Education (RBSE).</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">10th Board - RBSE(Rajasthan Board of Secondary Education), Jaipur</h4>
              <span>2005 — 2006</span>
              <p className="timeline-text">
                Achieved a 73% aggregate in General Subjects in the 10th Grade under the Rajasthan Board of Secondary Education (RBSE).
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Sr. WordPress Web Developer (70% Back-end, 25% Front-end)</h4>
              <span>July 2023 — Present</span>
              <p className="timeline-text">
               <ul>
                  <li>Designed and developed dynamic websites and web applications, ensuring seamless user experiences across multiple platforms.</li>
                  <li>Specialized in WordPress CMS development, creating custom themes, plugins, and optimizing performance for high-traffic websites.</li>
                  <li>Led a team of developers and designers, providing guidance, code reviews, and project management support to ensure timely deliveries.</li>
                  <li>Integrated REST APIs for smooth data communication between front-end and back-end systems.</li>
                  <li>Collaborated directly with clients and stakeholders to gather requirements, offer creative solutions, and implement changes effectively.</li>
                  <li>Focused on ADA and WCAG accessibility standards to ensure websites are usable by all audiences.</li>
                  <li>Utilized Git and GitHub for version control and managed deployments through AWS cloud services and CI/CD pipelines (Jenkins, GitHub Actions).</li>
                  <li>Optimized website SEO and page loading speeds, enhancing site visibility and performance.</li>
                  <li>Played a key role in achieving the "Dream Team" award for outstanding team collaboration and innovative product delivery.</li>
                </ul>
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">CMS - Tech Lead</h4>
              <span>Jan 2022 — June 2023</span>
              <p className="timeline-text">
                 <ul>
                  <li>Led cross-functional development teams, overseeing project architecture, planning, and end-to-end delivery of scalable web applications.</li>
                  <li>Mentored junior developers, conducted regular code reviews, and fostered a culture of best coding practices and continuous learning.</li>
                  <li>Collaborated closely with product managers and UI/UX teams to transform business requirements into technical solutions.</li>
                  <li>Implemented modern tech stacks including React, Node.js, Docker, and AWS services for efficient development and deployment workflows.</li>
                  <li>Championed agile methodologies (Scrum/Kanban) to streamline processes, improve sprint planning, and enhance team productivity.</li>
                  <li>Continuously evaluated new technologies and tools to drive innovation, improve performance, and reduce technical debt.</li>
                </ul>

              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Developer</h4>
              <span>Jan 2016 — Dec 2021</span>
              <p className="timeline-text">
               <ul>
                <li>Developed responsive, user-friendly web applications using HTML5, CSS3, JavaScript, React.js, and WordPress CMS.</li>
                <li>Built and optimized RESTful APIs and backend services using Node.js, PHP, and MySQL databases.</li>
                <li>Worked closely with UI/UX teams to transform designs into fully functional, accessible, and SEO-friendly websites.</li>
                <li>Maintained code quality through Git version control, regular code reviews, and implementing modular and scalable architecture.</li>
                <li>Integrated third-party APIs, payment gateways, and cloud services (AWS) to enhance application functionality.</li>
                <li>Ensured cross-browser compatibility, mobile responsiveness, and ADA/WCAG accessibility standards across all projects.</li>
              </ul>

              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">PHP Developer</h4>
              <span>June 2014 — Dec 2015</span>
              <p className="timeline-text">
               <ul>
                <li>Developed responsive, user-friendly web applications using HTML5, CSS3, JavaScript and WordPress CMS.</li>
                <li>Built and optimized RESTful APIs and backend services using PHP, and MySQL databases.</li>
                
              </ul>

              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Trainee Web Developer</h4>
              <span>Oct 2013 — May 2014</span>
              <p className="timeline-text">
               <ul>
                <li>Assisted in designing and updating WordPress and other CMS-based websites, ensuring functional layouts and intuitive navigation.</li>
                <li>Learned and implemented basic customization of CMS themes and plugins to meet client-specific requirements and branding guidelines.</li>
                <li>Supported the senior development team by performing website maintenance, troubleshooting issues, and optimizing page performance.</li>
              </ul>


              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

         <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">PHP</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">AWS Services & DevOps</h5>
              <data value="75">75%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Git & GitHub</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress CMS</h5>
              <data value="70">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React & Node.js</h5>
              <data value="75">75%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">MySQLi & MariaDB</h5>
              <data value="80">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Tools Used (HeidiSQL, Workbench, GitHub Desktop, WSL, Docker)</h5>
              <data value="85">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">HTML5 & SCSS</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>
        </ul>

        </section>
      </article>
    </>
  );
}

export default Resume;
