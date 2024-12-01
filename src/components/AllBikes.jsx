import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

const AllBikes = () => {
const router = useNavigate();
  const [allBikes, setAllBikes] = useState([]);

  console.log(allBikes, "allBikes");

  async function getAllBikes() {
    try {
      const response = await Api.get("/user/all-bikes");
      if (response.data.success) {
        setAllBikes(response.data.bikes);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  function RedirectToSinglePage(id) {
    router(`/bike/${id}`);
  }
  useEffect(() => {
    getAllBikes();
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // This will take the user back to the previous page
  };


  return (
    <div style={{ marginTop: "300px" }}>
       <button className="BackTohome1" onClick={handleBack}>
        &larr;   Back
      </button>
      <h1 style={{ padding: "40px" }}>ALL BIKES</h1>
      <div
        class="tgs-cards"
        style={{
          marginBottom: "60px",}}
      >
        {allBikes.length &&
        allBikes.map((bike) => (
          <article class="tgs-card">
            <h3 class="tgs-card--title">{bike.name}</h3>
            <p class="tgs-card--description">{bike.description}</p>
            <div class="tgs-card--img-container">
              <img
                src={bike.sidePhoto}
                alt="dark bike"
                class="tgs-card--img"
              />
            </div>
            <p
              class="btn btn-yellow tgs-card--yellow-btn"
              style={{ width: "200px", height: "40px" }}
            >
              <span onClick={() => RedirectToSinglePage(bike._id)}>Buy</span>
              <svg
                class="btn-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18.2"
                height="9.925"
                viewBox="0 0 18.2 9.925"
              >
                <path
                  id="Path_50"
                  data-name="Path 50"
                  d="M9.9,12.6a.483.483,0,0,0-.7,0L5.6,16.2V.5A.634.634,0,0,0,5,0a.472.472,0,0,0-.5.5V16.3L.9,12.7a.483.483,0,0,0-.7,0,.483.483,0,0,0,0,.7l4.5,4.5h0l.3.3.4-.4h0l4.5-4.5A.846.846,0,0,0,9.9,12.6Z"
                  transform="translate(0 9.975) rotate(-90)"
                ></path>
              </svg>
            </p>
            <a href="#" class="yellow-link">
              Configure
            </a>
          </article>
        ))}
      </div>
      <div class="tgs-cards">
        <article class="tgs-card">
          <h3 class="tgs-card--title">Icon</h3>
          <p class="tgs-card--description">Future comes in colors</p>
          <div class="tgs-card--img-container">
            <img src="./images/3.png" alt="yellow bike" class="tgs-card--img" />
          </div>
          <a class="btn btn-yellow tgs-card--yellow-btn" href="#">
            <span>Discover More</span>
            <svg
              class="btn-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="18.2"
              height="9.925"
              viewBox="0 0 18.2 9.925"
            >
              <path
                id="Path_50"
                data-name="Path 50"
                d="M9.9,12.6a.483.483,0,0,0-.7,0L5.6,16.2V.5A.634.634,0,0,0,5,0a.472.472,0,0,0-.5.5V16.3L.9,12.7a.483.483,0,0,0-.7,0,.483.483,0,0,0,0,.7l4.5,4.5h0l.3.3.4-.4h0l4.5-4.5A.846.846,0,0,0,9.9,12.6Z"
                transform="translate(0 9.975) rotate(-90)"
              ></path>
            </svg>
          </a>
          <a href="#" class="yellow-link">
            Configure
          </a>
        </article>
        <article class="tgs-card">
          <h3 class="tgs-card--title">Full Throttle</h3>
          <p class="tgs-card--description">The Fastest Look in the City</p>
          <div class="tgs-card--img-container">
            <img src="./images/4.png" alt="red bike" class="tgs-card--img" />
          </div>
          <a class="btn btn-yellow tgs-card--yellow-btn" href="#">
            <span>Discover More</span>
            <svg
              class="btn-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="18.2"
              height="9.925"
              viewBox="0 0 18.2 9.925"
            >
              <path
                id="Path_50"
                data-name="Path 50"
                d="M9.9,12.6a.483.483,0,0,0-.7,0L5.6,16.2V.5A.634.634,0,0,0,5,0a.472.472,0,0,0-.5.5V16.3L.9,12.7a.483.483,0,0,0-.7,0,.483.483,0,0,0,0,.7l4.5,4.5h0l.3.3.4-.4h0l4.5-4.5A.846.846,0,0,0,9.9,12.6Z"
                transform="translate(0 9.975) rotate(-90)"
              ></path>
            </svg>
          </a>
          <a href="#" class="yellow-link">
            Configure
          </a>
        </article>
        <article class="tgs-card">
          <h3 class="tgs-card--title">Nightshift</h3>
          <p class="tgs-card--description">Next-Gen Classy</p>
          <div class="tgs-card--img-container">
            <img src="./images/5.png" alt="blue bike" class="tgs-card--img" />
          </div>
          <a class="btn btn-yellow tgs-card--yellow-btn" href="#">
            <span>Discover More</span>
            <svg
              class="btn-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="18.2"
              height="9.925"
              viewBox="0 0 18.2 9.925"
            >
              <path
                id="Path_50"
                data-name="Path 50"
                d="M9.9,12.6a.483.483,0,0,0-.7,0L5.6,16.2V.5A.634.634,0,0,0,5,0a.472.472,0,0,0-.5.5V16.3L.9,12.7a.483.483,0,0,0-.7,0,.483.483,0,0,0,0,.7l4.5,4.5h0l.3.3.4-.4h0l4.5-4.5A.846.846,0,0,0,9.9,12.6Z"
                transform="translate(0 9.975) rotate(-90)"
              ></path>
            </svg>
          </a>
          <a href="#" class="yellow-link">
            Configure
          </a>
        </article>
      </div>
    </div>
  );
};

export default AllBikes;
