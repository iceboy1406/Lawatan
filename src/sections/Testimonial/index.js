import React from "react";
import SectionHeader from "../../components/SectionHeader";
import TestimonialImage from "../../assets/images/testimonial_image.png";
import TestimonialItem from "../../components/TestimonialItem";
import PhotoProfile1 from "../../assets/images/photo_profile_1.png";
import PhotoProfile2 from "../../assets/images/photo_profile_2.png";
function Testimonial() {
  return (
    <section id='testimonial'>
      <SectionHeader
        captionLabel='Proof For U'
        captionHeading='Testimonial'
        captionParagraph='We will provide testimonials from our customers.'
      />
      <div className='flex'>
        <div className='testimonial-image'>
          <img src={TestimonialImage} alt='' />
        </div>
        <TestimonialItem
          testimonial='Never could I have imagined the wonderful experiences that awaited me/us/before we began our trip.'
          rating={4}
          imageURL={PhotoProfile1}
          imageALT='Calvin Nadeak photo'
          profileName='Calvin Nadeak'
          profileJob='UI Designer'
        />

        <TestimonialItem
          testimonial='Thank you for a wonderful, fun and inspiring trip! I no longer have a favorite country, I have a favorite travel experience'
          rating={4.7}
          imageURL={PhotoProfile2}
          imageALT='Muhammad Akbar photo'
          profileName='Muhammad Akbar'
          profileJob='Officer'
          flexEnd={true}
        />
      </div>
    </section>
  );
}

export default Testimonial;
