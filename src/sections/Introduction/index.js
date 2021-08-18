import React from "react";
import IntroductionSectionPhoto from "../../assets/images/Introduction_Section_Photo.png";
function Introduction() {
  return (
    <section id='introduction'>
      <div className='masking'>
        <div className='image'>
          <img src={IntroductionSectionPhoto} alt='' />
        </div>
        <div className='caption'>
          <p className='caption-label'>Self Introduction</p>
          <h1 className='caption-heading'>
            What is <span className='yellow'>Lawatan?</span>
          </h1>
          <p className='caption-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            praesent massani faucibus quam pellentesque porta....
          </p>
          <button className='caption-button'>Read more</button>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
