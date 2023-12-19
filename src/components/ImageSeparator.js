import React from "react";

export default function ImageSeparator({ containerNameClasses, photoAttributionClasses, imageUrl, photographer, sourceUrl, imageSource }) {
  return (
    <div className={containerNameClasses}>
      <div className="inner-container">
        <div className="image-separator-bg">
          <div className={photoAttributionClasses}>
            <p>
              Photo by{" "}
              <a href={imageUrl} target="_blank" rel="noreferrer">
                {" "}
                {photographer}
              </a>{" "}
              {" "}
              <a href={sourceUrl} target="_blank" rel="noreferrer">
                {imageSource}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
