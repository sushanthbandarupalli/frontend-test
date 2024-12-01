import React, { useContext, useState }  from "react";
import "./../styles/login.css";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
  const { bikeId } = useParams();
  const { state, dispatch } = useContext(AuthContext);
  console.log(state, "state");
  const router = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (userData.email && userData.password) {
        const response = await Api.post("/auth/login", {
          email: userData.email,
          password: userData.password,
        });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          dispatch({ type: "LOGIN", payload: response.data.userData });
          toast.success(response.data.message);
          setUserData({ email: "", password: "" });
          if (bikeId) {
            router(`/bike/${bikeId}`);
          } else {
            router("/");
          }
        }
      } else {
        toast.error("Please fill all the fields.");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // This will take the user back to the previous page
  };

  return (
    
    

    <div class="login-container">
       <button className="BackTohome1" onClick={handleBack}>
        &larr;   Back
      </button>
      <div class="logo">
        <img src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form onSubmit={handleSubmit} class="login-form">
        <h1>Login</h1>
        <div class="input-group">
          <input
            value={userData.email}
            onChange={handleChange}
            placeholder="E-MAIL"
            type="email"
            name="email"
            required
          />
        </div>
        <div class="input-group">
          <input
            value={userData.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="bottom">
          <p>Forgot Your Password?</p>
          <button type="submit" onClick={handleSubmit}>LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
