import React from "react";
import facebook from "./Images/icon-facebook.png";
import twitter from "./Images/icon-twitter.png";
import google from "./Images/icon-google.png";
import imageRight from "./Images/undraw_file_sync_ot38.svg";
import "./Css/login.css";
function Login() {
  return (
    <div className="container">
      <div className="container-left col-md-6">
        <div className="contents">
          <p className="title">Sign In</p>
          <p className="title-description">
            Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
            adipisicing.
          </p>
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <div className="form-bottom">
              <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a href="/">Forgot Password</a>
            </div>
            <button type="submit"> Login</button>
          </form>
          <label>or sign in with</label>
          <div className="login-other">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={google} alt="google" />
          </div>
        </div>
      </div>
      <div className="container-right  col-md-6">
        <img src={imageRight} alt="image-right" />
      </div>
    </div>
  );
}

export default Login;
