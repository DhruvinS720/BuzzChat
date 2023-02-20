import React, { useState, useEffect } from "react";
import "./Login.css";
import { Button, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginGirl from "../../assets/images/girlLogin.png";
import axios from "../../components/AxiosInstance/AxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({
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
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/user/login`, user)
      .then(async (response) => {
        // console.log(response.data);
        const userData = JSON.stringify(response.data.data);
        localStorage.setItem("userData", userData);
        localStorage.setItem("token", response.data.token);
        toast.success("Login Succesfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const _id = response.data.data._id;
        setTimeout(() => {
          navigate("/");
        }, 3000);
        setTimeout(() => {
          localStorage.clear();
        }, 72000000);
        axios
          .put(`/user/updateUserOnlineStatus/${_id}`, { isOnline: true })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="bgLogin">
      <ToastContainer />
      <Container>
        <div className="loginMain">
          <div className="loginWelcome">
            <h1 className="loginTitle">Welcome Back !</h1>
            <p className="loginContinue">Sign in to continue to Buzz Chat.</p>
          </div>
          <div className="mainForm">
            <form
              action="#"
              className="loginForm"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mainEmail">
                <label htmlFor="email" className="formLabel">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Username"
                  value={user.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="mainPassword">
                <div className="forget">
                  <label htmlFor="password" className="formLabel mb-0">
                    Password
                  </label>
                  <Link to="" className="forgetPassword" role={Button}>
                    Forgot password?
                  </Link>
                </div>
                <div className="mainEye">
                  <input
                    type={passwordType}
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={handleChange}
                    maxLength={20}
                    required
                    autoComplete="password"
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
              <div className="formCheck">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="me">
                  Remember me
                </label>
              </div>
              <div className="loginSubmit">
                <button type="submit" className="submitbtn">
                  Log In
                </button>
              </div>
              <div className="social">
                <div className="signIn">
                  <h6 className="signTitle">Sign in with</h6>
                </div>
              </div>
              <div className="socialLogin">
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
                  Don't have an account ?
                  <Link to="/Register" className="dontLink">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <img src={loginGirl} className="bgLoginImg" alt="Girl" />
        </div>
      </Container>
    </div>
  );
};

export default Login;
