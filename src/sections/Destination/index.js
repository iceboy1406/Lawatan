import React, { useEffect, useState, useRef } from "react";
import DestinationListItem from "../../components/DestinationListItem";
import SectionHeader from "../../components/SectionHeader";
import DestinationImage1 from "../../assets/images/destination_image_1.webp";
import DestinationImage2 from "../../assets/images/destination_image_2.webp";
import DestinationImage3 from "../../assets/images/destination_image_3.webp";
import DestinationImage4 from "../../assets/images/destination_image_4.webp";
function Destination() {
  const destinations = [
    {
      name: "Toba Lake",
      image_url: DestinationImage1,
      image_alt: "Toba Lake Image",
      price: 50,
      rating: 4.6,
    },
    {
      name: "Grand Canyon",
      image_url: DestinationImage2,
      image_alt: "Grand Canyon Image",
      price: 90,
      rating: 4.7,
    },
    {
      name: "Greate Wall of China",
      image_url: DestinationImage3,
      image_alt: "Greate Wall of China Image",
      price: 101,
      rating: 4.8,
    },
    {
      name: "Vampire Castle",
      image_url: DestinationImage4,
      image_alt: "Vampire Castle Image",
      price: 77,
      rating: 4.5,
    },
    {
      name: "Toba Lake",
      image_url: DestinationImage1,
      image_alt: "Toba Lake Image",
      price: 50,
      rating: 4.6,
    },
    {
      name: "Grand Canyon",
      image_url: DestinationImage2,
      image_alt: "Grand Canyon Image",
      price: 90,
      rating: 4.7,
    },
    {
      name: "Greate Wall of China",
      image_url: DestinationImage3,
      image_alt: "Greate Wall of China Image",
      price: 101,
      rating: 4.8,
    },
    {
      name: "Vampire Castle",
      image_url: DestinationImage4,
      image_alt: "Vampire Castle Image",
      price: 77,
      rating: 4.5,
    },
  ];
  const [mouseMovementX, setMouseMovementX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const destinationListRef = useRef(null);
  useEffect(() => {
    setMaxScrollLeft(
      destinationListRef.current.scrollWidth -
        destinationListRef.current.offsetWidth
    );
    window.addEventListener("resize", () => {
      setMaxScrollLeft(
        destinationListRef.current.scrollWidth -
          destinationListRef.current.offsetWidth
      );
    });
    window.addEventListener("mouseup", () => {
      setIsMouseDown(false);
    });
  }, []);
  useEffect(() => {
    if (mouseMovementX < 0) {
      setMouseMovementX(0);
      // destinationListRef.current.scrollTo(mouseMovementX, 0);
    } else {
      destinationListRef.current.scrollTo(mouseMovementX, 0);
    }
  }, [mouseMovementX]);
  return (
    <section id='destination'>
      <SectionHeader
        captionLabel='Destination For U'
        captionHeading='Top Destination'
        captionParagraph='We give you the best choice of destinations.'
      />
      <div
        ref={destinationListRef}
        className='destination-list'
        onMouseDownCapture={() => {
          setIsMouseDown(true);
        }}
        onMouseMove={(e) => {
          if (isMouseDown === true) {
            if (mouseMovementX <= maxScrollLeft) {
              setMouseMovementX(mouseMovementX - e.movementX);
            } else if (mouseMovementX > maxScrollLeft) {
              setMouseMovementX(maxScrollLeft);
            }
          } else {
            setMouseMovementX(mouseMovementX);
          }
        }}>
        {destinations.map((destination, index) => {
          return (
            <React.Fragment key={index}>
              <DestinationListItem
                backgroundImage={destination.image_url}
                destinationName={destination.name}
                price={destination.price}
                rating={destination.rating}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Destination;
