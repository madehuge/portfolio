import React from 'react';

const Portfolio = ({ activeSection  }) => {
  return (
    <>
      <article className={`portfolio ${activeSection === 'portfolio' ? 'active' : ''}`} data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-select-value>Select category</div>
              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>
              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>
              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>
              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            {/* Removed role="button" as it's redundant */}
            <li className="project-item active" data-filter-item data-category="web development">
              <button aria-label="View Finance project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-1.jpg" alt="finance" loading="lazy" />
                </figure>
                <h3 className="project-title">Finance</h3>
                <p className="project-category">Web development</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="web development">
              <button aria-label="View Orizon project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-2.png" alt="orizon" loading="lazy" />
                </figure>
                <h3 className="project-title">Orizon</h3>
                <p className="project-category">Web development</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="web design">
              <button aria-label="View Fundo project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-3.jpg" alt="fundo" loading="lazy" />
                </figure>
                <h3 className="project-title">Fundo</h3>
                <p className="project-category">Web design</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="applications">
              <button aria-label="View Brawlhalla project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-4.png" alt="brawlhalla" loading="lazy" />
                </figure>
                <h3 className="project-title">Brawlhalla</h3>
                <p className="project-category">Applications</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="web design">
              <button aria-label="View DSM project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-5.png" alt="dsm." loading="lazy" />
                </figure>
                <h3 className="project-title">DSM.</h3>
                <p className="project-category">Web design</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="web design">
              <button aria-label="View MetaSpark project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-6.png" alt="metaspark" loading="lazy" />
                </figure>
                <h3 className="project-title">MetaSpark</h3>
                <p className="project-category">Web design</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="web development">
              <button aria-label="View Summary project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-7.png" alt="summary" loading="lazy" />
                </figure>
                <h3 className="project-title">Summary</h3>
                <p className="project-category">Web development</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="applications">
              <button aria-label="View Task Manager project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-8.jpg" alt="task manager" loading="lazy" />
                </figure>
                <h3 className="project-title">Task Manager</h3>
                <p className="project-category">Applications</p>
              </button>
            </li>

            <li className="project-item active" data-filter-item data-category="web development">
              <button aria-label="View Arrival project" className="project-link">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-9.png" alt="arrival" loading="lazy" />
                </figure>
                <h3 className="project-title">Arrival</h3>
                <p className="project-category">Web development</p>
              </button>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Portfolio;
