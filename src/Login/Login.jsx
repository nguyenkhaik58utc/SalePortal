import React from "react";
import facebook from "./Images/icon-facebook.png";
import { useForm } from "react-hook-form";
import twitter from "./Images/icon-twitter.png";
import google from "./Images/icon-google.png";
import imageRight from "./Images/undraw_file_sync_ot38.svg";
import "./Css/login.css";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit"
  });
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  const loginOptions = {
    username: {
      required: "Username is required",
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: 'Username must not contain numbers and special characters',
      },
      maxLength: {
        value: 25,
        message: "Username maximum 25 characters",
      }
    },
    password: {
      required : "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at lest 8 characters",
      },
    },
  };

  return (
    <div className="container">
      <div className="container-right">
        <img src={imageRight} alt="image-right" />
      </div>
      <div className="container-left">
        <div className="contents">
          <p className="title">Sign In</p>
          <p className="title-description">
            Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
            adipisicing.
          </p>
          <form onSubmit={handleSubmit(handleRegistration, handleError)}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              {...register("username", loginOptions.username)}
            />
            <small className="text-error">
              {errors?.username && errors.username.message}
            </small>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...register("password", loginOptions.password)}
            />
            <small className="text-error">
              {errors?.password && errors.password.message}
            </small>
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
    </div>
  );
}

export default Login;
