// Components

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
      <p>
        I am a recent bootcamp graduate with a Bachelor's degree in Project
        Management and currently pursuing a second Bachelor's degree in
        Information Technology with a concentration in programming. I have a
        strong foundation in advanced software engineering and proficiency in
        technologies such as JavaScript, Node.js, React, SQL, and NoSQL
        databases. Additionally, I have gained experience in mobile app
        development using React Native, allowing me to build cross-platform
        applications.
      </p>
    </div>
  );
};

export default Profile;
