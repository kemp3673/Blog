import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

// Icons
import { BsFillPersonFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Close mobile overlay if opened
  const closeOverlay = (event) => {
    // If target is not navBar_right_mobile_menu or it's children set is open to false
    if (
      !event.target.closest(".navBar_right_mobile_menu") &&
      !event.target.closest(".hamburger")
    ) {
      setIsOpen(false);
    }
  };

  // HANDLES LOGO ICON TOGGLE
  const showDropdown = () => {
    // Toggle dropdown
    const dropdown = document.querySelector(".navBar_right_dropdown");
    dropdown.classList.toggle("active");
    // Add event listener to close dropdown when user clicks outside of dropdown
    window.onclick = function (event) {
      if (
        dropdown.classList.contains("active") &&
        !event.target.matches(".profile_icon")
      ) {
        dropdown.classList.remove("active");
      }
    };
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("click", showDropdown);
    };
  };

  useEffect(() => {
    const appContainer = document.querySelector(".app_container");
    if (isOpen) {
      // Disable ability to scroll on body
      appContainer.style.height = "100vh";
      appContainer.style.overflowY = "hidden";
    } else {
      // Enable ability to scroll on body
      appContainer.style.height = "fit-content";
      appContainer.style.overflowY = "visible";
    }
  }, [isOpen]);

  return (
    <>
      <div className="navBar">
        <nav className="navBar_container">
          <div className="navBar_left">
            <Link to="/">
              <h1>NK</h1>
            </Link>
            <div className="navBar_Contact">
              <IconContext.Provider
                value={{
                  className: "shared-class skill_icon",
                  size: 20,
                }}
              >
                <ul>
                  <li>
                    <BsPhone /> +1 (218) 770-3673
                  </li>
                  <li>
                    <a
                      href="mailto:nicholas.kempkes@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiMail /> nicholas.kempkes@gmail.com
                    </a>
                  </li>
                </ul>
              </IconContext.Provider>
            </div>
          </div>
          <div className="navBar_center">
            <Link to="/about">
              <h3 id="about">About</h3>
            </Link>
            <Link to="/blog">
              <h3 id="blog">Blog</h3>
            </Link>
            <Link to="/projects">
              <h3 id="projects">Projects</h3>
            </Link>
          </div>
          <div className="navBar_right">
            <button className="profile_icon" onClick={(e) => showDropdown()}>
              <div style={{ pointerEvents: "none" }}>
                <IconContext.Provider
                  value={{
                    className: "shared-class profile_icon",
                    size: 30,
                  }}
                >
                  <BsFillPersonFill className="profile_icon" />
                </IconContext.Provider>
              </div>
            </button>

            <div className="navBar_right_dropdown">
              <Link to="/login" className="navBar_right_dropdown_item">
                <h3 onClick={(e) => showDropdown()}>Login</h3>
              </Link>
            </div>
          </div>
          <div className="navBar_right_mobile" onClick={(e) => closeOverlay(e)}>
            <div className="hamburger" onClick={(e) => setIsOpen(!isOpen)}>
              <span className={`line1 ${isOpen ? "active" : ""}`}></span>
              <span className={`line2 ${isOpen ? "active" : ""}`}></span>
              <span className={`line3 ${isOpen ? "active" : ""}`}></span>
            </div>
            <div
              className={`navBar_right_mobile_overlay ${
                isOpen ? "active" : ""
              }`}
              // onClick={(e) => setIsOpen(false)}
            >
              <div
                className={`navBar_right_mobile_menu ${isOpen ? "active" : ""}`}
              >
                <Link to="/about">
                  <h3 id="about" onClick={(e) => setIsOpen(false)}>
                    About
                  </h3>
                </Link>
                <Link to="/blog">
                  <h3 id="blog" onClick={(e) => setIsOpen(false)}>
                    Blog
                  </h3>
                </Link>
                <Link to="/projects">
                  <h3 id="projects" onClick={(e) => setIsOpen(false)}>
                    Projects
                  </h3>
                </Link>
                <Link to="/login">
                  <h3 onClick={(e) => setIsOpen(false)}>Login</h3>
                </Link>
                <div className="mobile_contact">
                  <IconContext.Provider
                    value={{
                      className: "shared-class skill_icon",
                      size: 20,
                    }}
                  >
                    <ul>
                      <li>
                        <BsPhone /> +1 (218) 770-3673
                      </li>
                      <li>
                        <FiMail /> nicholas.kempkes@gmail.com
                      </li>
                    </ul>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
