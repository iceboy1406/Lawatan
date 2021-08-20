import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  NavBrandLight,
  TelegramIcon,
  TwitterIcon,
} from "../../components/icons";

function Footer() {
  return (
    <footer>
      <div className='about'>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}>
          <NavBrandLight />
        </a>
        <p className='description'>
          Enjoy life by traveling to your favorite places easily and cheaply, of
          course with us
        </p>
      </div>
      <div className='link-group'>
        <div className='link-list'>
          <h1>About</h1>
          <a>About</a>
          <a>Feature</a>
          <a>News</a>
        </div>
        <div className='link-list'>
          <h1>Support</h1>
          <a>Account</a>
          <a>Contact</a>
          <a>Privacy</a>
        </div>
      </div>
      <div className='media-social'>
        <h1>Follow Us</h1>
        <a target='blank' href='http://facebook.com'>
          <FacebookIcon />
        </a>
        <a target='blank' href='http://instagram.com'>
          <InstagramIcon />
        </a>
        <a target='blank' href='http://www.twitter.com'>
          <TwitterIcon />
        </a>
        <a target='blank' href='http://www.telegram.com'>
          <TelegramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
