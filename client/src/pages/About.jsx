import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import {
  PiComputerTowerThin,
  PiDatabaseThin,
  PiBrowsersThin,
} from "react-icons/pi";
import { BsLinkedin, BsGithub, BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const About = () => {
  // Set navbarlink to active on component mount
  useEffect(() => {
    const aboutLink = document.getElementById("about");
    aboutLink.classList.add("active");
    // Remove active class on component unmount
    return () => {
      aboutLink.classList.remove("active");
    };
  }, []);

  return (
    <div className="about_container ">
      <div className="about_inner">
        <div className="about_me">
          <h1>About Me</h1>
          <p>
            Hey there! I'm a recent bootcamp graduate with a Bachelor's degree
            in Project Management, currently pursuing a second Bachelor's degree
            in Information Technology with a specialization in programming.
          </p>
          <p>
            My expertise lies in advanced software engineering, with a strong
            command of technologies such as JavaScript, Node.js, React, SQL, and
            NoSQL databases. I've also dabbled in mobile app development using
            React Native, enabling me to create versatile cross-platform
            applications.
          </p>
          <p>
            Passionate about solving real-world problems through technology, I'm
            eager to apply my skills and knowledge to exciting projects. Feel
            free to explore my portfolio, where you'll find examples of how I've
            used these skills to build innovative solutions. Let's connect and
            collaborate on the next big thing!
          </p>
        </div>
        <div className="about_contact">
          {/* TODO Link Contact Links */}
          <h1>Contact</h1>
          <IconContext.Provider
            value={{
              className: "shared-class skill_icon",
              size: 30,
            }}
          >
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicholas-kempkes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kemp3673"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="tel:1-218-770-3673">
                  <BsPhone />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nicholas.kempkes@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </div>

        <div className="about_skills">
          <h1>Skills</h1>
          <div className="skills">
            <div className="skill">
              <div className="skill_title">
                <IconContext.Provider
                  value={{
                    className: "shared-class skill_icon",
                    size: 40,
                  }}
                >
                  <PiBrowsersThin />
                </IconContext.Provider>
              </div>
              <h2>Front End</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className="skill">
              <div className="skill_title">
                <IconContext.Provider
                  value={{
                    className: "shared-class skill_icon",
                    size: 45,
                  }}
                >
                  <PiDatabaseThin />
                </IconContext.Provider>
              </div>
              <h2>Back End</h2>
              <ul>
                <li>Java</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>REST</li>
                <li>JSON</li>
                <li>JWT</li>
              </ul>
            </div>
            <div className="skill">
              <div className="skill_title">
                <IconContext.Provider
                  value={{
                    className: "shared-class skill_icon",
                    size: 50,
                  }}
                >
                  <PiComputerTowerThin />
                </IconContext.Provider>
              </div>
              <h2>Other</h2>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>AWS</li>
                <li>TDD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
