import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="password_reset wrapper">
      <h1>Password Reset</h1>
      <form>
        <input type="text" id="email" placeholder="Enter your email" />
        <button type="submit">Send Reset Email</button>
        {/* TODO Tie in error message */}
        <p className="error_msg">There was an error sending the reset email</p>
      </form>
      <span>
        Remember your password?
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default PasswordReset;
