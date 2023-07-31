import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_inner">
        <h1>Profile</h1>
        <div className="profile_image">
          <img
            className="navbar_profile"
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="profile"
          />
          <input type="file" accept="image/*" />
          <button>Update Profile Picture</button>
        </div>
        <div className="profile_info"></div>
        <div className="account_posts">
          <Link to="/projects/write">
            <button className="btn btn-primary">Add Project Entry</button>
          </Link>
          <Link to="/blog/write">
            <button className="btn btn-primary">Add Blog Entry</button>
          </Link>
          <input type="file" accept=".pdf, .doc, .docx" />
          <button>Update Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
