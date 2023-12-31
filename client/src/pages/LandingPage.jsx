import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import FileDownload from "js-file-download";
import axios from "axios";
import CookieConsent from "react-cookie-consent";

// Image
import BeardedDev from "../assets/images/bearded_dev.jpg";

const getResume = async () => {
  return await axios
    .get("/resume", {
      responseType: "blob",
    })
    .then((res) => {
      FileDownload(res.data, "Nick's Resume.pdf");
    })
    .catch((err) => {
      console.log(err);
    });
};

const LandingPage = () => {
  return (
    <>
      <CookieConsent location={"bottom"} expires={150}>
        We use cookies solely to track your authorization status on our website.
        By continuing to use the site, you consent to the use of these cookies
        for this purpose.
      </CookieConsent>
      <div className="landing_page_container">
        <div className="landing_page_inner">
          <div className="landing_page_left">
            <h1>Welcome to Nick's Coding Corner!</h1>
            <h3>
              Hello there! I'm Nick, a passionate junior software engineer
              excited about crafting innovative solutions through code. This is
              my humble space on the internet where I showcase my projects and
              share my love for all things tech. Take a peek at my work and join
              me on this exciting journey of continuous learning and growth in
              the world of software development. Happy coding!
            </h3>
            <div className="lp_buttons_wrapper">
              <button className="lp_button_1" onClick={getResume}>
                Download Resume
              </button>
              <Link to="/blog">
                <button className="lp_button_2">
                  Learn More&nbsp;
                  <FaArrowRight />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="landing_page_right">
            <img src={BeardedDev} alt="Bearded Dev" className="vector_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
