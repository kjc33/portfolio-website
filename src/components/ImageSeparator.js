import React from "react";

export default function ImageSeparator({
  containerNameClasses,    // CSS classes for outer container
  photoAttributionClasses, // CSS classes for attribution alignment
  imageSrc,                // Fallback / default image path
  srcSet,                  // Optional responsive image sources
  sizes,                   // Optional responsive sizes layout guidance
  width,                   // Intrinsic width
  height,                  // Intrinsic height
  loading = "lazy",        // Native lazy loading (defaulting to lazy)
  altText = "",            // Accessible image description
  imageUrl,                // Photographer's profile URL
  photographer,            // Name of the photographer
  conCat,                  // Connector text (e.g., "on", "via")
  sourceUrl,               // Stock photo platform URL
  imageSource              // Stock photo platform display name
}) {
  return (
    <div className={containerNameClasses}>
      <div className="inner-container">
        <figure className="image-separator-bg">
          <img
            src={imageSrc}
            srcSet={srcSet}
            sizes={sizes}
            width={width}
            height={height}
            loading={loading}
            alt={altText || (photographer ? `Photo by ${photographer}` : "")}
            className="image-separator-img"
          />
          {(photographer || imageSource) && (
            <figcaption className={photoAttributionClasses}>
              <p>
                {photographer && (
                  <>
                    Photo by{" "}
                    <a 
                      href={imageUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Photo by ${photographer} (opens in a new tab)`}
                    >
                      {photographer}
                    </a>
                  </>
                )}
                {sourceUrl && (
                  <>
                    {" "}{conCat}{" "}
                    <a 
                      href={sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${imageSource} source profile (opens in a new tab)`}
                    >
                      {imageSource}
                    </a>
                  </>
                )}
              </p>
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}