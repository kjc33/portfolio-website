import React from "react";
import styles from "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JobTitles from "./components/JobTitles";
import Skills from "./components/Skills";
import Statistics from "./components/Statistics";
import Work from "./components/Work";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Skills />
        <Statistics />
        <Work />
        <Quote />
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
        <Contact />
        <Footer />
      </main>
      <script src="script.js"></script>
    </>
  );
}
