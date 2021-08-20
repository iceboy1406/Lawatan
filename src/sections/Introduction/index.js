import React from "react";
import IntroductionSectionPhoto from "../../assets/images/Introduction_Section_Photo.webp";
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
            Founded in 2018, Lawatan is a nonprofit focused on increasing
            diversity in the world of travel through individual and community
            empowerment.
          </p>
          <button className='caption-button'>Read more</button>
        </div>
      </div>
    </section> 
  );
}

export default Introduction;
