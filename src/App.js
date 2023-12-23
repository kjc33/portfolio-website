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
        <Hero primaryH1="Front-end Developer" subHead="Open to Work" subHeadDescription="Available Now" />
        <ImageSeparator containerNameClasses="image-separator-right hero-separator" photoAttributionClasses="photo-attribution-left vertical flex-column" imageUrl="https://www.arieljordanphoto.com/" photographer="Ariel Jordan" />
        <About
          primaryH2="Hey There"
          paragraph1="My name is Kyle Chin, and I am a web designer and front-end developer. Over the last ten years, I've overseen the implementation and development of over 150 websites, from initial discovery to site launch. I've helped clients in various capacities outside of design and development, including account management, content strategy, copywriting, and SEO/Digital Marketing"
          paragraph2="I am passionate about helping businesses and individuals establish a strong online presence by creating beautiful, user-friendly websites that drive results. If you think we're a good fit for a project, please feel free to"
          link="#contact"
          linkText="contact me"
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
        <Quote name="Steven Howsley" position="Marketing Analyst" company="REI">
          Kyle is extremely organized, professional, and a master at his craft. From <span className="green-accent">front-end development</span> to design, Kyle is an asset to any team and a genuine pleasure to work with!
        </Quote>
        <ImageSeparator containerNameClasses="image-separator-right quote-separator" photoAttributionClasses="photo-attribution-left vertical flex-column" imageUrl="https://www.arieljordanphoto.com/" photographer="Ariel Jordan" />
        <Contact primaryH2="Let's Talk" description="I am open to contract work (strategy, design, development, or website maintenance) and full-time agency or studio employment." />
        <Footer />
      </main>
    </>
  );
}
