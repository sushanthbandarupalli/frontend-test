import React, { useContext,useEffect,useState } from "react";
import "../styles/general.css";
import "../styles/shop.css";
import "../styles/style.css";
import "../styles/queries.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
  const router = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  console.log(state, "state in home");


  // Check if user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, assume the user is logged in
      dispatch({ type: "LOGIN", payload: { token } });
    }
  }, []);

  // Handle log out
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    router("/login"); // Redirect to login page
  };
  return (
    <>
      <header class="header">
        <div class="external-wrap">
          <div class="main-wrap">
            <div class="header-inside">
              <div class="left content-wrap header-logo">
              <a href="#" class="header-logo" title="Scrambler Ducati">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="161"
                    height="48"
                    viewBox="0 0 161 48"
                    fill="#000000"
                    aria-hidden="true"
                    role="img"
                  >
                    <path d="M83.8,33.3h-6.6l-3,14.2h7c4.2,0.2,7.8-2.8,8.6-6.9C90.6,36.3,89.4,33.3,83.8,33.3z M83.9,40.3c-0.1,1.1-0.5,2.1-1.2,3  c-0.4,0.6-1.2,1-2,0.9h-0.5l1.7-7.7h0.5c0.7-0.1,1.3,0.3,1.6,0.9C84.3,38.4,84.2,39.4,83.9,40.3z M100.5,33.3l-2,9.1  c-0.3,1.2-0.9,1.6-1.4,1.6c-0.5,0-1-0.4-0.8-1.6l2-9.1h-5.6l-2,9.4c-0.8,3.4,1.3,5.1,5.6,5.1c4.3,0,7-1.7,7.8-5.1l2-9.4H100.5z   M114.1,42.3c-0.4,1.6-1,2-1.7,2c-1.4,0-1.2-1.6-0.8-3.8c0.5-2.2,0.9-3.8,2.3-3.8c0.7,0,1.2,0.3,0.9,2h5.1c0.9-4.2-1.8-5.6-5.3-5.6  c-4.4-0.2-8.3,3-8.9,7.4c-0.9,4.4,0.7,7.5,5.6,7.5c3.5,0,7-1.7,7.8-5.6h-5.1V42.3z M125.6,33.3l-7.6,14.2h5.3l1-2.3h4v2.3h5.7  l-1.6-14.2H125.6z M128.5,41.8h-2.3l2.3-5.3l0,0V41.8z M148.2,33.3h-12.5l-0.9,3.8h3.5L136,47.5h5.6l2.2-10.4h3.5L148.2,33.3z   M146.2,47.5h5.6l3-14.2h-5.6L146.2,47.5z M136.4,30.6l1-5.5h-6.8l1.4-6.9h5.5l1-4.8h-5.5l1.6-7.8h7.2l1.2-5.3l-7.2-0.1H130  l-6.3,30.4H136.4z M115.3,30.6h6.4l1.2-5.5h-6.5L121.6,0h-5.7l-6.4,30.6H115.3z M22.8,24.3l3.8-18.2c0.2-0.4,0.5-0.7,0.9-0.8h5.3  l1-5.2h-8.6c-1.8,0.1-3.4,1.3-3.8,3.1l0,0l-5.1,24.1v0.3c-0.3,1.3,0.6,2.6,1.9,2.8c0.2,0,0.5,0.1,0.7,0h8.6l1.2-5.5h-5.3  C22.9,25.1,22.7,24.7,22.8,24.3z M10.4,6.2c0-0.4,0.4-0.8,0.8-0.8h6L18.5,0H8.7C6.9,0.1,5.3,1.4,5,3.3c-0.1,0.5-0.1,1,0,1.4  l3.5,19.6v0.1c-0.1,0.4-0.5,0.7-0.9,0.8H1.2L0,30.6h9.9c1.8-0.1,3.4-1.3,3.8-3.1c0.1-0.3,0.1-0.7,0.1-1L10.4,6.2z M158.5,0.3h-12.8  l-6.3,30.3h5.9l1.8-9h1.3l1,9h5.9l-1-9c1.7-0.2,3.1-1.4,3.5-3l3.1-15.2V3.3c0.3-1.3-0.5-2.6-1.8-2.9C158.9,0.3,158.7,0.2,158.5,0.3z   M152.6,15.5L152.6,15.5c-0.1,0.4-0.5,0.8-0.9,0.8h-3.5l2.2-10.7h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2l0,0L152.6,15.5z   M103.1,30.6c1.8-0.1,3.3-1.4,3.8-3.1l2.1-9.9c0.1-1.1-0.6-2.1-1.7-2.2c-0.1,0-0.3,0-0.4,0c1.4-0.1,2.6-1,3-2.3l2-9.5V3.4  c0.4-1.3-0.4-2.7-1.7-3c-0.2-0.1-0.5-0.1-0.7-0.1H96.6l-6.4,30.3H103.1z M101.5,5.6h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2  l0,0l-1.4,7h-4.3L101.5,5.6z M98.9,18.2h4.3l-1.3,6.1l0,0c-0.1,0.4-0.5,0.7-0.9,0.8h-3.5L98.9,18.2z M49.5,18.6l3.1-15.2V3.3  c0.4-1.3-0.4-2.7-1.7-3c-0.2-0.1-0.5-0.1-0.7-0.1H37.4l-6.1,30.3H37l1.8-9h1.3l1,9h5.7l-1-9C47.6,21.4,49.1,20.3,49.5,18.6z   M44.4,15.3c-0.1,0.4-0.5,0.7-0.9,0.8H40l2.2-10.7h3.5c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.1,0,0.2l0,0L44.4,15.3L44.4,15.3z M62.3,0  h-1.7L48.5,30.4h6.4l1.3-3.6h4.4l-0.3,3.6h6.1L67,0H62.3L62.3,0z M60.7,22h-3l3.9-11.1L60.7,22z M77.8,28.4l3.3-5.3l3.4-6.2  l-2.9,13.8h5.9L93.7,0h-6.3l-6.4,13.3L80.5,0h-6.3l-6.4,30.4l5.9,0.1L76.5,17L77.8,28.4z"></path>
                  </svg>
                </a>
                
              </div>
              <div class="right content-wrap header-nav">
                <div class="language-switch">
                  <span class="flag-container">
                    <img
                      src="./images/india-flag.png"
                      alt="india flag"
                      class="flag"
                    />
                  </span>
                  <span class="text">INDIA</span>
                  <i class="fa-solid fa-angle-down fa-icons"></i>
                </div>
                <div class="social-links">
                  <div class="social-links-wrapper">
                    <div class="item">
                      <a
                        href="#"
                        class="font-color"
                        title="Follow Scrambler on Facebook"
                      >
                        <i
                          class="fab fa-facebook-f social-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div class="item">
                      <a
                        href="#"
                        class="font-color"
                        title="Follow Scrambler on Instagram"
                      >
                        <i
                          class="fab fa-instagram social-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div class="item">
                      <a
                        href="#"
                        class="font-color"
                        title="Follow Scrambler on Twitter"
                      >
                        <i
                          class="fab fa-twitter social-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div class="item">
                      <a
                        href="#"
                        class="font-color"
                        title="Follow Scrambler on YouTube"
                      >
                        <i
                          class="fab fa-youtube social-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div class="item">
                      <a
                        href="#"
                        class="font-color"
                        title="Listen to the Next-Gen playlist on Spotify"
                      >
                        <i
                          class="fab fa-spotify social-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="menu-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                   
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    
                  >
                    
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav class="main-menu">
          <div class="sticky">
            <div class="sticky-body">
              <div
                class="sticky-top-wrap"
                style={{width: "100%", display: "flex"}}
              >
                <div class="main-menu--left" style={{ width: "40%" }}>
                  {/* <div class="hamburger">
                    <ion-icon
                      class="hamburger-icon"
                      name="menu-outline"
                    ></ion-icon>
                  </div> */}

                  <ul class="main-menu--list main-menu--list__left">
                    
                    
                    <li>
                      <p
                        onClick={() => router("/all-bikes")}
                        style={{ cursor: "pointer" }}
                        class="main-menu--link"
                      >
                        All Bikes
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => router("/Orders")}
                        style={{ cursor: "pointer" }}
                        class="main-menu--link"
                      >
                        Orders
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => router("/cart")}
                        style={{ cursor: "pointer" }}
                        class="main-menu--link"
                      >
                        Cart
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="logo-container" style={{ width: "20%" }}>
                  <a class="logo-link" href="#">
                    <img
                      src="./images/ducati-logo.png"
                      alt="ducati logo"
                      class="logo"
                      style={{ marginTop: "-20px", height:"78px", borderRadius:"20px"}}
                    />
                  </a>
                </div>

                <ul
                  class="main-menu--list main-menu--list__right"
                  style={{ width: "40%" ,}}
                >
                  
                  {state.user ? ( <li>
            <p className="main-menu--link">Hello, {state.user.name} !</p>
          </li>
                           
                    ) : (
                            <li>
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={() => router("/login")}
                                className="main-menu--link"
                              >
                              LogIn
                              </p>
                            </li>
                    )}
                  {state.user ? (
                             <li>
                             <p
                               style={{ cursor: "pointer" }}
                               onClick={handleLogOut}
                               className="main-menu--link"
                             >
                             LogOut
                             </p>
                           </li>
                    ) : (
                            <li>
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={() => router("/register")}
                                className="main-menu--link"
                              >
                              Register
                              </p>
                            </li>
                    )}
                </ul>

                
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main class="main">
        <section class="slider">
          <div class="slide">
            <div class="slide-info-wrap">
              <div class="slide-info">
                <div
                  class="separator-line"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <p class="slide-description">
                  So fresh. So unmistakably Scrambler. The new icon is here for
                  you.
                </p>
              </div>
              <div class="slide-buttons-wrapper">
                <a class="btn btn-yellow" href="#">
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
              </div>
            </div>
          </div>
          
        </section>

        <section class="three-grid-section">
          <h2 class="tgs-title">
            Meet the <br />
            Next-Gen Family
          </h2>
          <div
            class="separator-line tgs-separator-line"
            role="presentation"
            aria-label="presentation line"
          ></div>
          <p class="tgs-description">
            There's a Scrambler for every attitude. Which one's yours?
          </p>
          <div class="tgs-cards">
            <article class="tgs-card">
              <h3 class="tgs-card--title">Icon</h3>
              <p class="tgs-card--description">Future comes in colors</p>
              <div class="tgs-card--img-container">
                <img
                  src="./images/3.png"
                  alt="yellow bike"
                  class="tgs-card--img"
                />
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
                <img
                  src="./images/4.png"
                  alt="red bike"
                  class="tgs-card--img"
                />
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
                <img
                  src="./images/5.png"
                  alt="blue bike"
                  class="tgs-card--img"
                />
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
        </section>

        <section class="three-grid-section">
          <h2 class="tgs-title">JUST PROs</h2>
          <div
            class="separator-line tgs-separator-line"
            role="presentation"
            aria-label="presentation line"
          ></div>
          <p class="tgs-description"></p>
          <div class="tgs-cards">
            <article class="tgs-card">
              <h3 class="tgs-card--title">1100 Dark PRO</h3>
              <p class="tgs-card--description">Dark Suit</p>
              <div class="tgs-card--img-container">
                <img
                  src="./images/16.jpg"
                  alt="dark bike"
                  class="tgs-card--img"
                />
              </div>
              <a class="btn btn-yellow tgs-card--yellow-btn" href="./bike.html">
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
              <h3 class="tgs-card--title">1100 Tribute PRO</h3>
              <p class="tgs-card--description">Mark your Roots</p>
              <div class="tgs-card--img-container">
                <img
                  src="./images/17.jpg"
                  alt="yellow bike"
                  class="tgs-card--img"
                />
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
              <h3 class="tgs-card--title">1100 Sport PRO</h3>
              <p class="tgs-card--description">Sporty attitude</p>
              <div class="tgs-card--img-container">
                <img
                  src="./images/18.jpg"
                  alt="brown bike"
                  class="tgs-card--img"
                />
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
        </section>

        <section class="protruding-section third-protruding-section">
          <div class="inner-wrapper">
            <div class="protruding--img-box">
              <img src="./images/19.png" alt="image" class="protruding--img" />
            </div>
            <div class="protruding--info-box">
              <h2 class="protruding--title">Ducati World Première 2024</h2>
              <p class="protruding--description">
                The appointment with the Ducati World Première web series, for
                the launch of the 2024 range, returns. A six-stage journey that
                will end on 7 November.
              </p>
              <a href="#" class="btn btn-white">
                <span>Discover More</span>
                <svg
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
            </div>
          </div>
        </section>

        <section class="misc">
          <h2 class="tgs-title">The Land of Joy</h2>
          <div
            class="separator-line tgs-separator-line"
            role="presentation"
            aria-label="presentation line"
          ></div>
          <p class="tgs-description">
            A universe made of music, food, lifestyle. <br />
            And an endless amount of fun.
          </p>

          <div class="misc-inner-wrapper">
            <div class="misc-item misc-item-1">
              <h2 class="misc-title">
                Next Gen <br />
                colours
              </h2>
              <p class="misc-description">
                Fulfil your customisation wishes. <br />
                Choose the colour of your Scrambler Icon.
              </p>
              <a href="#" class="btn btn-yellow">
                <span>Discover More</span>
                <svg
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
            </div>
            <div class="misc-item misc-item-2">
              <h2 class="misc-title">RefrigiWear x Scrambler Ducati</h2>
              <p class="misc-description">
                A limited edition streetwear collection.
              </p>
              <a href="#" class="btn btn-yellow">
                <span>Discover More</span>
                <svg
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
            </div>
            <div class="misc-item misc-item-3">
              <h2 class="misc-title">Next-Gen Sounds</h2>
              <p class="misc-description">
                Listen to the Next-Gen playlist on Spotify.
              </p>
              <a href="#" class="btn btn-yellow">
                <span>Listen</span>
                <svg
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
            </div>
          </div>
        </section>

        <section class="gallery">
          <h2 class="tgs-title">Wall of Joy</h2>
          <div
            class="separator-line tgs-separator-line"
            role="presentation"
            aria-label="presentation line"
          ></div>
          <p class="tgs-description">
            Words and pics shared from all over the Land of Joy.
          </p>
          <div class="gallery-inner-wrapper">
            <div
              class="gallery-img gallery-img-1"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-2"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-3"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-4"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-5"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-6"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-7"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-8"
              role="img"
              aria-label="gallery-img"
            ></div>
            <div
              class="gallery-img gallery-img-9"
              role="img"
              aria-label="gallery-img"
            ></div>
          </div>
        </section>

        <section class="newsletter">
          <div class="newsletter-box">
            <div class="newsletter-info">
              <h3 class="newsletter-title">Subscribe to the newsletter</h3>
              <p class="newsletter-description">
                By entering your email address you will always be up to date
                with the latest Scrambler Ducati news and promotions.
              </p>
              <p class="newsletter-policy">
                I declare that I have read the <span>privacy policy</span>{" "}
                drafted pursuant to{" "}
                <strong>art. 13 of EU Regulation 2016/679</strong> on the
                protection of personal data ("Regulation") and I authorize the
                processing of my email address for the purposes specified
                therein.
              </p>
            </div>
            <div class="newsletter-form">
              <input
                class="newsletter-input"
                type="email"
                placeholder="Your email address *"
              />
              <a class="btn btn-yellow tgs-card--yellow-btn" href="#">
                <span>Subscribe</span>
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
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <footer class="footer-wrapper">
          <svg
            id="Group_141"
            data-name="Group 141"
            xmlns="http://www.w3.org/2000/svg"
            width="134.531"
            height="40.177"
            viewBox="0 0 134.531 40.177"
          >
            <path
              id="Path_34"
              data-name="Path 34"
              d="M64.957,25.6H59.4L56.9,37.468h5.88A7.048,7.048,0,0,0,69.966,31.7C70.619,28.1,69.639,25.6,64.957,25.6Zm.109,5.88a5.435,5.435,0,0,1-.98,2.5,1.719,1.719,0,0,1-1.633.762h-.436l1.415-6.424h.436a1.28,1.28,0,0,1,1.307.762A4.6,4.6,0,0,1,65.066,31.48Z"
              transform="translate(5.053 2.273)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_35"
              data-name="Path 35"
              d="M77.777,25.6l-1.633,7.622c-.218.98-.762,1.307-1.2,1.307s-.871-.327-.653-1.307L75.926,25.6H71.244l-1.633,7.839c-.653,2.831,1.089,4.246,4.682,4.246s5.88-1.415,6.533-4.246L82.459,25.6H77.777Z"
              transform="translate(6.17 2.273)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_36"
              data-name="Path 36"
              d="M88.185,33.131c-.327,1.307-.871,1.633-1.415,1.633-1.2,0-.98-1.307-.653-3.158.436-1.851.762-3.158,1.96-3.158.544,0,.98.218.762,1.633h4.246C93.847,26.6,91.56,25.4,88.621,25.4a7.153,7.153,0,0,0-7.4,6.206c-.762,3.7.544,6.315,4.682,6.315,2.94,0,5.88-1.415,6.533-4.682H88.185Z"
              transform="translate(7.194 2.256)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_37"
              data-name="Path 37"
              d="M96.915,25.6,90.6,37.468h4.464l.871-1.96H99.31v1.96H104.1L102.795,25.6Zm2.4,7.077h-1.96l1.96-4.464h0Z"
              transform="translate(8.046 2.273)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_38"
              data-name="Path 38"
              d="M114.615,25.6H104.162l-.762,3.158h2.94l-1.851,8.71h4.682l1.851-8.71h2.94Z"
              transform="translate(9.183 2.273)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_39"
              data-name="Path 39"
              d="M112.2,37.468h4.682l2.5-11.868H114.7Z"
              transform="translate(9.964 2.273)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_40"
              data-name="Path 40"
              d="M105.561,25.578l.871-4.573h-5.662l1.2-5.771h4.573l.871-4.029h-4.573l1.307-6.533h5.988l.98-4.464L105.126.1h-4.9L95,25.578h10.561Z"
              transform="translate(8.437 0.009)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_41"
              data-name="Path 41"
              d="M88.9,25.587h5.335l.98-4.573H89.771L94.126,0H89.335L84,25.587Z"
              transform="translate(7.46)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_42"
              data-name="Path 42"
              d="M17.938,20.352,21.1,5.109a1.151,1.151,0,0,1,.762-.653h4.464L27.192.1H20.006a3.368,3.368,0,0,0-3.158,2.613h0L12.6,22.856v.218a2.022,2.022,0,0,0,2.178,2.4h7.186l.98-4.573H18.482C18.047,21.005,17.829,20.678,17.938,20.352Z"
              transform="translate(1.116 0.009)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_43"
              data-name="Path 43"
              d="M8.71,5.226a.7.7,0,0,1,.653-.653h5.009L15.461,0H7.3A3.453,3.453,0,0,0,4.137,2.722a2.227,2.227,0,0,0,0,1.2l2.94,16.441v.109a.934.934,0,0,1-.762.653H.98L0,25.587H8.275a3.368,3.368,0,0,0,3.158-2.613,2.706,2.706,0,0,0,.109-.871L8.71,5.226Z"
              fill="#ffc602"
            ></path>
            <path
              id="Path_44"
              data-name="Path 44"
              d="M122.9.2h-10.67L107,25.569h4.9l1.524-7.513h1.089l.871,7.513h4.9l-.871-7.513a3.5,3.5,0,0,0,2.94-2.5l2.613-12.739V2.7A2.024,2.024,0,0,0,122.9.2ZM118,12.939h0a.8.8,0,0,1-.762.653H114.3l1.851-8.928h2.94a.48.48,0,0,1,.436.653h0Z"
              transform="translate(9.502 0.018)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_45"
              data-name="Path 45"
              d="M79.979,25.569a3.472,3.472,0,0,0,3.158-2.613l1.742-8.275a1.634,1.634,0,0,0-1.742-1.851,2.788,2.788,0,0,0,2.5-1.96l1.633-7.948V2.813A2.071,2.071,0,0,0,85.205.2H74.535L69.2,25.569H79.979ZM78.673,4.664h2.94a.48.48,0,0,1,.436.653h0l-1.2,5.88H77.257ZM76.5,15.226h3.593L79,20.343h0a.934.934,0,0,1-.762.653H75.3Z"
              transform="translate(6.145 0.018)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_46"
              data-name="Path 46"
              d="M39.243,15.561,41.856,2.822V2.713A2.071,2.071,0,0,0,39.788.1H29.117L24,25.469h4.791l1.524-7.513H31.4l.871,7.513h4.791l-.871-7.513A3.266,3.266,0,0,0,39.243,15.561ZM35,12.839a.934.934,0,0,1-.762.653h-2.94l1.851-8.928h2.94a.48.48,0,0,1,.436.653h0L35,12.839Z"
              transform="translate(2.131 0.009)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_47"
              data-name="Path 47"
              d="M48.741,0H47.326L37.2,25.478h5.335l1.089-3.049h3.7l-.218,3.049h5.117L52.661,0h-3.92ZM47.435,18.4h-2.5L48.2,9.146Z"
              transform="translate(3.304)"
              fill="#ffc602"
            ></path>
            <path
              id="Path_48"
              data-name="Path 48"
              d="M60.375,23.736,63.1,19.272l2.831-5.226-2.4,11.541h4.9L73.658,0H68.432L63.1,11.106,62.661,0H57.435L52.1,25.478l4.9.109,2.286-11.324Z"
              transform="translate(4.627)"
              fill="#ffc602"
            ></path>
          </svg>

          <div class="footer-links">
            <a href="#" class="footer-link">
              Terms of use
            </a>
            <a href="#" class="footer-link">
              Cookie policy
            </a>
            <a href="#" class="footer-link">
              Privacy Policy
            </a>
          </div>

          <p class="footer-copyright">
            Copyright © 2023 Ducati Motor Holding S.p.A. – A Sole Shareholder
            Company – A Company subject to the Management and Coordination
            activities of AUDI AG. All rights reserved. VAT 05113870967
          </p>

          <div class="footer-logo-group">
            <div class="scrambler-logo-box">
              <a href="#" class="scrambler-logo-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.155"
                  height="42.155"
                  viewBox="0 0 42.155 42.155"
                >
                  <g
                    id="Raggruppa_228"
                    data-name="Raggruppa 228"
                    transform="translate(-1224.771 -11)"
                  >
                    <path
                      id="Tracciato_161"
                      data-name="Tracciato 161"
                      d="M6.235,3.741A.5.5,0,0,1,6.7,3.273h3.585L11.066,0H5.222a2.471,2.471,0,0,0-2.26,1.948,1.594,1.594,0,0,0,0,.857l2.1,11.768v.078a.669.669,0,0,1-.546.468H.7l-.7,3.2H5.923a2.411,2.411,0,0,0,2.26-1.87,1.937,1.937,0,0,0,.078-.623L6.235,3.741Z"
                      transform="translate(1240.292 22.936)"
                      fill="#ffc602"
                    ></path>
                    <path
                      id="Tracciato_162"
                      data-name="Tracciato 162"
                      d="M38.131,19.162A17.115,17.115,0,0,0,22.994,4.024V0H19.162V4.024A16.766,16.766,0,0,0,4.024,19.162H0v3.832H4.024A17.115,17.115,0,0,0,19.162,38.131v4.024h3.832V38.131A17.115,17.115,0,0,0,38.131,22.994h4.024V19.162ZM21.078,34.491A13.413,13.413,0,1,1,34.491,21.078,13.331,13.331,0,0,1,21.078,34.491Z"
                      transform="translate(1224.771 11)"
                      fill="#ffc602"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <div class="footer-social-links">
              <div class="footer-social-link-box">
                <i
                  class="footer-social-icon fab fa-facebook-f socialIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="footer-social-link-box">
                <i
                  class="footer-social-icon fab fa-instagram socialIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="footer-social-link-box">
                <i
                  class="footer-social-icon fab fa-twitter socialIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="footer-social-link-box">
                <i
                  class="footer-social-icon fab fa-youtube socialIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="footer-social-link-box">
                <i
                  class="footer-social-icon fab fa-spotify socialIcon"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default HomePage;
