import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  return (
    <div className="signin-container">
       <img src="/20260520_214026.jpg" alt="logo" className="logoo" />
        <h1 className="welcome">Welcome Back!</h1>
        <p className="continue">Sign in to coninue</p>
        <input className="email2" placeholder="Email" type="email" name="" id="" />
        <input className="password2"  placeholder="Password" type="password" />
        <button onClick={() => navigate("/home")} className="signin2">Sign In</button>
        <p className="back">Don't have an account? <span className="link2" onClick={() => navigate("/")}>Sign Up</span></p>
    </div>
  )
}

export default Signin;