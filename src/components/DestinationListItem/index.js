import React from "react";
import {
  FullFillStarIcon,
  HalfFillStarIcon,
  BlankFillStarIcon,
  ArrowIcon,
} from "../icons";
function DestinationListItem(props) {
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
    <div className='destination-list-item'>
      <div className='card'>
        <div
          className='image'
          style={{ backgroundImage: `url(${props.backgroundImage})` }}></div>
        <div className='flex'>
          <div className='information'>
            <p className='destination-name'>{props.destinationName}</p>
            <div className='rating'>{ratingLogic()}</div>
            <p className='price'>${props.price?.toFixed(2)}</p>
          </div>
          <a href={props.moreInfoHref} className='arrow-container'>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DestinationListItem;
