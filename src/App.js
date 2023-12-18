import React from "react";
import styles from "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JobTitles from "./components/JobTitles";

import greenBorderHexagon from "./images/hexagon-green-border.svg";
import whiteHexagon from "./images/hexagon-white.svg";
import blackHexagon from "./images/hexagon-black.svg";
import greenHexagon from "./images/hexagon-green-logo.svg";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="image-separator-right hero-separator">
          <div className="inner-container">
            <div className="image-separator-bg">
              <div className="photo-attribution-left vertical flex-column">
                <p>
                  Photo by{" "}
                  <a href="https://www.arieljordanphoto.com/" target="_blank" rel="noreferrer">
                    Ariel Jordan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <About />
        <JobTitles />
        <div className="image-separator-left about-separator">
          <div className="inner-container">
            <div className="image-separator-bg">
              <div className="photo-attribution-right vertical flex-column">
                <p>
                  Photo by{" "}
                  <a href="https://unsplash.com/@kaleidico?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
                    Kaleidico
                  </a>{" "}
                  on
                  <a href="https://unsplash.com/photos/two-people-drawing-on-whiteboard-26MJGnCM0Wc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
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
                <a href="./docs/kyle-chin-resume.pdf" target="_blank" rel="noreferrer" className="arrow-btn-text">
                  View Résumé
                </a>
              </div>
            </div>
            <div className="skills-list flex-row large-gap">
              <div className="skills-column-1">
                <ul className="custom-list underline-link">
                  <li>
                    Certified{" "}
                    <a href="https://verify.w3schools.com/1O963J2W5L" target="_blank" rel="noreferrer">
                      Frontend Developer
                    </a>
                    , including{" "}
                    <a href="https://verify.w3schools.com/1O5HIAQZ4E" target="_blank" rel="noreferrer">
                      HTML
                    </a>
                    ,{" "}
                    <a href="https://verify.w3schools.com/1O5JOA4BC6" target="_blank" rel="noreferrer">
                      CSS
                    </a>
                    , and{" "}
                    <a href="https://verify.w3schools.com/1O963ITIZN" target="_blank" rel="noreferrer">
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
                      <a href="https://unsplash.com/@mvds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
                        MSR
                      </a>{" "}
                      on
                      <a href="https://unsplash.com/photos/man-in-white-shirt-and-black-pants-carrying-black-and-yellow-skateboard-on-white-sand-during-fhQ816rFmN0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
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
                      <a href="https://www.chill.org" target="_blank" rel="noreferrer" className="arrow-btn-text">
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
                      <a href="https://unsplash.com/@flopt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
                        Flo Pappert
                      </a>{" "}
                      on
                      <a href="https://unsplash.com/photos/black-suv-park-beside-white-and-brown-house-during-daytime-kspRwqFxOms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
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
                      <a href="https://www.mountainwoodhomes.com" target="_blank" rel="noreferrer" className="arrow-btn-text">
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
                      <a href="https://unsplash.com/@visualsbyroyalz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
                        AM
                      </a>{" "}
                      on
                      <a href="https://unsplash.com/photos/man-in-orange-tank-top-and-black-shorts-doing-exercise-aclkvEMIfL8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
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
                      <a href="https://www.ritualhealthandfitness.com" target="_blank" rel="noreferrer" className="arrow-btn-text">
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
                  <a href="https://www.arieljordanphoto.com/" target="_blank" rel="noreferrer">
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
                    <img src={greenHexagon} alt="Green Hexagon" width="80" height="80" />
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
                  <a href="https://github.com/kjc33" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="footer-social-icon linkedin">
                  <a href="https://www.linkedin.com/in/kylechin/" target="_blank" rel="noreferrer">
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
