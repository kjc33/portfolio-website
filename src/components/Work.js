import React from "react";

import WorkListingItem from "./WorkListingItem";

export default function Work() {
  const featuredWorks1 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-1",
      photographer: "MSR",
      photographerProfileLink: "https://unsplash.com/@mvds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/man-in-white-shirt-and-black-pants-carrying-black-and-yellow-skateboard-on-white-sand-during-fhQ816rFmN0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "The Chill Foundation",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, massa conubia turpis arcu at gravida cum est, nisl primis blandit accumsan ligula convallis. Per vitae pulvinar pellentesque taciti tellus egestas litora duis ut sociosqu morbi, integer feugiat metus platea ultrices id praesent sem fringilla. Quis potenti euismod aliquam porttitor, nisi fames.",
      projectLink: "https://www.chill.org",
      projectButtonLabel: "Visit Website",
    },
  ];

  const featuredWorks2 = [
    {
      featuredWorkContainerClasses: "select-work-featured-bg project-2",
      photographer: "Flo Pappert",
      photographerProfileLink: "https://unsplash.com/@flopt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgLink: "https://unsplash.com/photos/black-suv-park-beside-white-and-brown-house-during-daytime-kspRwqFxOms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      featuredImgSrc: "Unsplash",
      ProjectName: "Mountainwood Homes",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, massa conubia turpis arcu at gravida cum est, nisl primis blandit accumsan ligula convallis. Per vitae pulvinar pellentesque taciti tellus egestas litora duis ut sociosqu morbi, integer feugiat metus platea ultrices id praesent sem fringilla. Quis potenti euismod aliquam porttitor, nisi fames.",
      projectLink: "https://www.mountainwoodhomes.com",
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
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, massa conubia turpis arcu at gravida cum est, nisl primis blandit accumsan ligula convallis. Per vitae pulvinar pellentesque taciti tellus egestas litora duis ut sociosqu morbi, integer feugiat metus platea ultrices id praesent sem fringilla. Quis potenti euismod aliquam porttitor, nisi fames.",
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
