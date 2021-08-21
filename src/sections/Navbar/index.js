import React, { useEffect, useRef, useState } from "react";
import { NavBrand, PeopleIcon } from "../../components/icons";
function Navbar() {
  const navBarRef = useRef(null);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  useEffect(() => {
    scrolledNav();
  }, [isShowSidebar]);
  useEffect(() => {
    scrollHandler();
    touchMoveHandler();
  }, []);

  const touchMoveHandler = () => {
    window.addEventListener("touchstart", (touchStartEvent) => {
      window.addEventListener("touchend", (touchEndEvent) => {
        window.addEventListener("touchmove", (touchMoveEvent) => {
          if (
            touchMoveEvent.changedTouches[0].clientX <= 50 &&
            touchMoveEvent.changedTouches[0].clientX >= 0 &&
            touchStartEvent.changedTouches[0].clientX <=
              touchEndEvent.changedTouches[0].clientX &&
            touchEndEvent.changedTouches[0].clientX -
              touchStartEvent.changedTouches[0].clientX >=
              10
          ) {
            document.querySelector("nav").classList.remove("scrolled");
            document.body.style = "height: 100vh; overflow: hidden";
            setIsShowSidebar(true);
            console.log(
              touchMoveEvent.changedTouches[0].clientX,
              touchStartEvent.changedTouches[0].clientX,
              touchEndEvent.changedTouches[0].clientX,
              touchEndEvent.changedTouches[0]
            );
          }
        });
      });
    });
  };
  const scrolledNav = () => {
    window.addEventListener("scroll", () => {
      if (
        document
          .querySelector(".nav-item")
          .className.split(" ")
          .find((x) => x === "show") !== "show"
      ) {
        if (window.scrollY >= 115) {
          navBarRef.current.classList.add("scrolled");
        } else {
          navBarRef.current.classList.remove("scrolled");
        }
      }
    });
  };
  const scrollHandler = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    for (let navLink of navLinks) {
      // Handle Link Active When scroll on Section with id == link href
      window.addEventListener("scroll", () => {
        let sectionId = navLink.getAttribute("href");
        let section = document.querySelector(`section${sectionId}`);
        if (section !== null) {
          if (
            window.scrollY >=
              section.offsetTop - navBarRef.current.offsetHeight &&
            window.scrollY <
              section.offsetTop +
                section.offsetHeight -
                navBarRef.current.offsetHeight
          ) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        }
      });
      // Handle Scroll into href
      navLink.addEventListener("click", (e) => {
        e.preventDefault();
        let sectionId = navLink.getAttribute("href");
        let section = document.querySelector(`section${sectionId}`);
        document.querySelector("nav").setAttribute("class", "");
        if (section !== null) {
          document.documentElement.scrollTo(
            0,
            section.offsetTop - navBarRef.current.offsetHeight
          );
        }
      });
    }
  };
  return (
    <>
      <nav id='navbar' ref={navBarRef}>
        <button
          className={`hamburger hamburger--spin ${
            isShowSidebar ? "is-active" : ""
          }`}
          type='button'
          onClick={() => {
            document.querySelector("nav").classList.remove("scrolled");
            document.body.style = "height: 100vh; overflow: hidden";
            setIsShowSidebar(true);
          }}>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
        <a
          href='#banner'
          className='nav-brand'
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}>
          <NavBrand />
        </a>
        <div className={`nav-item ${isShowSidebar ? "show" : ""}`}>
          <div className='link-list'>
            <a href='#banner' className='nav-link active'>
              Home
            </a>
            <a href='#introduction' className='nav-link'>
              About
            </a>
            <a href='#destination' className='nav-link'>
              Destination
            </a>
            <a href='#blog' className='nav-link'>
              Blog
            </a>
            <a href='#testimonial' className='nav-link'>
              Testimonial
            </a>
          </div>
          <div
            className='hide-sidebar'
            onClick={() => {
              setIsShowSidebar(false);
              document.querySelector("nav").classList.add("scrolled");
              document.querySelector(".hamburger").style = "";
              document.body.style = "";
            }}></div>
        </div>
        <div className='util-list'>
          <a href='#profile' className='navigation-button icon'>
            <PeopleIcon />
          </a>
          <a href='#signup' className='navigation-button'>
            Sign Up
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
