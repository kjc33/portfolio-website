import React from "react";
import ArrowButton from "./ArrowButton";

export default function WorkListingItem({ featuredWorkDetails }) {
  const {
    imgSrc,
    srcSet,
    sizes,
    width,
    height,
    loading = "lazy",
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
            srcSet={srcSet}
            sizes={sizes}
            width={width}
            height={height}
            loading={loading}
            alt={altText || (ProjectName ? `Preview of ${ProjectName}` : "")}
            className="select-work-img"
          />
        )}
        {photographer && (
          <figcaption className="photo-attribution-right vertical flex-column">
            <p>
              Photo by{" "}
              <a
                href={photographerProfileLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Photo by ${photographer} (opens in a new tab)`}
              >
                {photographer}
              </a>{" "}
              on{" "}
              <a 
                href={featuredImgLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${featuredImgSrc} photo profile (opens in a new tab)`}
              >
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