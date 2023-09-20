import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// Handle toggling password visibility
const togglePasswordVisibility = () => {
  const password = document.getElementById("current-password");
  const showPasswordIcon = document.querySelector(".show_password_icon");
  const hidePasswordIcon = document.querySelector(".hide_password_icon");
  if (password.type === "password") {
    password.type = "text";
    showPasswordIcon.style.display = "block";
    hidePasswordIcon.style.display = "none";
  } else {
    password.type = "password";
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "block";
  }
};

const Login = () => {
  return (
    <div className="wrapper auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          id="email"
          placeholder="Email"
          autocomplete="true"
          aria-label="login email"
        />
        <div className="password">
          <input
            type="password"
            id="current-password"
            placeholder="Password"
            autocomplete="current-password"
            aria-label="login password"
          />
          <IconContext.Provider
            value={{
              className: "shared-class profile_icon",
              size: 20,
            }}
          >
            <AiFillEye
              className="hide_password_icon"
              onClick={() => togglePasswordVisibility()}
            />
            <AiFillEyeInvisible
              className="show_password_icon"
              onClick={() => togglePasswordVisibility()}
            />
          </IconContext.Provider>
        </div>
        <Link to="/profile/kempkes">
          <button type="submit">Login</button>
        </Link>
      </form>
      {/* TODO Tie in error message */}
      <p className="error_msg">Something went wrong. Try again.</p>
      <span>
        Forgot your password? <Link to="/reset-password">Reset Password</Link>
      </span>
    </div>
  );
};

export default Login;
