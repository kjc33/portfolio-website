import React from "react";

import ArrowButton from "./ArrowButton";

export default function WorkListingItem({ featuredWorkDetails }) {
  const { featuredWorkContainerClasses, photographer, photographerProfileLink, featuredImgLink, featuredImgSrc, ProjectName, projectDescription, projectLink, projectButtonLabel } = featuredWorkDetails;

  return (
    <article className="flex-column">
      <div className={featuredWorkContainerClasses}>
        <div className="photo-attribution-right vertical flex-column">
          <p>
            Photo by{" "}
            <a href={photographerProfileLink} target="_blank" rel="noreferrer">
              {photographer}
            </a>{" "}
            on{" "}
            <a href={featuredImgLink} target="_blank" rel="noreferrer">
              {featuredImgSrc}
            </a>
          </p>
        </div>
      </div>
      <div className="select-work-content flex-column grid-tablet">
        <div className="select-work-heading">
          <h3>{ProjectName}</h3>
        </div>
        <div className="select-work-description large-text underline-link">
          <p>{projectDescription}</p>
          <ArrowButton href={projectLink} target="_blank" buttonLabel={projectButtonLabel} />
        </div>
      </div>
    </article>
  );
}
