import React from "react";
import "../styles/shop.css";

const Shop = () => {
  return (
    <div>
      <header class="header">
        <div class="inner-wrapper">
          <div class="top-header">
            <div class="left">
              <a href="#">ducati motorcycles</a>
            </div>
            <div class="middle">
              <p>Returns are extended until 08/01/2024.</p>
            </div>
            <div class="right">
              <div class="store-switcher">
                <a href="#" class="country">
                  <span
                    class="country-flag"
                    role="img"
                    aria-label="australia flag"
                  ></span>
                  <span class="label">au-en</span>
                  <span class="icon">
                    <svg
                      viewBox="0 0 28 14"
                      id="arrow-small-down"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.6C0 1.2.1.8.4.5 1.1-.2 2-.3 2.9.4L14 10 25.2.4c.7-.7 1.8-.5 2.3.1.7.7.5 1.7-.1 2.4L15.1 13.6c-.7.5-1.6.5-2.3 0L.4 3C.1 2.6 0 2 0 1.6z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="login">
                <a href="#">
                  <span class="label">myducati</span>
                  <span class="icon">
                    <svg
                      viewBox="0 0 28 14"
                      id="arrow-small-down"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.6C0 1.2.1.8.4.5 1.1-.2 2-.3 2.9.4L14 10 25.2.4c.7-.7 1.8-.5 2.3.1.7.7.5 1.7-.1 2.4L15.1 13.6c-.7.5-1.6.5-2.3 0L.4 3C.1 2.6 0 2 0 1.6z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <nav class="main-menu">
            <div class="sticky">
              <div class="sticky-body">
                <div class="sticky-top-wrap">
                  <div class="main-menu--left">
                    <ion-icon class="main-menu--icon" name="menu"></ion-icon>
                    <ul class="main-menu--list list-1">
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          motorcycle clothes
                        </a>
                      </li>
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          casual clothes
                        </a>
                      </li>
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          accessories
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="main-menu--middle">
                    <a href="#">
                      <div class="logo-container">
                        <a class="logo-link" href="#">
                          <img
                            src="./images/ducati-logo.png"
                            alt="ducati logo"
                            class="logo"
                          />
                        </a>
                      </div>
                      <span>Shop Online</span>
                    </a>
                  </div>
                  <div class="main-menu--right">
                    <ul class="main-menu--list list-2">
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          bike accessories
                        </a>
                      </li>
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          gift guide
                        </a>
                      </li>
                    </ul>

                    <ul class="main-menu--list">
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          <ion-icon
                            class="main-menu--icon"
                            name="search-outline"
                          ></ion-icon>
                        </a>
                      </li>
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          <ion-icon
                            class="main-menu--icon star-icon"
                            name="star-outline"
                          ></ion-icon>
                        </a>
                      </li>
                      <li class="main-menu--list-item">
                        <a href="#" class="main-menu--link">
                          <ion-icon
                            class="main-menu--icon"
                            name="cart-outline"
                          ></ion-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main class="main">
        <section class="hero">
          <div class="inner-wrapper">
            <h1 class="hero-title">The new collection awaits you!</h1>
            <p class="hero-description">
              Discover the latest items and update your wardrobe.
            </p>
            <button class="red-btn">Shop Now</button>
          </div>
        </section>

        <section class="new-collection recommended">
          <h2 class="title">Recommended for you</h2>

          <div class="inner-wrapper">
            <div class="card first-card">
              <div class="card-img-box">
                <img src="./images/81.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">T-shirt-Logo Meccanica</h3>
                <p class="item-price">A$38,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/82.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Fabric gloves-SCR62 Milestone</h3>
                <p class="item-price">A$90,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/83.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">
                  Windproof jacket Ducati Corse Thrill Woman
                </h3>
                <p class="item-price">A$236,00</p>
              </div>
            </div>

            <div class="card last-card">
              <div class="card-img-box">
                <img src="./images/84.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">T-shirt-Reflex Attitude 2.0</h3>
                <p class="item-price">A$63,00</p>
              </div>
            </div>

            <div class="buttons">
              <button class="arrow-btn arrow-left">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <button class="arrow-btn arrow-right">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </section>

        <section class="carousel">
          <div class="inner-wrapper">
            <div class="carousel-item item-1">
              <p>ride safely, choose the right clothing</p>
            </div>
            <div class="carousel-item item-2">
              <p>wear your passion</p>
            </div>
            <div class="carousel-item item-3">
              <p>bike accessories</p>
            </div>
          </div>
        </section>

        <section class="banner">
          <div class="inner-wrapper">
            <div class="banner-info">
              <div class="banner-top">
                <h2 class="banner-title">World Champions!</h2>
                <p class="banner-description">
                  Celebrate this historic win with us. Grab yourself one of
                  these special edition t-shirts.
                </p>
              </div>
              <div class="banner-bottom">
                <button class="red-btn">discover now</button>
              </div>
            </div>
          </div>
        </section>

        <section class="new-collection">
          <h2 class="title">News</h2>

          <div class="inner-wrapper">
            <div class="card">
              <div class="card-img-box">
                <img src="./images/77.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Fabric jacket-SCR Refrigiwear</h3>
                <p class="item-price">A$308,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/78.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Ball pen-Ducati Essential</h3>
                <p class="item-price">A$7,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/79.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Block Notes-Ducati Museum</h3>
                <p class="item-price">A$17,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/80.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Block Notes-DC Line</h3>
                <p class="item-price">A$17,00</p>
              </div>
            </div>

            <div class="buttons">
              <button class="arrow-btn arrow-left">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <button class="arrow-btn arrow-right">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </section>

        <section class="new-collection">
          <h2 class="title">Best seller</h2>

          <div class="inner-wrapper">
            <div class="card">
              <div class="card-img-box">
                <img src="./images/73.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Leather jacket-Black Rider C2</h3>
                <p class="item-price">A$817,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/74.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Leather jacket-Black Rider C2</h3>
                <p class="item-price">A$817,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/75.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Fabric jacket-SCR62 Milestone Woman</h3>
                <p class="item-price">A$545,00</p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-box">
                <img src="./images/76.webp" alt="item img" class="card-img" />
              </div>
              <div class="card-info">
                <h3 class="item-name">Garage Mat</h3>
                <p class="item-price">A$309,00</p>
              </div>
            </div>

            <div class="buttons">
              <button class="arrow-btn arrow-left">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <button class="arrow-btn arrow-right">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </section>

        <section class="tabs">
          <div class="inner-wrapper">
            <div class="img" role="img" aria-label="man on a bike"></div>
            <div class="tabs-right">
              <div class="tabs-top">
                <ul class="tabs-list">
                  <li class="tab-item active">urban</li>
                  <li class="tab-item">sport&fun</li>
                  <li class="tab-item">touring</li>
                  <li class="tab-item">racing</li>
                </ul>
                <p class="tab-description">
                  Clothing specially designed to prtect you in the city traffic,
                  without compromising on comfort or Ducati's unmistakable
                  style.
                </p>
                <a href="#" class="tabs-link red-link">
                  discover the collection
                </a>
              </div>
              <div class="tabs-bottom">
                <ion-icon
                  class="arrow arrow-disabled"
                  name="chevron-back-outline"
                ></ion-icon>
                <ion-icon
                  class="arrow"
                  name="chevron-forward-outline"
                ></ion-icon>
              </div>
            </div>
          </div>
        </section>
      </main>
      <aside class="newsletter">
        <div class="newsletter-wrapper">
          <h2 class="newsletter-title">Subscribe to the newsletter</h2>
          <div class="newsletter-content">
            <fieldset class="fieldset">
              <div class="controls">
                <div class="control">
                  <label class="control-label" for="newsletter-email">
                    Enter your email address
                  </label>
                  <input
                    class="control-input"
                    type="email"
                    id="newsletter-email"
                  />
                </div>

                <div class="control">
                  <label for="newsletter-country" class="control-label">
                    Country
                  </label>

                  <div class="dropdown-container">
                    <select
                      class="dropdown-select"
                      name="newsletter-country"
                      id="newsletter-country"
                    >
                      <option value="default">Select</option>
                      <option value="australia">Australia</option>
                      <option value="austria">Austria</option>
                      <option value="belgium">Belgium</option>
                    </select>
                    <div class="dropdown-icon-container">
                      <img
                        src="./images/arrow-c.svg"
                        alt="down arrow"
                        role="presentation"
                        class="dropdown-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <label class="form-label">
                I declare that I have read the
                <a
                  href="https://shop.ducati.com/au/en/privacy-cookies/"
                  target="_new"
                >
                  information notice
                </a>
                prepared pursuant to art. 13 of EU Regulation 2016/679 on the
                protection of personal data ("Regulation") and consent to the
                processing of my email address for the purposes indicated
                therein
              </label>

              <input class="submit-btn red-btn" type="submit" value="send" />
            </fieldset>
          </div>
        </div>
      </aside>
      <footer class="page-footer">
        <div class="footer content">
          <div class="logo-footer">
            <a href="#" class="logo">
              <svg
                viewBox="0 0 136 26"
                id="logo-ducati"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.7 19.458h1c2.7-.1 3.7-.9 4.4-3.5.4-1.6.8-3.2 1.1-4.8.1-.7.1-1.5.1-2.3-.1-.9-.6-1.6-1.4-1.9-.8-.3-1.6-.4-2.5-.3-1 4.2-1.8 8.4-2.7 12.8M6.3.958h10.9c1.9 0 3.7.3 5.4.9 2.9 1 4.5 3.2 4.7 6.2.4 4.6-1 8.8-4 12.4-1.9 2.2-4.3 3.4-7.1 4-1.4.3-2.9.4-4.3.5-3.3.1-6.6 0-9.9 0h-.7c1.7-8.1 3.4-16 5-24M41.278.958c-.2.8-.3 1.5-.4 2.2-.9 4.3-1.8 8.7-2.7 13-.1.5-.1 1-.1 1.5.1 1.3 1.3 1.8 2.4 1.1.5-.3.8-.8 1-1.4.3-1 .6-2 .8-3.1l2.7-12.9c0-.1.1-.3.1-.5h9.1v.3c-1.1 5.1-2.1 10.1-3.2 15.2 0 .2-.1.4-.2.6-1.3 4.6-4.3 7.3-9 8.2-2.7.5-5.5.4-8.3-.2h-.2c-3-.8-4.6-2.8-4.8-5.9-.1-1.6.1-3.2.5-4.8.9-4.2 1.7-8.3 2.6-12.5.1-.3.1-.5.2-.8h9.5zM91.2 6.6c-.1 0-.1 0-.2-.1-1.3 2.9-2.6 5.7-3.9 8.7h4.1V6.6zm-7.9 18.3h-9.1c.1-.3.2-.6.4-.8 3.9-7.5 7.9-14.9 11.8-22.4.3-.6.6-.8 1.3-.8H98.9c.8 8 1.5 16 2.3 24h-9.4c-.1-1.2-.3-2.3-.4-3.6h-6.6c-.6 1.1-1 2.3-1.5 3.6zM67.5 16.2h8.8c-.1.3-.1.5-.2.7-.5 1-.9 2-1.4 3-1.9 3.3-4.9 5-8.6 5.5-1.9.3-3.8.3-5.6-.1-3.6-.8-5.9-2.9-6.5-6.5-1-6.2.9-11.5 5.8-15.6C62 1.3 64.7.5 67.7.4c1.7-.1 3.4.1 5 .5 3.2.9 4.9 3 5 6.3v2.4c0 .1 0 .3-.1.4h-8.3c-.1-.7 0-1.3-.2-1.9-.3-1.2-1.3-1.6-2.4-1.1-.8.4-1.5 1.1-1.9 2-1.1 2.4-1.8 5-1.8 7.6 0 .5.1 1 .2 1.4.2.7.6 1.3 1.4 1.4.8.1 1.6-.1 2-.9.3-.4.4-.9.6-1.4.1-.2.2-.5.3-.9M124.1.9c-.5 2.1-.9 4.1-1.4 6.3h-6c-1.2 5.9-2.4 11.7-3.6 17.6h-9c1.2-5.8 2.3-11.7 3.5-17.6h-5.9c.5-2.2.9-4.2 1.4-6.3h21zM125.962.958h8.7c.1.6-4.3 22-4.9 23.9h-8.8c1.7-8 3.3-15.9 5-23.9"></path>
              </svg>
            </a>
          </div>
          <nav class="footer-nav-links">
            <ul class="footer links">
              <li class="nav item">
                <a href="#">faq</a>
              </li>

              <li class="nav item">
                <a href="#">terms of sale</a>
              </li>

              <li class="nav item">
                <a href="#">contacts</a>
              </li>

              <li class="nav item">
                <a href="#">returns and refunds</a>
              </li>

              <li class="nav item">
                <a href="#">privacy policy</a>
              </li>

              <li class="nav item">
                <a href="#">cookies</a>
              </li>

              <li class="nav item">
                <a href="#">klarna infopage</a>
              </li>
            </ul>
          </nav>
          <div class="copyright">
            <div class="copyright--inner">
              <p>
                Copyright © 2023 Ducati Motor Holding S.p.A - Sole Shareholder -
                Company subject to the management and coordination of AUDI AG.
                All rights reserved. VAT number 05113870967
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="box scrambler-link">
              <a href="#" class="scrambler">
                <span>Go to</span>
                <svg
                  class="icon icon--logo-scrambler"
                  viewBox="0 0 80 29"
                  id="logo-scrambler"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M42.6 24.3c-.1.7-.2 1.2-.4 1.5-.2.3-.5.5-.9.6H41l.4-4h.3c.5-.1.7.1.8.4.2.3.2.8.1 1.5m-.5-3.5l-3.3.4-.7 7.3 3.5-.4c2.2-.2 3.7-1.8 3.9-3.9.2-2.3-.5-3.7-3.4-3.4M50.5 19.9l-.5 4.7c-.1.6-.3.8-.6.9-.3 0-.5-.2-.5-.7l.5-4.7-2.8.3-.5 4.8c-.2 1.7 1 2.5 3.1 2.2 2.1-.2 3.5-1.2 3.6-3l.5-4.8-2.8.3zM57.9 23.6c-.1.8-.4 1-.7 1.1-.7.1-.7-.7-.6-1.9.1-1.2.3-1.9 1-2 .3 0 .6.1.6.9l2.6-.3c.2-2.1-1.2-2.7-3-2.5-2.4.3-3.9 1.9-4 4.2-.2 2.3.8 3.7 3.3 3.4 1.8-.2 3.4-1.2 3.6-3.2l-2.8.3zM65 22.5l-1.2.1.9-2.8.3 2.7zm-1.9-4l-3 7.5 2.7-.3.4-1.2 2-.2.2 1.1 2.9-.3-1.6-7-3.6.4zM74.4 17.2l-6.3.7-.2 2 1.8-.2-.6 5.3 2.8-.3.6-5.4 1.7-.1zM74.9 17.1l-.7 7.3 2.8-.3.7-7.3zM3.8 11.34l2.9 9.9v.6c-.1.8-.8 1.6-1.7 1.7l-5 .6.3-2.8 3.2-.4c.2 0 .4-.2.4-.4v-.1L1 10.84c0-.2-.1-.5-.1-.7.1-.9.9-1.7 1.8-1.8l4.9-.5-.4 2.8-3 .3c-.2 0-.3.2-.4.4zm8.2-.9l-.9 9.3c0 .2.1.3.3.3l2.7-.3-.3 2.8-4.3.5c-.9.1-1.5-.5-1.5-1.3v-.1l1.2-12.4c.1-.9.9-1.7 1.7-1.8l4.3-.5-.2 2.7-2.7.3c-.2.1-.3.3-.3.5zm9.4 3.5l.4-4.6c0-.2-.1-.4-.3-.4l-1.8.2-.5 5.5 1.8-.2c.2 0 .4-.2.4-.5zm1.1 3.1l1 4.4-2.9.3-1-4.4-.6.1-.4 4.6-2.9.3 1.5-15.6 2-.2.8-.2 3.4-.4c.9 0 1.6.6 1.5 1.5l-.7 7.8c-.2.9-.9 1.6-1.7 1.8zm5.9-.5l1.5-.2-.2-5.6-1.3 5.8zm1.6 2.4l-2.2.2-.4 1.9-3.2.3 4.4-16 .9-.1 1.5-.1.9-.1 1.3 15.4-3.1.3-.1-1.8zm8.6-14.7l1 6.6 2.5-7h.3l2.9-.3-1.5 15.7-2.9.3.7-7.1-1.4 3.3-1.3 2.9-1.3-5.6-.7 6.9-2.9.3 1.5-15.7h.2l2.7-.3h.2zm14.2 6.2c.7-.1 1.1.4 1.1 1l-.5 5.1c-.1.9-.9 1.7-1.7 1.8l-3.4.4-2.9.3 1.4-15.6 2-.2.9-.1 3.4-.4c.9-.1 1.5.5 1.4 1.4l-.5 4.9c0 .7-.6 1.3-1.2 1.4zm-3.7-.5l2.1-.2.3-3.6c0-.2-.1-.4-.3-.4l-1.8.2-.3 4zm1.9 2.2l-2.1.2-.3 3.6 1.8-.2c.2 0 .4-.2.4-.4l.2-3.2zm10 5.2l-3.2.4-2.9.3 1.5-15.7 2.9-.3-1.3 12.8 3.2-.4-.2 2.9zm7.3-7.1l-2.8.3-.3 3.6 3.4-.4-.2 2.7-3.5.4-2.9.3 1.5-15.6 2-.2.9-.1 3.6-.4-.3 2.8-3.6.4-.4 4 2.8-.3-.2 2.5zm7.4-2.3l.4-4.6c0-.2-.1-.4-.3-.4l-1.8.2-.5 5.5 1.8-.2c.2 0 .3-.2.4-.5-.1.1-.1 0 0 0zm3.4-6.4l-.7 7.8c-.1.8-.8 1.5-1.6 1.7l1 4.4-2.9.3-1-4.4-.7.1-.4 4.6-2.9.3L71.4.74l2-.2.9-.1 3.4-.4c.9-.1 1.5.5 1.4 1.5z"></path>
                </svg>
              </a>
            </div>
            <div class="box socials">
              <a href="#" class="link">
                <div class="ico">
                  <svg
                    viewBox="0 0 9 20"
                    id="social-fb"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.9 20h3.9V10h2.8L9 6.5H5.9V4.4c0-.8.5-1 .9-1H9V0H6.1C2.7 0 1.9 2.6 1.9 4.2v2.3H0V10h1.9v10z"></path>
                  </svg>
                </div>
              </a>

              <a href="#" class="link">
                <div class="ico">
                  <svg
                    viewBox="0 0 20 20"
                    id="social-twitter"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.4 1.8c-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.4-3-1.4-2.3 0-4.1 1.9-4.1 4.3 0 .3 0 .7.1 1-3.4-.1-6.4-1.8-8.4-4.4C1 2.9.8 3.7.8 4.4c0 1.5.7 2.8 1.8 3.6C2 8 1.4 7.8.8 7.5v.1c0 2.1 1.4 3.8 3.3 4.2-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2 2.9 3.8 3C4.6 16 2.8 16.6.9 16.6c-.3 0-.7 0-1-.1 1.8 1.2 4 1.9 6.3 1.9C13.8 18.5 18 12 18 6.3v-.6c.8-.6 1.5-1.4 2-2.2-.7.3-1.5.6-2.4.7.9-.5 1.5-1.4 1.8-2.4"></path>
                  </svg>
                </div>
              </a>

              <a href="#" class="link">
                <div class="ico">
                  <svg
                    viewBox="0 0 22 22"
                    id="social-instagram"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.8 17.6c0 1.2-.9 2.1-2.1 2.1H4.3c-1.2 0-2.1-.9-2.1-2.1v-9h3.3c-.3.8-.4 1.6-.4 2.4 0 3.3 2.7 6 6 6s6-2.7 6-6c0-.8-.2-1.6-.4-2.3H20l-.2 8.9zM7.9 8.7c.7-1 1.8-1.6 3.1-1.6s2.4.6 3.1 1.6c.5.6.7 1.4.7 2.3 0 2.1-1.7 3.9-3.9 3.9S7 13.1 7 11c.1-.8.4-1.6.9-2.3zm11-6.2h.5v3.7h-3.7V2.5h3.2zM17.6 0H4.2C1.9 0 0 1.9 0 4.3v13.5C0 20 1.9 22 4.3 22h13.4c2.3 0 4.3-1.9 4.3-4.3V4.3C21.9 1.9 20 0 17.6 0z"></path>
                  </svg>
                </div>
              </a>

              <a href="#" class="link">
                <div class="ico">
                  <svg
                    viewBox="0 0 23 20"
                    id="social-yt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.1 12.9V6.5l6.2 3.2-6.2 3.2zm13.7-7.4s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1-3.2-.2-8-.2-8-.2s-4.8 0-8 .2c-.6.1-1.6.1-2.5 1-.6.7-.9 2.3-.9 2.3S0 7.3 0 9.1v1.7c0 1.8.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.8.2 7.8.2s4.8 0 8-.2c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7V9.1c.2-1.8 0-3.6 0-3.6z"></path>
                  </svg>
                </div>
              </a>

              <a href="#" class="link">
                <div class="ico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 15 15"
                    // style="enable-background: new 0 0 15 15"
                    // xml:space="preserve"
                  >
                    <path d="M15,15h-3.1v-4.9c0-1.2,0-2.7-1.6-2.7c-1.6,0-1.9,1.3-1.9,2.6v5H5.3V5h3v1.4h0c0.4-0.8,1.4-1.6,2.9-1.6  c3.1,0,3.7,2.1,3.7,4.8V15z M1.8,3.6C0.8,3.6,0,2.8,0,1.8S0.8,0,1.8,0c1,0,1.8,0.8,1.8,1.8S2.8,3.6,1.8,3.6L1.8,3.6z M0.2,15h3.1V5  H0.2V15z"></path>
                  </svg>
                </div>
              </a>

              <a href="#" class="link">
                <div class="ico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Livello_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 20 20"
                    // style="enable-background: new 0 0 20 20"
                    // xml:space="preserve"
                  >
                    <path
                      class="st0"
                      d="M14,0L14,0l-3.4,0v6.5V8v5.6c0,1.6-1.3,3-3,3s-3-1.3-3-3c0-1.6,1.3-3,3-3c0.3,0,0.6,0.1,0.9,0.2V7.3  c-0.3,0-0.6-0.1-0.9-0.1c-3.5,0-6.4,2.9-6.4,6.4C1.2,17.1,4,20,7.6,20s6.4-2.9,6.4-6.4V6.7c1.4,1,3,1.6,4.9,1.6V4.9  C16.1,4.9,14,2.7,14,0z"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div class="box ducati-link">
              <a href="#" class="scrambler">
                <span>go to ducati website</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
