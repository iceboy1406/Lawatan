import React from "react";
import { FireIcon } from "../icons";
function SectionHeader(props) {
  return (
    <div className='section-header'>
      <div className='caption'>
        <p className='caption-label'>
          {props.captionLabel}{" "}
          <span className='icons'>
            <FireIcon />
            <FireIcon />
          </span>
        </p>
        <h1 className='caption-heading'>{props.captionHeading}</h1>
        <p className='caption-paragraph'>{props.captionParagraph}</p>
      </div>
      <a href={props.seeMoreHref} className='see-more-button'>
        See More
      </a>
    </div>
  );
}

export default SectionHeader;
