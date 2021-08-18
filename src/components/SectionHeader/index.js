import React from "react";

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
const FireIcon = () => {
  return (
    <svg
      width='19'
      height='26'
      viewBox='0 0 19 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.81048 22.9553C2.65216 21.6391 1.4939 20.2702 0.756771 18.638C0.0196906 16.9006 -0.190925 14.8999 0.17764 13.0045C0.546205 11.1091 1.38857 9.31902 2.59955 7.79219C2.49426 9.10845 2.96811 10.4773 3.86314 11.4777C3.33663 8.9505 4.17904 6.2127 5.86382 4.21202C7.5486 2.21134 9.86522 0.895031 12.2871 0C11.0762 1.2636 10.9182 3.26427 11.392 4.9491C11.8659 6.63388 12.8663 8.10809 13.7613 9.63492C14.6563 11.1617 15.4987 12.7412 15.5514 14.4787C16.0253 13.5837 16.5518 12.6886 16.8677 11.6883C17.1836 10.6879 17.3415 9.63492 17.0783 8.63456C18.026 9.79287 18.5525 10.9511 18.8157 12.4253C19.079 13.8996 19.0263 15.4264 18.8684 16.9006C18.6578 18.5328 18.2366 20.2175 17.3416 21.5864C16.2886 23.2186 14.6038 24.3768 12.761 25.0086C9.49666 25.5878 6.285 25.114 3.81048 22.9553Z'
        fill='#FF658A'
      />
      <path
        d='M7.8119 24.9034C12.1292 26.5882 16.3938 21.4811 14.0245 17.5324C14.0245 17.4797 13.9719 17.4797 13.9719 17.4271C14.1825 19.5857 13.656 21.1652 12.6556 22.0603C13.1821 20.7967 12.8136 19.3225 12.1818 18.0589C11.55 16.848 10.6549 15.7423 9.97047 14.584C9.28601 13.3731 8.75954 12.0042 9.07544 10.6353C7.81185 11.583 6.91681 13.0045 6.54825 14.5314C6.17968 16.0582 6.3903 17.743 7.07476 19.1646C6.28502 18.5854 5.70588 17.6377 5.65322 16.6374C4.8108 17.6377 4.28434 18.9539 4.33695 20.2702C4.337 22.3235 5.96912 24.1663 7.8119 24.9034Z'
        fill='#FFF61A'
      />
    </svg>
  );
};
export default SectionHeader;
