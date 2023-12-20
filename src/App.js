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
        <Hero primaryH1="Frontend Developer" subHead="Open to Work" subHeadDescription="Available Now" />
        <ImageSeparator containerNameClasses="image-separator-right hero-separator" photoAttributionClasses="photo-attribution-left vertical flex-column" imageUrl="https://www.arieljordanphoto.com/" photographer="Ariel Jordan" />
        <About
          primaryH2="Hey There"
          paragraph1="My name is Kyle, and I'm a web designer and front-end developer. Over the last ten years, I've overseen the development and delivery of over 150 websites from initial discovery to site launch. My project experience is quite diverse and I've taken on other roles, including account
          manager, content strategist, and SEO/Digital Marketer"
          paragraph2="My passion is helping businesses and individuals establish a strong online presence by creating beautiful, user-friendly websites that drive results. If you think we're a good fit for a project, please feel free to"
          link="#contact"
          linkText="reach out"
        />
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
        <Skills primaryH2="Skills" />
        <Statistics />
        <Work />
        <Quote />
        <ImageSeparator containerNameClasses="image-separator-right quote-separator" photoAttributionClasses="photo-attribution-left vertical flex-column" imageUrl="https://www.arieljordanphoto.com/" photographer="Ariel Jordan" />
        <Contact primaryH2="Let's Talk" description="I am open to contract work (strategy, design, development, or website maintenance) and full-time agency or studio employment." />
        <Footer />
      </main>
    </>
  );
}
