import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

// Icons
import { BsFillPersonFill } from "react-icons/bs";

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

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <nav className="navBar_container">
          <div className="navBar_left">
            <Link to="/">
              <h1>NK</h1>
            </Link>
          </div>
          <div className="navBar_center">
            <Link to="/blog">
              <h3 id="blog">Blog</h3>
            </Link>
            <Link to="/about">
              <h3 id="about">About</h3>
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
