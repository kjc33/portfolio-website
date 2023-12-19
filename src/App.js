import React from "react";
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
import ImageSeparator from "./components/ImageSeparator";

import "./App.css";

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Hero 
          primaryH1="Frontend Developer"
          subHead="Open to Work"
          subHeadDescription="Available Now"
          location="Vancouver, WA"
          latitude="45.6280"
          longitude="122.6739"
        />
        <ImageSeparator 
          containerNameClasses="image-separator-right hero-separator" 
          photoAttributionClasses="photo-attribution-left vertical flex-column" 
          imageUrl="https://www.arieljordanphoto.com/" 
          photographer="Ariel Jordan" 
        />
        <About />
        <JobTitles />
        <ImageSeparator
          containerNameClasses="image-separator-left about-separator"
          photoAttributionClasses="photo-attribution-right vertical flex-column"
          imageUrl="https://unsplash.com/@kaleidico?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          photographer="Kaleidico"
          conCat={"on"}
          sourceUrl="https://unsplash.com/photos/two-people-drawing-on-whiteboard-26MJGnCM0Wc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          imageSource="Unsplash"
        />
        <Skills />
        <Statistics />
        <Work />
        <Quote />
        <ImageSeparator
          containerNameClasses="image-separator-right quote-separator" 
          photoAttributionClasses="photo-attribution-left vertical flex-column" 
          imageUrl="https://www.arieljordanphoto.com/" 
          photographer="Ariel Jordan" 
        />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
