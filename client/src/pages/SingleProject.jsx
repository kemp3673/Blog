import React, { useEffect } from "react";

const sampleProject = {
  id: 2,
  title: "Netflix Clone",
  description:
    "I developed a frontend React application that closely resembles Netflix's website, utilizing various technologies such as React, Javascript, Firebase, YouTube API, and TMDB API. The application offers users the ability to create accounts and log in, while also incorporating user local storage to maintain validation proof. Additionally, a password reset feature was implemented for user convenience. The main site showcases multiple categories of movies lists from TMDB and provides detailed movie information upon hover, along with a video player component that displays the movie trailer upon selection. The site is further enhanced using the styled-component library, which gives it a modern and sleek appearance, and includes custom slider functionality to facilitate easy navigation of movie category cards.",
  image:
    "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
  github: "https://github.com/kemp3673/NetFlix_Clone",
  screenshots: [
    "https://user-images.githubusercontent.com/102747919/225429411-2644f163-2e19-4675-a8be-f61356544a28.png",
    "https://user-images.githubusercontent.com/102747919/225429462-d20d4976-d14d-4e8f-9366-411afa7891dc.png",
    "https://user-images.githubusercontent.com/102747919/225429512-0248558c-d42a-440b-b124-e9594d437328.png",
  ],
  skills: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
};

const SingleProject = () => {
  // Set navbarlink to active on component mount
  useEffect(() => {
    const projectLink = document.getElementById("projects");
    projectLink.classList.add("active");
    // Remove active class on component unmount
    return () => {
      projectLink.classList.remove("active");
    };
  }, []);

  return (
    <div className="single_project_container">
      <div className="project_inner">
        <div className="project_info">
          <h1>{sampleProject.title}</h1>
          <p>{sampleProject.description}</p>
          {sampleProject.github ? (
            <button>
              <a href={sampleProject.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </button>
          ) : null}
        </div>
        <div className="project_screenshots">
          {sampleProject.screenshots ? (
            <>
              <h2>Screenshots of Project</h2>
              <div className="project_screenshot">
                {sampleProject.screenshots.map((screenshot, index) => (
                  <img
                    src={screenshot}
                    alt={sampleProject.title}
                    key={"screenshot" + index}
                    style={{ width: "300px", margin: "10px" }}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
