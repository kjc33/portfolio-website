import React from "react";

export default function ImageSeparator({
  containerNameClasses,    // CSS classes for outer container (e.g., "image-separator-right")
  photoAttributionClasses, // CSS classes for attribution alignment (e.g., "photo-attribution-right vertical")
  imageSrc,                // Inline image path/URL (e.g., "/images/photo.jpg")
  altText = "",            // Accessible image description
  imageUrl,                // Photographer's profile or photo URL
  photographer,            // Name of the photographer
  conCat,                  // Connector text (e.g., "on", "via")
  sourceUrl,               // Stock photo platform URL
  imageSource              // Stock photo platform display name (e.g., "Unsplash")
}) {
  return (
    <div className={containerNameClasses}>
      <div className="inner-container">
        <div className="image-separator-bg">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={altText || `Photo by ${photographer}`}
              className="image-separator-img"
            />
          )}
          <div className={photoAttributionClasses}>
            <p>
              Photo by{" "}
              <a href={imageUrl} target="_blank" rel="noreferrer">
                {photographer}
              </a>
              {sourceUrl && (
                <>
                  {" "}{conCat}{" "}
                  <a href={sourceUrl} target="_blank" rel="noreferrer">
                    {imageSource}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}