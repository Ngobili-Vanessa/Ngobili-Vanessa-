
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  return (
    <div className="container">
        <img src="/20260520_214026.jpg" alt="logo" className="logoo" />
        <h2 className="create">Create Your Account</h2>
        <input className="email" placeholder="Email" type="Email" />
        <input className="password" placeholder="Password" type="Password" />
        <input className="confirm" placeholder="Confirm Password" type="Confirm Password" />
        <h5 className="words">By creating an account, you agree to our <br/>Terms of Use and Privacy Policy </h5>
        <button onClick={() => navigate("/home")} className="signup">Sign Up</button>
       <div className="lines"> <hr className="oneline" /><h6 className="or">or</h6><hr className="secondline" /> </div>
        <h4 className="account">Already have an account?<span className="link" onClick={() => navigate("/signin")}>Sign in</span> </h4>
    </div>
  );
}

export default Signup;