import React from "react";
import ArrowButton from "./ArrowButton";

export default function WorkListingItem({ featuredWorkDetails }) {
  const {
    imgSrc,
    altText,
    featuredWorkContainerClasses,
    photographer,
    photographerProfileLink,
    featuredImgLink,
    featuredImgSrc,
    ProjectName,
    projectDescription,
    projectLink,
    projectButtonLabel,
  } = featuredWorkDetails;

  return (
    <article className="flex-column">
      <figure className={featuredWorkContainerClasses}>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={altText || ProjectName}
            className="select-work-img"
            loading="lazy"
          />
        )}
        {photographer && (
          <figcaption className="photo-attribution-right vertical flex-column">
            <p>
              Photo by{" "}
              <a
                href={photographerProfileLink}
                target="_blank"
                rel="noreferrer"
              >
                {photographer}
              </a>{" "}
              on{" "}
              <a href={featuredImgLink} target="_blank" rel="noreferrer">
                {featuredImgSrc}
              </a>
            </p>
          </figcaption>
        )}
      </figure>

      <div className="select-work-content flex-column grid-tablet">
        <div className="select-work-heading">
          <h3>{ProjectName}</h3>
        </div>
        <div className="select-work-description large-text underline-link">
          <p>{projectDescription}</p>
          <ArrowButton
            href={projectLink}
            target="_blank"
            buttonLabel={projectButtonLabel}
          />
        </div>
      </div>
    </article>
  );
}