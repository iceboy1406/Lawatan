import React, { useEffect } from "react";

function Preloader() {
  useEffect(() => {
    preloadingHandling();
  }, []);
  const preloadingHandling = () => {
    document.documentElement.scrollTo(0, 0);
  };
  return (
    <div id='preloader'>
      <div className='preloader-container'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Preloader;
