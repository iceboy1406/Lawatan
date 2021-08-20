import React from "react";
import {
  FullFillStarIcon,
  BlankFillStarIcon,
  HalfFillStarIcon,
} from "../icons";
function TestimonialItem(props) {
  const ratingLogic = () => {
    if (props.rating === 0) {
      return (
        <>
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating < 1) {
      return (
        <>
          <HalfFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating === 1) {
      return (
        <>
          <FullFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating < 2) {
      return (
        <>
          <FullFillStarIcon />
          <HalfFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating === 2) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating < 3) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <HalfFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating === 3) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <BlankFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating < 4) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <HalfFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating === 4) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <BlankFillStarIcon />
        </>
      );
    } else if (props.rating < 5) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <HalfFillStarIcon />
        </>
      );
    } else if (props.rating === 5) {
      return (
        <>
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
          <FullFillStarIcon />
        </>
      );
    }
  };
  return (
    <div className={`testimonial-item ${props.flexEnd ? "flex-end" : ""}`}>
      <div className='testimonial-card'>
        <p className='testimonial-caption'>{props.testimonial}</p>
        <div className='rating'>{ratingLogic()}</div>
      </div>
      <div className='profile-card'>
        <img src={props.imageURL} alt={props.imageALT} />
        <div className='profile'>
          <h1 className='name'>{props.profileName}</h1>
          <p className='job'>{props.profileJob}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
