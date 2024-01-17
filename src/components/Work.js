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
      projectDescription: `Artify is an artist search app that helps users learn more about the musicians they love. Built in React, Artify uses the Spotify API to display the artist's name, number of followers, genres, and top songs. Unfortunately, the Spotify API doesn't include biographies, so Artify also uses the Wikipedia API to expand upon artist profiles.`,
      projectLink: "https://spotify-artist-search-app.netlify.app/",
      projectButtonLabel: "Visit Website",
    },
  ];

  const featuredWorks2 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-2",
      photographer: "MSR",
      photographerProfileLink: "https://unsplash.com/@mvds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/man-in-white-shirt-and-black-pants-carrying-black-and-yellow-skateboard-on-white-sand-during-fhQ816rFmN0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "The Chill Foundation",
      projectDescription: `As a youth sports nonprofit in Vermont, I co-designed and led the development of The Chill Foundation's new website in 2022. I worked from an approved design and designed other pages during development. Integrating the homepage "Programs" section with hover-over images and click-to-landing functionality pushed the limits of Elementor.`,
      projectLink: "https://www.chill.org",
      projectButtonLabel: "Visit Website",
    },
  ];

  const featuredWorks3 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-3",
      photographer: "Flo Pappert",
      photographerProfileLink: "https://unsplash.com/@flopt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/black-suv-park-beside-white-and-brown-house-during-daytime-kspRwqFxOms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Mountainwood Homes",
      projectDescription: `Mountainwood Homes, a premier home builder and renovation company, tasked me to lead the entire redesign project, including AM, strategy, design, and development. I explored overlapping elements, vertical text, and image "cutouts" to mimic crown moulding. This site has aged nicely over the years, as my core design is mostly still intact.`,
      projectLink: "https://www.mountainwoodhomes.com",
      projectButtonLabel: "Visit Website",
    },
  ];

  const featuredWorks4 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-4",
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
          {featuredWorks4.map((featuredWork4, index) => (
            <WorkListingItem key={index} featuredWorkDetails={featuredWork4} />
          ))}
        </div>
      </div>
    </section>
  );
}
