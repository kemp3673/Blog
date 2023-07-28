import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuMousePointerClick } from "react-icons/lu";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div id={data.id} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
      <Link to={`/projects/${data.id}`} className="project_link">
        <div className="project">
          <div className="project_upper">
            <img src={data.image} alt={data.title} />
            <div className="image_cover">
              {isHovered ? (
                <>
                  <h1 className="project_title_alt">Check it out</h1>
                  <IconContext.Provider
                    value={{
                      className: "shared-class profile_icon",
                      size: 40,
                    }}
                  >
                    <LuMousePointerClick className="project_icon" />
                  </IconContext.Provider>
                </>
              ) : (
                <h1 className="project_title">{data.title}</h1>
              )}
            </div>
          </div>
          <div className="project_lower">
            <ul>
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
