import React from "react";

import WorkListingItem from "./WorkListingItem";

import artifyImg from "../images/live-band.webp";
import quizerImg from "../images/online-quiz.webp";

export default function Work() {
  const featuredWorks = [
    {
      imgSrc: artifyImg,
      altText: "Artify search allows you to learn more about your favorite bands and their top songs.",
      featuredWorkContainerClasses: "select-work-featured-bg project-1",
      photographer: "Cody Board",
      photographerProfileLink:
        "https://unsplash.com/@codypboard?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink:
        "https://unsplash.com/photos/man-in-white-t-shirt-C7DWZcxFCNY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Artify Search App",
      projectDescription: `Artify is an artist search app that helps users learn more about the musicians they love. Built in React, Artify uses the Spotify API to display the artist's name, number of followers, genres, and top songs. Unfortunately, the Spotify API doesn't include biographies, so Artify also pulls from the Wikipedia API to provide background information about the artists.`,
      projectLink: "https://spotify-artist-search-app.netlify.app/",
      projectButtonLabel: "Visit Website",
    },
    {
      imgSrc: quizerImg,
      altText: "The Quizer app is a fun online trivia test that calculates scores and tracks top users on a leaderboard.",
      featuredWorkContainerClasses: "select-work-featured-bg project-2",
      photographer: "TC",
      photographerProfileLink:
        "https://unsplash.com/@thoughtcatalog?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink:
        "https://unsplash.com/photos/woman-sitting-on-floor-and-leaning-on-couch-using-laptop-Nv-vx3kUR2A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Quizer Challenge",
      projectDescription: `Quizer is a full-stack React application for trivia enthusiasts. The exam features a countdown timer that automatically tallies an incorrect response if no answer is selected before the time expires. Using protected routes, Quizer also has an admin Dashboard for editing the quiz questions and answers as well as a dynamic leaderboard for the top scores.`,
      projectLink: "https://quizer-application.netlify.app/",
      projectButtonLabel: "Visit Website",
    },
  ];

  return (
    <section className="work no-bottom-padding" id="work">
      <div className="inner-container max-width flex-column large-gap">
        <h2 className="outline-heading-large">Work</h2>
        <div className="select-work flex-column">
          {featuredWorks.map((featuredWork, index) => (
            <WorkListingItem key={index} featuredWorkDetails={featuredWork} />
          ))}
        </div>
      </div>
    </section>
  );
}