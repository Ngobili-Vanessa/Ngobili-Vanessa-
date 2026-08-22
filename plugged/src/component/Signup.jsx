import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="container">

      <img
        src="/20260520_214026.jpg"
        alt="logo"
        className="logoo"
      />

      <h2 className="create">
        Create Your Account
      </h2>

      <form onSubmit={handleSignup}>

        <input
          className="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <div className="password-wrapper">

          <input
            className="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="button"
            className="password-eye"
            onClick={() =>
              setShowPassword((current) => !current)
            }
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>

        </div>

        <div className="password-wrapper">

          <input
            className="confirm"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
          />

          <button
            type="button"
            className="password-eye"
            onClick={() =>
              setShowConfirmPassword((current) => !current)
            }
          >
            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </button>

        </div>

        <h5 className="words">
          By creating an account, you agree to our
          <br />
          Terms of Use and Privacy Policy
        </h5>

        <button
          type="submit"
          className="signup"
        >
          Sign Up
        </button>

      </form>

      <div className="lines">

        <hr className="oneline" />

        <h6 className="or">
          or
        </h6>

        <hr className="secondline" />

      </div>

      <h4 className="account">
        Already have an account?

        <span
          className="link"
          onClick={() => navigate("/signin")}
        >
          Sign in
        </span>
      </h4>

    </div>
  );
}

export default Signup;

