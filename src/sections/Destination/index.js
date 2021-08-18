import React, { useEffect, useState, useRef } from "react";
import DestinationListItem from "../../components/DestinationListItem";
import SectionHeader from "../../components/SectionHeader";
import DestinationImage1 from "../../assets/images/destination_image_1.png";
import DestinationImage2 from "../../assets/images/destination_image_2.png";
import DestinationImage3 from "../../assets/images/destination_image_3.png";
import DestinationImage4 from "../../assets/images/destination_image_4.png";
import axios from "axios";
function Destination() {
  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  // // Cara 1 - fetch
  // function getData() {
  //   fetch(
  //     "https://api.themovieb.org/3/movie/popular?api_key=a96a5a4e79d84e333523824a308359d2&page=100000000"
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setFetchData(result))
  //     // .catch((err) => console.log("error", err));
  // }
  // Cara 2 - fetch
  // async function getData() {
  //   const resultData = await fetch(
  //     "https://api.themoviedb.org/3/movie/550?api_key=a96a5a4e79d84e333523824a308359d2"
  //   )
  //     .then((response) => response.json())
  //     .then((result) => result);
  //   setFetchData(resultData);
  // }
  // Cara 2 - axios
  async function getData() {
    try {
      const response = await axios.get(
        "https://api.themovidb.org/3/movie/550?api_key=a96a5a4e79d84e333523824a308359d2"
      );
      setFetchData(response.data);
    } catch (error) {
      console.log("error :", error);
    }
  }

  // const [fetchData, setFetchData] = useState({});
  // useEffect(() => {
  //   getMovie();
  // }, []);
  // async function getMovie() {
  //   const resultData = await fetch(
  //     `https://api.themoviedb.org/3/movie/${550}?api_key=a96a5a4e79d84e333523824a308359d2`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => result);
  //   setFetchData(resultData);
  // }
  // const destinations = [
  //   {
  //     name: "Toba Lake",
  //     image_url: DestinationImage1,
  //     image_alt: "Toba Lake Image",
  //     price: 50,
  //     rating: 4.6,
  //   },
  //   {
  //     name: "Grand Canyon",
  //     image_url: DestinationImage2,
  //     image_alt: "Grand Canyon Image",
  //     price: 90,
  //     rating: 4.7,
  //   },
  //   {
  //     name: "Greate Wall of China",
  //     image_url: DestinationImage3,
  //     image_alt: "Greate Wall of China Image",
  //     price: 101,
  //     rating: 4.8,
  //   },
  //   {
  //     name: "Vampire Castle",
  //     image_url: DestinationImage4,
  //     image_alt: "Vampire Castle Image",
  //     price: 77,
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Toba Lake",
  //     image_url: DestinationImage1,
  //     image_alt: "Toba Lake Image",
  //     price: 50,
  //     rating: 4.6,
  //   },
  //   {
  //     name: "Grand Canyon",
  //     image_url: DestinationImage2,
  //     image_alt: "Grand Canyon Image",
  //     price: 90,
  //     rating: 4.7,
  //   },
  //   {
  //     name: "Greate Wall of China",
  //     image_url: DestinationImage3,
  //     image_alt: "Greate Wall of China Image",
  //     price: 101,
  //     rating: 4.8,
  //   },
  //   {
  //     name: "Vampire Castle",
  //     image_url: DestinationImage4,
  //     image_alt: "Vampire Castle Image",
  //     price: 77,
  //     rating: 4.5,
  //   },
  // ];
  // const [mouseMovementX, setMouseMovementX] = useState(0);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  // const destinationListRef = useRef(null);
  // useEffect(() => {
  //   setMaxScrollLeft(
  //     destinationListRef.current.scrollWidth -
  //       destinationListRef.current.offsetWidth
  //   );
  //   window.addEventListener("resize", () => {
  //     setMaxScrollLeft(
  //       destinationListRef.current.scrollWidth -
  //         destinationListRef.current.offsetWidth
  //     );
  //   });
  // }, []);
  // useEffect(() => {
  //   if (mouseMovementX < 0) {
  //     destinationListRef.current.scrollTo(mouseMovementX, 0);
  //     setMouseMovementX(0);
  //   } else {
  //     destinationListRef.current.scrollTo(mouseMovementX, 0);
  //   }
  // }, [mouseMovementX]);
  return (
    <section id='destination'>
      <h1>{fetchData?.title}</h1>
      <SectionHeader
        captionLabel='Destination For U'
        captionHeading='Top Destination'
        captionParagraph='We give you the best choice of destinations.'
      />
      <div
        // ref={destinationListRef}
        className='destination-list'
        // onMouseUpCapture={() => setIsMouseDown(false)}
        // onMouseDownCapture={() => setIsMouseDown(true)}
        // onMouseMove={(e) => {
        //   if (isMouseDown === true) {
        //     if (mouseMovementX <= maxScrollLeft) {
        //       setMouseMovementX(e.movementX * -1 + mouseMovementX);
        //     } else {
        //       setMouseMovementX(maxScrollLeft);
        //     }
        //   }
        // }}
      >
        {/* {destinations.map((destination, index) => {
          return (
            <React.Fragment key={index}>
              <DestinationListItem
                style={{ backgroundImage: `url(${destination.image_url})` }}
                destinationName={destination.name}
                price={destination.price}
                rating={destination.rating}
              />
            </React.Fragment>
          );
        })} */}
      </div>
    </section>
  );
}

export default Destination;
