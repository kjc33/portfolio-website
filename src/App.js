import React from "react";
import styles from "./App.css";

import headshot from "./images/kyle-headshot-square.jpg";
import downArrow from "./images/arrow-white.svg";
import greenBorderHexagon from "./images/hexagon-green-border.svg";
import whiteHexagon from "./images/hexagon-white.svg";
import blackHexagon from "./images/hexagon-black.svg";
import greenHexagon from "./images/hexagon-green.svg";

export default function App() {
  return (
    <>
      <header className="primary-header">
        <div className="header-inner">
          <a className="site-logo" href="./index.html">
            <div className="logo-inner">
              <div className="headshot">
                <figure>
                  <img src={headshot} alt="Kyle Chin Headshot" width="80" height="80" />
                </figure>
              </div>
              <div className="site-name">
                <p>Kyle Chin</p>
              </div>
            </div>
          </a>
          <nav className="site-nav" id="siteNav">
            <ul className="primary-nav">
              <li className="nav-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#work">Work</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu">
            <div className="mobile-menu-burger" id="mobileMenuBurger">
              <div className="top-bar"></div>
              <div className="middle-bar"></div>
              <div className="bottom-bar"></div>
            </div>
            <div className="mobile-menu-nav" id="mobileMenuNav">
              <div className="mobile-menu-nav-items" id="mobileMenuNavItems">
                <ul className="mobile-menu-nav-list-items">
                  <li className="nav-item">
                    <a href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a href="#work">Work</a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact">Hire Me</a>
                  </li>
                </ul>
              </div>
              <div className="mobile-close-btn">
                <button aria-label="Mobile Menu Close Button" className="close-btn" id="closeBtn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="cta" id="menuBtn">
            <a className="primary-nav-cta-btn" id="primary-nav-cta-btn" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="inner-container max-width flex-column">
            <h1 className="outline-heading-large">Frontend Developer</h1>
            <div className="hero-subhead">
              <p className="white">Open to Work</p>
              <p className="light-font">Available Now</p>
            </div>
            <div className="drop-down-arrow">
              <a href="#about">
                <figure>
                  <img className="arrow-icon" src={downArrow} alt="Drop Down Arrow" />
                </figure>
              </a>
            </div>
            <div className="location vertical flex-column">
              <p>45.6280&deg; N, 122.6739&deg; W</p>
              <p>Vancouver, WA</p>
            </div>
          </div>
        </section>
        <div className="image-separator-right hero-separator">
          <div className="inner-container">
            <div className="image-separator-bg">
              <div className="photo-attribution-left vertical flex-column">
                <p>
                  Photo by{" "}
                  <a href="https://www.arieljordanphoto.com/" target="_blank">
                    Ariel Jordan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="about no-bottom-padding" id="about">
          <div className="inner-container medium-width">
            <h2 className="primary-h2 white">Hey There</h2>
            <div className="large-text underline-link">
              <p>
                My name is Kyle, and I'm a web designer and front-end developer. Over the last ten years, I've overseen the development and delivery of over 150 websites from initial discovery to site launch. My project experience is quite diverse and I've taken on other roles, including account
                manager, content strategist, and SEO/Digital Marketer.
              </p>
              <p>
                My passion is helping businesses and individuals establish a strong online presence by creating beautiful, user-friendly websites that drive results. If you think we're a good fit for a project, please feel free to <a href="#contact">reach out</a>.
              </p>
            </div>
          </div>
        </section>
        <section className="job-titles">
          <div className="inner-container max-width flex-row flex-column-tablet large-gap">
            <div className="job-card developer-card flex-column large-gap">
              <h3>Developer</h3>
              <p className="percentage">70 Percent</p>
              <p className="pagination">// 01</p>
            </div>
            <div className="job-card designer-card flex-column large-gap">
              <h3>Designer</h3>
              <p className="percentage">20 Percent</p>
              <p className="pagination">// 02</p>
            </div>
            <div className="job-card strategist-card flex-column large-gap">
              <h3>Strategist</h3>
              <p className="percentage">10 Percent</p>
              <p className="pagination">// 03</p>
            </div>
          </div>
        </section>
        <div className="image-separator-left about-separator">
          <div className="inner-container">
            <div className="image-separator-bg">
              <div className="photo-attribution-right vertical flex-column">
                <p>
                  Photo by{" "}
                  <a href="https://unsplash.com/@kaleidico?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                    Kaleidico
                  </a>{" "}
                  on
                  <a href="https://unsplash.com/photos/two-people-drawing-on-whiteboard-26MJGnCM0Wc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="skills no-bottom-padding" id="skills">
          <div className="inner-container large-width flex-row flex-column-mobile justify-space-between large-gap">
            <div className="heading-with-cta">
              <h2 className="primary-h2 white">Skills</h2>
              <div className="arrow-btn">
                <a href="./docs/kyle-chin-resume.pdf" target="_blank" className="arrow-btn-text">
                  View Résumé
                </a>
              </div>
            </div>
            <div className="skills-list flex-row large-gap">
              <div className="skills-column-1">
                <ul className="custom-list underline-link">
                  <li>
                    Certified{" "}
                    <a href="https://verify.w3schools.com/1O963J2W5L" target="_blank">
                      Frontend Developer
                    </a>
                    , including{" "}
                    <a href="https://verify.w3schools.com/1O5HIAQZ4E" target="_blank">
                      HTML
                    </a>
                    ,{" "}
                    <a href="https://verify.w3schools.com/1O5JOA4BC6" target="_blank">
                      CSS
                    </a>
                    , and
                    <a href="https://verify.w3schools.com/1O963ITIZN" target="_blank">
                      JavaScript
                    </a>
                  </li>
                  <li>WordPress and Visual Page Builders (Elementor and WP Bakery)</li>
                  <li>Bash / Linux Terminal</li>
                  <li>Git / GitHub Version Control</li>
                </ul>
              </div>
              <div className="skills-column-2">
                <ul className="custom-list underline-link">
                  <li>FTP, cPanel, SMTP, and DNS</li>
                  <li>Photoshop, Illustrator, Sketch, and Figma</li>
                  <li>Google Analytics, Search Console, and Tag Manager</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="hexagon-divider no-bottom-padding">
          <div className="inner-container large-width flex-column flex-row-tablet large-gap">
            <div className="hexagon-statistic-bg hexagon-green">
              <figure>
                <img src={greenBorderHexagon} alt="Green Border Hexagon" />
                <p className="hexagon-statistic-description">
                  <span className="statistic-number">150+</span> Websites Built
                </p>
              </figure>
            </div>
            <div className="hexagon-statistic-bg hexagon-white">
              <figure>
                <img src={whiteHexagon} alt="White Hexagon" />
                <p className="hexagon-statistic-description">
                  <span className="statistic-number">10</span> Years of Experience
                </p>
              </figure>
            </div>
            <div className="hexagon-statistic-bg hexagon-black">
              <figure>
                <img src={blackHexagon} alt="Black Hexagon" />
                <p className="hexagon-statistic-description">
                  <span className="statistic-number">6</span> Developer Certifications
                </p>
              </figure>
            </div>
          </div>
        </div>
        <section className="work no-bottom-padding" id="work">
          <div className="inner-container max-width flex-column large-gap">
            <h2 className="outline-heading-large">Work</h2>
            <div className="select-work flex-column">
              <article className="flex-column">
                <div className="select-work-featured-bg project-1">
                  <div className="photo-attribution-right vertical flex-column">
                    <p>
                      Photo by{" "}
                      <a href="https://unsplash.com/@mvds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                        MSR
                      </a>{" "}
                      on
                      <a href="https://unsplash.com/photos/man-in-white-shirt-and-black-pants-carrying-black-and-yellow-skateboard-on-white-sand-during-fhQ816rFmN0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                        Unsplash
                      </a>
                    </p>
                  </div>
                </div>
                <div className="select-work-content flex-column grid-tablet">
                  <div className="select-work-heading">
                    <h3>The Chill Foundation</h3>
                  </div>
                  <div className="select-work-description large-text underline-link">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit, massa conubia turpis arcu at gravida cum est, nisl primis blandit accumsan ligula convallis. Per vitae pulvinar pellentesque taciti tellus egestas litora duis ut sociosqu morbi, integer feugiat metus platea ultrices id
                      praesent sem fringilla. Quis potenti euismod aliquam porttitor, nisi fames.
                    </p>
                    <div className="arrow-btn">
                      <a href="https://www.chill.org" target="_blank" className="arrow-btn-text">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex-column">
                <div className="select-work-featured-bg project-2">
                  <div className="photo-attribution-right vertical flex-column">
                    <p>
                      Photo by{" "}
                      <a href="https://unsplash.com/@flopt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                        Flo Pappert
                      </a>{" "}
                      on
                      <a href="https://unsplash.com/photos/black-suv-park-beside-white-and-brown-house-during-daytime-kspRwqFxOms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                        Unsplash
                      </a>
                    </p>
                  </div>
                </div>
                <div className="select-work-content flex-column grid-tablet">
                  <div className="select-work-heading">
                    <h3>Mountainwood Homes</h3>
                  </div>
                  <div className="select-work-description large-text underline-link">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit, massa conubia turpis arcu at gravida cum est, nisl primis blandit accumsan ligula convallis. Per vitae pulvinar pellentesque taciti tellus egestas litora duis ut sociosqu morbi, integer feugiat metus platea ultrices id
                      praesent sem fringilla. Quis potenti euismod aliquam porttitor, nisi fames.
                    </p>
                    <div className="arrow-btn">
                      <a href="https://www.mountainwoodhomes.com" target="_blank" className="arrow-btn-text">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex-column">
                <div className="select-work-featured-bg project-3">
                  <div className="photo-attribution-right vertical flex-column">
                    <p>
                      Photo by{" "}
                      <a href="https://unsplash.com/@visualsbyroyalz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                        AM
                      </a>{" "}
                      on
                      <a href="https://unsplash.com/photos/man-in-orange-tank-top-and-black-shorts-doing-exercise-aclkvEMIfL8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
                        Unsplash
                      </a>
                    </p>
                  </div>
                </div>
                <div className="select-work-content flex-column grid-tablet">
                  <div className="select-work-heading">
                    <h3>Ritual Health and Fitness</h3>
                  </div>
                  <div className="select-work-description large-text underline-link">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit, massa conubia turpis arcu at gravida cum est, nisl primis blandit accumsan ligula convallis. Per vitae pulvinar pellentesque taciti tellus egestas litora duis ut sociosqu morbi, integer feugiat metus platea ultrices id
                      praesent sem fringilla. Quis potenti euismod aliquam porttitor, nisi fames.
                    </p>
                    <div className="arrow-btn">
                      <a href="https://www.ritualhealthandfitness.com" target="_blank" className="arrow-btn-text">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <div className="quote">
          <div className="inner-container max-width">
            <div className="quote-body flex-column large-gap">
              <p className="outline-text-large">
                "Kyle is extremely organized, professional, and a master at his craft. From <span className="green-accent">frontend development</span> to design, Kyle is an asset to any team and a genuine pleasure to work with!"
              </p>
              <div className="quote-attribution light-font">
                <p>Steven Howsley, Marketing Analyst, REI</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-separator-right quote-separator">
          <div className="inner-container">
            <div className="image-separator-bg">
              <div className="photo-attribution-left vertical flex-column">
                <p>
                  Photo by{" "}
                  <a href="https://www.arieljordanphoto.com/" target="_blank">
                    Ariel Jordan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="contact" id="contact">
          <div className="inner-container flex-column flex-row-desktop x-large-gap">
            <div className="heading-and-description flex-column x-small-gap">
              <h2 className="primary-h2 white">Let's Talk</h2>
              <div className="large-text underline-link">
                <p>I am open to contract work (strategy, design, development, or website maintenance) and full-time agency or studio employment.</p>
              </div>
            </div>
            <div className="form-wrapper small-gap">
              <form action="thank-you.html" method="post" className="contact-form display-grid" id="contact-form">
                <input type="text" name="first-name" id="firstName" placeholder="First Name" required />
                <input type="text" name="last-name" id="lastName" placeholder="Last Name" required />
                <input type="email" name="email" id="email" placeholder="Email" required />
                <input type="tel" name="phone" id="phone" placeholder="Phone" />
                <input type="url" name="website" id="website" placeholder="Website" />
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Tell me about your website goals, budget, and anything other pertinent details."></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </section>
        <footer className="primary-footer">
          <div className="inner-container max-width flex flex-column large-gap">
            <div className="top-half full-width flex flex-row flex-wrap justify-space-between large-gap">
              <div className="footer-logo flex flex-column">
                <figure>
                  <a href="#top">
                    <img src={greenHexagon} alt="Green Hexagon" width="100" height="100" />
                  </a>
                </figure>
                <p className="footer-tagline">Developer. Designer. Strategist.</p>
              </div>
              <div className="footer-navigation flex flex-row">
                <nav className="primary-footer-nav">
                  <ul className="flex flex-row flex-wrap small-gap">
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#work">Work</a>
                    </li>
                    <li>
                      <a href="#contact">Hire Me</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="social-icons full-width flex flex-row">
                <div className="footer-social-icon github">
                  <a href="https://github.com/kjc33" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="footer-social-icon linkedin">
                  <a href="https://www.linkedin.com/in/kylechin/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-half flex flex-column large-gap">
              <div className="footer-signature underline-link">
                <p>
                  I make every effort to ensure my portfolio is accessible to everyone. If you're having trouble using any part of my website, please don't hesitate to <a href="#contact">contact</a> me, and I will do my best to address the issue. Thank you for your understanding.
                </p>
              </div>
              <div className="accessibility-disclaimer">
                <p>
                  &copy; <span id="copyright-year"></span> Kyle John Chin <span className="pipe">|</span> Website by me, duh.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <script src="script.js"></script>
    </>
  );
}
