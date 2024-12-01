import React, { useState } from "react";
import "./../styles/login.css";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const router = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // console.log(userData, "userData");

  const handleChange = (event) => {
    // console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.name && userData.email && userData.password) {
      try {
        const response = await Api.post("/auth/register", {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          router("/login");
          setUserData({
            name: "",
            email: "",
            password: "",
          });
        }
      } catch (error) {
        toast.error(error.response.data.error);
      }
    } else {
      toast.error("Please fill all fields.");
    }
  };

const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // This will take the user back to the previous page
  };


  return (
    <div class="login-container">
      <button className="BackTohome2" onClick={handleBack}>
        &larr; Back
      </button>
      <div class="logo">
        <img src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form onSubmit={handleSubmit} class="login-form">
        <h1>Register</h1>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="NAME"
            type="text"
            name="name"
            required
            value={userData.name}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="E-MAIL"
            type="email"
            name="email"
            required
            value={userData.email}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="PASSWORD"
            type="password"
            name="password"
            required
            value={userData.password}
          />
        </div>
        <div className="bottom">
          <p>Forgot Your Password?</p>
          <button type="submit">SIGNUP</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
