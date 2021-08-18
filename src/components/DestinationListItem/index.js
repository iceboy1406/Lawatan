import React from "react";

function DestinationListItem(props) {
  const ratingLogic = () => {
    if (props.rating === 0) {
      return (
        <>
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating < 1) {
      return (
        <>
          <StarFillHalfIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating === 1) {
      return (
        <>
          <StarFillIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating < 2) {
      return (
        <>
          <StarFillIcon />
          <StarFillHalfIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating === 2) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarBlankIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating < 3) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarFillHalfIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating === 3) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarBlankIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating < 4) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarFillHalfIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating === 4) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarBlankIcon />
        </>
      );
    } else if (props.rating < 5) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarFillHalfIcon />
        </>
      );
    } else if (props.rating === 5) {
      return (
        <>
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
          <StarFillIcon />
        </>
      );
    }
  };
  return (
    <div className='destination-list-item'>
      <div className='card'>
        <div className='image' style={props.style}></div>
        <div className='flex'>
          <div className='information'>
            <p className='destination-name'>{props.destinationName}</p>
            <div className='rating'>{ratingLogic()}</div>
            <p className='price'>${props.price?.toFixed(2)}</p>
          </div>
          <a href={props.moreInfoHref} className='arrow-container'>
            <RightArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
const RightArrowIcon = () => {
  return (
    <svg
      width='24'
      height='20'
      viewBox='0 0 24 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5862 0.586306C12.9613 0.210895 13.4699 0 14.0002 0C14.5306 0 15.0392 0.210895 15.4143 0.586306L23.4144 8.59632C23.7894 8.97184 24 9.4811 24 10.0121C24 10.5431 23.7894 11.0523 23.4144 11.4279L15.4143 19.4379C15.0371 19.8026 14.5318 20.0045 14.0074 19.9999C13.483 19.9954 12.9814 19.7848 12.6106 19.4135C12.2398 19.0422 12.0294 18.5399 12.0249 18.0149C12.0203 17.4898 12.2219 16.984 12.5862 16.6063L17.1723 12.0146H2.00004C1.46959 12.0146 0.960877 11.8036 0.585797 11.4281C0.210718 11.0525 0 10.5432 0 10.0121C0 9.48099 0.210718 8.97165 0.585797 8.59611C0.960877 8.22056 1.46959 8.00959 2.00004 8.00959H17.1723L12.5862 3.41785C12.2113 3.04232 12.0006 2.53307 12.0006 2.00208C12.0006 1.47108 12.2113 0.961831 12.5862 0.586306Z'
        fill='#998CAC'
      />
    </svg>
  );
};
const StarFillIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path
          d='M4.51503 19.3038C4.03253 19.5513 3.48503 19.1175 3.58253 18.5638L4.62003 12.6513L0.216276 8.45627C-0.194974 8.06377 0.0187758 7.34627 0.570026 7.26877L6.69253 6.39877L9.42253 0.990015C9.66878 0.502515 10.335 0.502515 10.5813 0.990015L13.3113 6.39877L19.4338 7.26877C19.985 7.34627 20.1988 8.06377 19.7863 8.45627L15.3838 12.6513L16.4213 18.5638C16.5188 19.1175 15.9713 19.5513 15.4888 19.3038L10 16.4838L4.51378 19.3038H4.51503Z'
          fill='#FFDC26'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
const StarFillHalfIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path
          d='M6.69249 6.39875L9.42249 0.99C9.47492 0.881192 9.55684 0.789292 9.65894 0.724762C9.76104 0.660232 9.87921 0.625667 9.99999 0.625C10.2287 0.625 10.4575 0.74625 10.5812 0.99L13.3112 6.39875L19.4337 7.26875C19.5863 7.29274 19.726 7.36864 19.8292 7.48363C19.9323 7.59863 19.9927 7.74569 20 7.9C20.0087 8.00273 19.9941 8.10611 19.9573 8.20242C19.9205 8.29874 19.8625 8.3855 19.7875 8.45625L15.3837 12.6513L16.4212 18.5637C16.5187 19.1175 15.9712 19.5512 15.4887 19.3037L9.99999 16.4838L4.51374 19.3037C4.45635 19.3335 4.39484 19.3546 4.33124 19.3663C3.90374 19.4413 3.49624 19.0487 3.58124 18.5637L4.61874 12.6513L0.216234 8.45625C0.147791 8.3915 0.0933887 8.31337 0.0564034 8.22671C0.0194182 8.14005 0.000639957 8.04672 0.00123439 7.9525C0.0012994 7.8193 0.0380611 7.68868 0.107484 7.575C0.156733 7.49259 0.223858 7.42228 0.303907 7.36928C0.383956 7.31627 0.474885 7.28192 0.569984 7.26875L6.69249 6.39875V6.39875ZM9.99999 15.0338C10.1009 15.0333 10.2004 15.0573 10.29 15.1038L14.8975 17.4713L14.03 12.525C14.0095 12.4112 14.0173 12.2942 14.0526 12.1841C14.0879 12.0741 14.1497 11.9744 14.2325 11.8938L17.8662 8.43125L12.8012 7.71125C12.6964 7.69541 12.5969 7.65439 12.5113 7.59169C12.4258 7.52899 12.3567 7.44649 12.31 7.35125L10.0012 2.77875L9.99999 2.7825V15.0325V15.0338Z'
          fill='#FFDC26'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
const StarBlankIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path
          d='M3.58253 18.5625C3.48503 19.1175 4.03253 19.5513 4.51503 19.3038L10.0025 16.4838L15.4888 19.3038C15.9713 19.5513 16.5188 19.1175 16.4213 18.5638L15.3838 12.6513L19.7863 8.45628C20.1988 8.06378 19.9863 7.34628 19.4338 7.26878L13.3113 6.39878L10.5813 0.990026C10.5293 0.880387 10.4472 0.787755 10.3447 0.722891C10.2421 0.658028 10.1232 0.623596 10.0019 0.623596C9.88055 0.623596 9.7617 0.658028 9.65914 0.722891C9.55658 0.787755 9.47453 0.880387 9.42253 0.990026L6.69253 6.40003L0.570026 7.27003C0.0187758 7.34753 -0.194974 8.06503 0.216276 8.45753L4.62003 12.6525L3.58253 18.565V18.5625ZM9.71378 15.1038L5.10628 17.4713L5.97378 12.525C5.9941 12.4112 5.98615 12.2941 5.95062 12.184C5.91509 12.0739 5.85308 11.9743 5.77003 11.8938L2.13753 8.43128L7.20253 7.71128C7.30741 7.69544 7.40689 7.65441 7.49244 7.59172C7.578 7.52902 7.64708 7.44652 7.69378 7.35128L10 2.77878L12.3088 7.35128C12.3555 7.44652 12.4246 7.52902 12.5101 7.59172C12.5957 7.65441 12.6951 7.69544 12.8 7.71128L17.865 8.43003L14.2325 11.8925C14.1493 11.9731 14.0871 12.073 14.0516 12.1833C14.0161 12.2936 14.0082 12.411 14.0288 12.525L14.8963 17.4713L10.2888 15.1038C10.1997 15.0578 10.1009 15.0339 10.0007 15.0339C9.90041 15.0339 9.80162 15.0578 9.71253 15.1038H9.71378Z'
          fill='#FFDC26'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DestinationListItem;
