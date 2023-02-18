import React, { useState, useEffect } from "react";
import "./Register.css";
import { Button, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginGirl from "../../assets/images/girlLogin.png";
import axios from "../../components/AxiosInstance/AxiosInstance";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const hideShowPassword = (e) => {
    if (passwordType === "password") {
      setPasswordType("text");
      setIsPasswordShow(true);
    } else {
      setPasswordType("password");
      setIsPasswordShow(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      navigate("/chat");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/user/register`, user)
      .then((response) => {
//         console.log(response);
        alert("Registered Succesfully");
        navigate("/Login");
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
//           console.log(error);
        }
      });
  };

  return (
    <div className="bgRegister">
      <Container>
        <div className="registerMain">
          <div className="registerWelcome">
            <h1 className="loginTitle">Welcome Back !</h1>
            <p className="loginContinue">Sign in to continue to Buzz Chat.</p>
          </div>
          <div className="mainForm">
            <form
              action="#"
              className="registerForm"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mainUser">
                <label htmlFor="username" className="formLabel">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mainEmail">
                <label htmlFor="email" className="formLabel">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={handleChange}
                  maxLength={50}
                  required
                />
              </div>
              <div className="mainPassword">
                <div className="forget">
                  <label htmlFor="password" className="formLabel mb-0">
                    Password
                  </label>
                </div>
                <div className="mainEye">
                  <input
                    type={passwordType}
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                  {isPasswordShow ? (
                    <BsFillEyeSlashFill
                      className="eye"
                      role={Button}
                      onClick={hideShowPassword}
                    />
                  ) : (
                    <BsFillEyeFill
                      className="eye"
                      role={Button}
                      onClick={hideShowPassword}
                    />
                  )}
                </div>
              </div>
              <div className="termsCondition">
                By registering you agree to the Buzz Chat <br />
                <Link className="termsLink">Terms of Use</Link>
              </div>
              <div className="loginSubmit">
                <button type="submit" className="submitbtn">
                  Register
                </button>
              </div>
              <div className="social">
                <div className="signIn">
                  <h6 className="signTitle">Sign up with</h6>
                </div>
              </div>
              <div className="socialRegister">
                <button type="button" title="Facebook" className="socialBtn">
                  <FaFacebook color="rgba(86,11,173,1)" />
                </button>
                <button type="button" title="Twitter" className="socialBtn">
                  <FaTwitter color="rgba(29,161,242,1)" />
                </button>
                <button type="button" title="Google" className="socialBtn">
                  <FcGoogle />
                </button>
              </div>
              <div className="account">
                <p className="dont">
                  Already have an account ?
                  <Link to="/Login" className="dontLink">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <img src={loginGirl} className="bgRegisterImg" alt="Girl" />
        </div>
      </Container>
    </div>
  );
};

export default Register;
