import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile_container">
      <h1>Profile</h1>
      <img
        className="navbar_profile"
        src="https://img.icons8.com/ios-filled/50/000000/github.png"
        style={{ height: "50px", borderRadius: "10px" }}
        alt="profile"
      />
      <Link to="/projects/write">
        <button className="btn btn-primary">Add Project Entry</button>
      </Link>
      <Link to="/blog/write">
        <button className="btn btn-primary">Add Blog Entry</button>
      </Link>
    </div>
  );
};

export default Profile;
