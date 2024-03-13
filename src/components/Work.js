import React from "react";

import WorkListingItem from "./WorkListingItem";

export default function Work() {
  const featuredWorks1 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-1",
      photographer: "Cody Board",
      photographerProfileLink: "https://unsplash.com/@codypboard?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/man-in-white-t-shirt-C7DWZcxFCNY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Artify Search App",
      projectDescription: `Artify is an artist search app that helps users learn more about the musicians they love. Built in React, Artify uses the Spotify API to display the artist's name, number of followers, genres, and top songs. Unfortunately, the Spotify API doesn't include biographies, so Artify also pulls from the Wikipedia API to provide background information about the artists.`,
      projectLink: "https://spotify-artist-search-app.netlify.app/",
      projectButtonLabel: "Visit Website",
    },
  ];

  const featuredWorks2 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-2",
      photographer: "TC",
      photographerProfileLink: "https://unsplash.com/@thoughtcatalog?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/woman-sitting-on-floor-and-leaning-on-couch-using-laptop-Nv-vx3kUR2A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Quizer Challenge",
      projectDescription: `Quizer is a full-stack React application for trivia enthusiasts. The exam features a countdown timer that automatically tallies an incorrect response if no answer is selected before the time expires. Using protected routes, Quizer also has an admin Dashboard for editing the quiz questions and answers as well as a dynamic leaderboard for the top scores.`,
      projectLink: "https://quizer-application.netlify.app/",
      projectButtonLabel: "Visit Website",
    },
  ];

  const featuredWorks3 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-3",
      photographer: "AM",
      photographerProfileLink: "https://unsplash.com/@visualsbyroyalz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/man-in-orange-tank-top-and-black-shorts-doing-exercise-aclkvEMIfL8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Ritual Health and Fitness",
      projectDescription: `Ritual Health and Fitness is owned and operated by Rod Stanley, an award-winning bodybuilder and fitness professional. The strategy, design, and site development came together naturally. I implemented a blog with custom taxonomy filters and a custom post for "Success Stories," utilizing Advanced Custom Fields (ACF) and Elementor's dynamic tagging.`,
      projectLink: "https://www.ritualhealthandfitness.com",
      projectButtonLabel: "Visit Website",
    },
  ];

  return (
    <section className="work no-bottom-padding" id="work">
      <div className="inner-container max-width flex-column large-gap">
        <h2 className="outline-heading-large">Work</h2>
        <div className="select-work flex-column">
          {featuredWorks1.map((featuredWork1, index) => (
            <WorkListingItem key={index} featuredWorkDetails={featuredWork1} />
          ))}
          {featuredWorks2.map((featuredWork2, index) => (
            <WorkListingItem key={index} featuredWorkDetails={featuredWork2} />
          ))}
          {featuredWorks3.map((featuredWork3, index) => (
            <WorkListingItem key={index} featuredWorkDetails={featuredWork3} />
          ))}
        </div>
      </div>
    </section>
  );
}
