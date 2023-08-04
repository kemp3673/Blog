import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [resumeMessage, setResumeMessage] = useState(null);

  const user_id = 1; // TODO: Temporary until we have login working, then will get user_id from session

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `/api/auth/user/${user_id}` // TODO change to /api/auth/user/${user_id}
        );
        setUser(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleSelectFile = (e) => {
    setResumeMessage(null);
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdateResume = async (e) => {
    setResumeMessage(null);
    e.preventDefault();
    // If no file selected, return
    if (!selectedFile) {
      setResumeMessage("No file selected");
      return;
    } else if (selectedFile.type !== "application/pdf") {
      // If file type is not pdf, return
      setResumeMessage("File must be a pdf");
      return;
    } else if (selectedFile.size > 1000000) {
      // If file size is greater than 1MB, return
      setResumeMessage("File size must be less than 1MB");
      return;
    }

    // Create form data object
    const formData = new FormData();
    formData.append("resume", selectedFile);
    // Send form data to server
    const { data } = await axios.post(`/api/auth/resume`, formData); // TODO change to /api/auth/user/${user_id}
    setResumeMessage(data.message);
  };

  return (
    <div className="profile_container">
      {user ? (
        <div className="profile_inner">
          <h1>Profile</h1>
          <div className="profile_image">
            <img className="navbar_profile" src={user.img} alt="profile" />
            <input type="file" accept="image/*" />
            <button>Update Profile Picture</button>
          </div>
          <div className="profile_info">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
          <div className="account_posts">
            <Link to="/projects/write">
              <button className="btn btn-primary">Add Project Entry</button>
            </Link>
            <Link to="/blog/write">
              <button className="btn btn-primary">Add Blog Entry</button>
            </Link>
            <form onSubmit={handleUpdateResume}>
              <input type="file" accept=".pdf" onChange={handleSelectFile} />
              <button type="submit">Update Resume</button>
            </form>
            {resumeMessage ? <span>{resumeMessage}</span> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
