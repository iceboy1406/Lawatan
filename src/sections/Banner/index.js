import React from "react";
import { SearchIcon, FireIcon } from "../../components/icons";
function Banner() {
  return (
    <section id='banner'>
      <p className='caption-label'>
        Explore the world{" "}
        <span className='icons'>
          <FireIcon />
          <FireIcon />
        </span>
      </p>
      <h1 className='caption-heading'>
        Enjoy <span className='your-word'>your</span> <br /> dream{" "}
        <span className='pink'>vacation</span>
      </h1>
      <p className='caption-paragraph'>
        Enjoy life by traveling to your favorite places easily and cheaply, of
        course with us
      </p>
      <div className='search-bar'>
        <div className='input-group'>
          <SearchIcon />
          <input
            type='text'
            className='search-input'
            placeholder='Search a destination...'
          />
        </div>
        <button className='search-button'>Search</button>
      </div>
    </section>
  );
}

export default Banner;
