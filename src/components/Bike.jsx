import React, { useContext, useEffect, useState } from "react";
import "../styles/general.css";
import "../styles/style.css";
import "../styles/queries.css";
import "../styles/bike.css";


import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";

const Bike = () => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  console.log(state, "state");
  const { id } = useParams();

  const [bikeData, setBikeData] = useState({});
  console.log(bikeData, "bikeData");

  async function GetSingleBikeData(id) {
    try {
      const response = await Api.post("/user/single-bike", { bikeId:id });
      if (response.data.success) {
        // console.log(response.data.bikeData, "bikeData");
        setBikeData(response.data.bikeData);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  async function AddToCart(bikeId) {
    if (state?.user?.name) {
      try {
        const response = await Api.post("/user/add-to-cart", {
          userId: state.user.id,
          bikeId: bikeId,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          router('/cart')
        }
      } catch (error) {
        toast.error(error.response.data.error);
      }
    } else {
      toast.error("Plase login to add product into cart.");
      router(`/login/${bikeId}`);
    }
  }

  useEffect(() => {
    if (id) {
      GetSingleBikeData(id);
    }
  }, [id]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);  // This will take the user back to the previous page
  };

  return (
    <div>
        

      <main class="main" style={{ marginTop: "0 px" }}>
      <button className="BackTohome3" onClick={handleBack}>
        &larr;   Back
      </button>
        <section class="hero">
          <div
            class="hero-wrapper"
            style={{
              backgroundImage: `url(${bikeData?.mainPhoto})`,
            }}
          >
            <div class="hero-info-wrapper">
              <div class="hero-info--left">
                <h1 class="hero-title">{bikeData?.name}</h1>
                <div
                  class="separator-line"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <p class="hero-description">
                  Classy and black, essentially PRO. <br />
                  Live the road with the new {bikeData?.name}.
                </p>
              </div>
              <div class="hero-info--right">
                <p class="hero-message">
                  INR {bikeData?.price} Ex-Showroom India
                </p>
                <p style={{ backgroundColor: "yellow" }}>
                  <span
                    style={{
                      width: "200px",
                      height: "80px",
                      fontSize: "16px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => AddToCart(bikeData._id)}
                  >
                    ADD TO CART
                  </span>
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
              </div>
            </div>
          </div>
        </section>

        <section class="features">
          <div class="main-wrap">
            <div class="section-intro-box">
              <h2 class="section-title">Dark Suit</h2>
              <div
                class="section-line-separator"
                role="presentation"
                aria-label="presentation line"
              ></div>
              <p class="section-description">
                Hit the road, ride with pride, enchant the streets with tons of
                personality. New 1100 Dark PRO. Black Heart, Scrambler soul.
              </p>
            </div>

            <div class="features-wrapper">
              <div class="feature-box">
                <div class="plus-icon">+</div>
                <h3 class="feature-title">Iconic style</h3>
                <div
                  class="section-line-separator"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <div class="feature-img-box">
                  <img
                    src={bikeData?.extraPhoto1}
                    alt="bike img"
                    class="feature-img"
                  />
                </div>
                <p class="feature-description">
                  With the new Dark Stealth color, combined with the tubular
                  steel frame and the aluminium rear frame, both in black. The
                  rear is the most distinctive part of the bike thanks to the
                  right side dual exhaust and the low number plate holder, which
                  make an important contribution to making the bike compact.
                </p>
              </div>
              <div class="feature-box">
                <div class="plus-icon">+</div>
                <h3 class="feature-title">Full of technology</h3>
                <div
                  class="section-line-separator"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <div class="feature-img-box">
                  <img
                    src={bikeData?.extraPhoto2}
                    alt="bike img"
                    class="feature-img"
                  />
                </div>
                <p class="feature-description">
                  With the electronic management system Ride by Wire and the
                  inertial platform, Scrambler 1100 Dark PRO offers high
                  standards of active safety and performance always within
                  everyone’s reach and for every type of use thanks to the three
                  Riding Modes. The Scrambler 1100 Dark PRO is equipped with
                  Ducati Traction Control (DTC).
                </p>
              </div>
              <div class="feature-box">
                <div class="plus-icon">+</div>
                <h3 class="feature-title">Engine</h3>
                <div
                  class="section-line-separator"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <div class="feature-img-box">
                  <img
                    src={bikeData?.extraPhoto4}
                    alt="bike img"
                    class="feature-img"
                  />
                </div>
                <p class="feature-description">
                  The engine of the Scrambler 1100 Dark PRO is an air-and
                  oil-cooled, 1079 cm³, two-valve L-twin engine with EURO 5
                  approval. It has a bore of 98 mm and a stroke of 71.5 mm and
                  favours smooth acceleration at all rpm and ease of handling.
                  The Desmodue engine of the Scrambler 1100 Dark PRO has
                  lightweight crankcases and machined aluminium clutch and
                  alternator covers. The two belt covers are also made of
                  aluminium and they are also machined to enhance the
                  aesthetics.
                </p>
              </div>
              <div class="feature-box">
                <div class="plus-icon">+</div>
                <h3 class="feature-title">Riding comfort</h3>
                <div
                  class="section-line-separator"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <div class="feature-img-box">
                  <img
                    src={bikeData?.extraPhoto4}
                    alt="bike img"
                    class="feature-img"
                  />
                </div>
                <p class="feature-description">
                  With tubular steel trellis frame with double top beam.
                  Essential, like the Scrambler, it embraces the engine and is
                  completed by an aluminium rear frame. It guarantees great
                  agility in traffic as much as between hairpin bends in the
                  mountains. Thanks to the wide handlebar, moving between urban
                  obstacles is child’s play with the Scrambler, while the 1,514
                  mm wheelbase maximises stability, even at high speeds.
                </p>
              </div>
              <div class="feature-box">
                <div class="plus-icon">+</div>
                <h3 class="feature-title">Brembo braking system</h3>
                <div
                  class="section-line-separator"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <div class="feature-img-box">
                  <img
                    src={bikeData?.extraPhoto5}
                    alt="bike img"
                    class="feature-img"
                  />
                </div>
                <p class="feature-description">
                  The Scrambler 1100 Dark PRO is equipped with a Brembo braking
                  system with ABS Cornering, which guarantees safety in all
                  types of corners. At the front, a 320 mm diameter double disc
                  has been fitted to two Brembo M 4.32B monobloc four-piston
                  calipers with radial connection. At the rear there is a 245 mm
                  disc on which a 34 mm single-piston caliper works. The ABS
                  system has only one level of intervention and is not
                  switchable.
                </p>
              </div>
              <div class="feature-box">
                <div class="plus-icon">+</div>
                <h3 class="feature-title">Innovative lighting</h3>
                <div
                  class="section-line-separator"
                  role="presentation"
                  aria-label="presentation-line"
                ></div>
                <div class="feature-img-box">
                  <img
                    src={bikeData?.extraPhoto6}
                    alt="bike img"
                    class="feature-img"
                  />
                </div>
                <p class="feature-description">
                  The light guide along the outer circumference, powered by an
                  LED source that acts as a position light, is a DRL (Daytime
                  Running Light), which allows the Scrambler 1100 Dark PRO to be
                  easily recognizable even during the day. Taking inspiration
                  from the tape that was applied to the headlights in the 1970s
                  to preserve the light cluster, a black metal “X” was recreated
                  inside the headlight. At the rear, the optical group is of the
                  full LED type with a diffusion effect and uses a technology
                  that is unique in the world of two wheels.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="closer-look">
          <div class="main-wrap">
            <div class="section-intro-box">
              <h2 class="section-title">A closer Look</h2>
              <div
                class="section-line-separator"
                role="presentation"
                aria-label="presentation line"
              ></div>
              <p class="section-description">
                Find out the look of Ducati Scrambler 1100 Dark PRO, available
                in the Dark Stealth color.
              </p>
            </div>
            <div class="controls-wrapper">
              <div class="control-wrapper">
                <span class="control-label">Color</span>
                <span class="color-switch">
                  <span class="inner"></span>
                </span>
              </div>
              <div class="control-wrapper">
                <span class="control-label">Rotate side</span>
                <div class="control-actions">
                  <span class="rotate rotate-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39.914"
                      height="36.944"
                      viewBox="0 0 39.914 36.944"
                    >
                      <path
                        id="Path_156"
                        data-name="Path 156"
                        d="M40,19.621c-.064.459-.127.924-.191,1.383A18.016,18.016,0,0,1,36.96,28.6a18.31,18.31,0,0,1-8.46,6.981,18.045,18.045,0,0,1-8.485,1.307A18.508,18.508,0,0,1,6.507,29.247a1.154,1.154,0,0,1-.076-.14c.778-.548,1.555-1.1,2.346-1.657A15.578,15.578,0,0,0,20.1,33.964a14.926,14.926,0,0,0,9.123-1.989A15.546,15.546,0,1,0,7.52,11.761c1.555-.746,3.066-1.473,4.615-2.218.427.88.835,1.734,1.262,2.614l-2.2,1.071q-3.156,1.52-6.311,3.034a2.531,2.531,0,0,0-.229.108c-.178.108-.268.064-.363-.128Q2.315,12.092.317,7.948C.253,7.814.17,7.693.1,7.559V7.5c.867-.414,1.734-.822,2.626-1.249C3.421,7.681,4.1,9.083,4.8,10.543c.083-.14.121-.21.166-.28.606-.994,1.147-2.04,1.836-2.971a17.571,17.571,0,0,1,5.253-4.7A18.472,18.472,0,0,1,32.1,3.333a18.787,18.787,0,0,1,3.666,3.372,18.4,18.4,0,0,1,3.927,8.415c.127.727.217,1.466.319,2.2C40,18.091,40,18.856,40,19.621Z"
                        transform="translate(-0.1 -0.005)"
                      ></path>
                    </svg>
                  </span>
                  <span class="rotate rotate-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39.901"
                      height="36.944"
                      viewBox="0 0 39.901 36.944"
                    >
                      <path
                        id="Path_157"
                        data-name="Path 157"
                        d="M0,19.621c.064.459.127.924.191,1.383A18.016,18.016,0,0,0,3.041,28.6a18.31,18.31,0,0,0,8.46,6.981,18.045,18.045,0,0,0,8.485,1.307,18.508,18.508,0,0,0,13.509-7.637,1.155,1.155,0,0,0,.076-.14c-.778-.548-1.555-1.1-2.346-1.657A15.578,15.578,0,0,1,19.9,33.964a14.926,14.926,0,0,1-9.123-1.989A15.546,15.546,0,1,1,32.48,11.761c-1.555-.746-3.066-1.473-4.615-2.218-.427.88-.835,1.734-1.262,2.614l2.2,1.071q3.156,1.52,6.311,3.034a2.531,2.531,0,0,1,.229.108c.178.108.268.064.363-.128q1.979-4.15,3.978-8.294c.064-.134.147-.255.217-.389V7.5c-.867-.414-1.734-.822-2.626-1.249-.695,1.434-1.371,2.837-2.078,4.3-.083-.14-.121-.21-.166-.28-.606-.994-1.147-2.04-1.836-2.971a17.571,17.571,0,0,0-5.253-4.7A18.472,18.472,0,0,0,7.9,3.333,18.787,18.787,0,0,0,4.233,6.705a17.833,17.833,0,0,0-2.346,3.627A18.455,18.455,0,0,0,.319,15.127C.191,15.853.1,16.593,0,17.326Z"
                        transform="translate(0 -0.005)"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <a href="#" class="control-label">
                Go to the tech specs
              </a>
            </div>
            <div class="closer-look-img-box">
              <img
                src={bikeData?.sidePhoto}
                alt="bike img"
                class="closer-look-img"
              />
            </div>
            <h3 class="closer-look-heading">INR 12,69,000 Ex-Showroom India</h3>
            <div class="closer-look-btns-wrapper">
              <a href="#" class="btn btn-yellow">
                <span>Configure</span>
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
              <a href="#" class="btn btn-yellow">
                <span>More Info</span>
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
          <div class="section-intro-box">
            <h2 class="section-title">Act the #Joyvolution!</h2>
            <div
              class="section-line-separator"
              role="presentation"
              aria-label="presentation line"
            ></div>
            <p class="section-description">
              Fly with your Scrambler motorbike in the Land of Joy with
              positivity, fun and a free-spirited attitude.
            </p>
          </div>
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
          </div>
        </section>

        <section class="numbers">
          <div class="main-wrap">
            <div class="section-intro-box">
              <h2 class="section-title">The numbers</h2>
              <div
                class="section-line-separator"
                role="presentation"
                aria-label="presentation line"
              ></div>
              <p class="section-description">
                All the details and specifications you need.
              </p>
            </div>

            <div class="tabs-wrapper">
              <ul class="tabs-list">
                <li class="tab-item">
                  <a href="#" class="tab-link tab-link-active">
                    Engine
                  </a>
                </li>
                <li class="tab-item">
                  <a href="#" class="tab-link">
                    Transmission
                  </a>
                </li>
                <li class="tab-item">
                  <a href="#" class="tab-link">
                    Chassis
                  </a>
                </li>
                <li class="tab-item">
                  <a href="#" class="tab-link">
                    Dimensions and Weight
                  </a>
                </li>
                <li class="tab-item">
                  <a href="#" class="tab-link">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>

            <div class="scrambler-table">
              <div class="row row-body">
                <div class="cell cell-title">Type</div>
                <div class="cell">
                  L-Twin, Desmodromic distribution, 2 valves per cylinder, air
                  cooled
                </div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Displacement</div>
                <div class="cell">1,079 cc</div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Bore x stroke</div>
                <div class="cell">98 x 71 mm</div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Compress ratio</div>
                <div class="cell">11:1</div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Power</div>
                <div class="cell">86 hp (63 kW) 7,500 rpm/min</div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Torque</div>
                <div class="cell">65 lb-ft (88 Nm) @ 4,750 rpm</div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Fuel injection</div>
                <div class="cell">
                  Electronic fuel injection, Ø55 mm throttle body with full Ride
                  by Wire (RbW)
                </div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Exhaust</div>
                <div class="cell">
                  2-1-2 system with catalytic converter and 2 lambda probes,
                  twin stainless steel muffler with aluminium covers and end
                  caps
                </div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Standard</div>
                <div class="cell">
                  Euro 5 (Only for countries where Euro 5 standard applies)
                </div>
              </div>
              <div class="row row-body">
                <div class="cell cell-title">Consumption and emissions</div>
                <div class="cell">5.2 l/100km - CO2 120 g/km</div>
              </div>
            </div>
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
    </div>
  );
};

export default Bike;
