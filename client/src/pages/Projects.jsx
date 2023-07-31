import React, { useEffect } from "react";

// Utility
import Card from "../utility/CardMaker";

const exampleProjectData = [
  {
    id: 1,
    title: "Dog Walking Website",
    summary:
      "Developed a fully functional website using Express.js and React, incorporating features such as a contact form, gallery for pet images, and a testimonial component to showcase customer feedback. Utilized CSS animations and SVG elements to create visually appealing and modern design elements, such as waves and other design flourishes.",
    image:
      "https://images.unsplash.com/photo-1530700131180-d43d9b8cc41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1134&q=80",
    github: "https://github.com/kemp3673/WagsAndWalkies",
    skills: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "I developed a frontend React application that closely resembles Netflix's website, utilizing various technologies such as React, Javascript, Firebase, YouTube API, and TMDB API. The application offers users the ability to create accounts and log in, while also incorporating user local storage to maintain validation proof. Additionally, a password reset feature was implemented for user convenience. The main site showcases multiple categories of movies lists from TMDB and provides detailed movie information upon hover, along with a video player component that displays the movie trailer upon selection. The site is further enhanced using the styled-component library, which gives it a modern and sleek appearance, and includes custom slider functionality to facilitate easy navigation of movie category cards.",
    image:
      "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    github: "https://github.com/kemp3673/NetFlix_Clone",
    skills: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Mobile Weather App",
    description:
      "Utilizing React Native and Expo, created a mobile weather application that shows current conditions, a seven day forecast and hourly reports, and weather alerts for area. The application includes a map component with cloud and precipitation overlays of current weather patterns. Lastly, the app implements Googles adMob and React Native Async Storage.",
    image:
      "https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    github: "https://github.com/kemp3673/NoBSWX",
    skills: ["React Native", "JavaScript", "Expo"],
  },
  {
    id: 4,
    title: "Software Engineering Immersive Residency",
    description:
      "As a Software Engineering Immersive Resident, I provided assistance and guidance to 308 students on JavaScript and full-stack development, offering support through the course's ticketing system and building personal relationships with individual students for additional one-on-one support. In addition to assisting students, I also contributed to the development of performance reports to track student progress and identify those who were at risk of falling behind. The tech stack I mentored included, but was not limited to, Javascript, React, JQuery, Node.js, Express.js, Webpack, Babel, AWS EC2, PostgreSQL, mySQL, MongoDB, Mongoose, HTML, CSS, Material-UI, and Bootstrap.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    github: null,
    skills: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Job Posting App",
    description:
      "As part of a large group project, I contributed to the development of a job searching and posting application designed for career changers. I was responsible for implementing integrations with the Google Calendar and Geocoding APIs, as well as utilizing PostgreSQL Geo-extensions, to provide advanced calendar and location-based features within the app. I also assisted in the development of a multi-page React application, complete with routing capabilities for different account types, ensuring a seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    github: null,
    skills: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "E-Commerce Back End",
    description:
      "As part of a collaborative effort, I participated in creating a new service application for an eCommerce website with legacy data. I was responsible for designing and developing a scalable RESTful API using Express.js and PostgreSQL, incorporating optimization techniques to enhance performance and minimize server load. This resulted in a capacity of 1,800 requests per second, providing exceptional performance for the end-users. I also ensured that the data shape returned by the API was consistent with the previous API, exceeding customer requirements and leaving room for future growth through scaling.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    github: null,
    skills: ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "NGINX"],
  },
  {
    id: 7,
    title: "Resite Contracting",
    description:
      "I was contracted as a junior software engineer to recreate an existing website for [Company Name] using their newly developed cutting-edge technology. With a focus on CSS enhancements and dynamic animations, I meticulously crafted a faithful representation of the original site, ensuring a visually appealing and user-friendly experience while showcasing the capabilities of the new technology.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    github: null,
    skills: ["HTML", "JavaScript", "CSS", "CSS Animations"],
  },
];

const Projects = () => {
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
    <div className="projects_container">
      {exampleProjectData.length > 0 ? (
        <div className="projects_inner">
          {exampleProjectData.map((project) => (
            <Card data={project} key={project.id + "card"} />
          ))}
        </div>
      ) : (
        <div className="projects_inner">
          <h1>Projects Coming Soon!</h1>
        </div>
      )}
    </div>
  );
};

export default Projects;
