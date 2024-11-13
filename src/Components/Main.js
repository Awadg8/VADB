import React, { useState } from "react";

import Slider from "react-slick"; // For Awards slider

// slider animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo from "../Assets/images/logo.png";
import Logo2 from "../Assets/images/logo (2).png";
import InfoImg5 from "../Assets/images/Info/info-img-5.png";
import InfoImg6 from "../Assets/images/Info/info-img-6.png";
import InfoImg7 from "../Assets/images/Info/info-img-7.png";
import InfoImg8 from "../Assets/images/Info/info-img-8.png";
import VideoCover from "../Assets/images/download.jfif";
import PlayBtn from "../Assets/images/play-btn.png";

export default function Main() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [slideBarWidth, setSlideBarWidth] = useState(52);
  const [slideBarPosition, setSlideBarPosition] = useState({ left: "41.5%" });

  const handleMouseEnter = (width, position) => {
    setSlideBarWidth(width);
    setSlideBarPosition(position);
  };

  const handleMouseLeave = () => {
    setSlideBarWidth(52);
    setSlideBarPosition({ left: "41.5%" });
  };

  // Slider next btn
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slide-btn`}
        style={{
          ...style,
          display: window.innerWidth > 1100 ? "block" : "none",
          right: "50px",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  // Slider previous btn
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slide-btn`}
        style={{
          ...style,
          display: window.innerWidth > 1100 ? "block" : "none",
          left: "30px",
          zIndex: "10",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  // Slider animation here
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="page-template-default page page-id-399 theme-kingster gdlr-core-body woocommerce-js tribe-js kingster-body kingster-body-front kingster-full  kingster-with-sticky-navigation  kingster-blockquote-style-1 gdlr-core-link-to-lightbox">
      <div
        className="kingster-body-outer-wrapper mm-page mm-slideout"
        id="mm-0"
      >
        <div className="kingster-body-wrapper clearfix  kingster-with-frame">
          {/* Top Section Starts Here */}
          <div className="kingster-top-bar">
            <div className="kingster-top-bar-background"></div>

            <div className="kingster-top-bar-container kingster-container ">
              <div className="kingster-top-bar-container-inner clearfix">
                <div className="kingster-top-bar-left kingster-item-pdlr">
                  <svg
                    className="email-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z" />
                  </svg>
                  school.db@vallabhashram.in
                  <svg
                    className="contact-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  +91 260 2404300
                </div>

                <div className="kingster-top-bar-right kingster-item-pdlr">
                  <ul
                    id="kingster-top-bar-menu"
                    className="sf-menu kingster-top-bar-menu kingster-top-bar-right-menu sf-js-enabled sf-arrows"
                    // style="touch-action: pan-y;"
                  >
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5727 kingster-normal-menu">
                      <a href="/">Alumni</a>
                    </li>

                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6051 kingster-normal-menu">
                      <a href="/">Calendar</a>
                    </li>

                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5368 kingster-normal-menu">
                      <a href="/">Portal</a>
                    </li>
                  </ul>

                  <div className="kingster-top-bar-right-social"></div>

                  <a
                    className="kingster-top-bar-right-button"
                    href="/"
                    target="_blank"
                  >
                    Support VA
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Top Section Ends Here */}

          {/* Header Section Starts Here */}
          <header
            className="kingster-header-wrap kingster-header-style-plain kingster-style-menu-right kingster-sticky-navigation kingster-style-fixed clearfix"
            data-navigation-offset="75px"
          >
            <div className="kingster-header-background"></div>

            <div className="kingster-header-container  kingster-container">
              <div className="kingster-header-container-inner clearfix">
                <div className="kingster-logo  kingster-item-pdlr">
                  <div className="kingster-logo-inner">
                    <a className="" href="/">
                      <img src={Logo} alt="" />
                    </a>
                  </div>
                </div>

                <div className="kingster-navigation kingster-item-pdlr clearfix ">
                  <div
                    className="kingster-main-menu sf-js-enabled sf-arrows"
                    id="kingster-main-menu"
                  >
                    <ul id="menu-main-navigation-1" className="sf-menu">
                      <li
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-5271 kingster-normal-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(52, { left: "41.5%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/" className="sf-with-ul-pre sf-with-ul">
                          Home
                        </a>
                      </li>

                      <li
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 kingster-normal-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(54, { left: "48%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/" className="sf-with-ul-pre sf-with-ul">
                          Pages
                        </a>

                        <ul className="sub-menu">
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314"
                            data-size="60"
                          >
                            <a href="https://demo.goodlayers.com/kingster/about-us/">
                              About KU
                            </a>
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5311"
                            data-size="60"
                          >
                            <a
                              href="https://demo.goodlayers.com/kingster/blog-full-right-sidebar-with-frame/"
                              className="sf-with-ul-pre sf-with-ul"
                            >
                              Blog
                            </a>
                          </li>

                          <li
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5218"
                            data-size="60"
                          >
                            <a href="#" className="sf-with-ul-pre sf-with-ul">
                              Features
                            </a>

                            {/* <ul
                              className="sub-menu"
                              // style="display: none;"
                            >
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5219">
                                <a
                                  href="#"
                                  className="sf-with-ul-pre sf-with-ul"
                                >
                                  Set 1
                                </a>

                                <ul
                                  className="sub-menu"
                                  // style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5233">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/"
                                    >
                                      Accordions &amp; Toggles
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5234">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/alert-box/"
                                    >
                                      Alert Box
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5235">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/blockquotes/"
                                    >
                                      Blockquotes
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5236">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/buttons/"
                                    >
                                      Buttons
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5237">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/call-to-action/"
                                    >
                                      Call To Action
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5238">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/column-services/"
                                    >
                                      Column Services
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5239">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/columns/"
                                    >
                                      Columns
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5221">
                                <a
                                  href="#"
                                  className="sf-with-ul-pre sf-with-ul"
                                >
                                  Set 2
                                </a>

                                <ul
                                  className="sub-menu"
                                  // style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5240">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/counters/"
                                    >
                                      Counters
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5241">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/count-down/"
                                    >
                                      Count Down
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5242">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/dividers/"
                                    >
                                      Dividers
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5243">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/dropcaps/"
                                    >
                                      Dropcaps
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5244">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/featured-boxes/"
                                    >
                                      Featured Boxes
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5245">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/flip-boxes/"
                                    >
                                      Flip Boxes
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5246">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/icon-list/"
                                    >
                                      Icon Lists
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5222">
                                <a
                                  href="#"
                                  className="sf-with-ul-pre sf-with-ul"
                                >
                                  Set 3
                                </a>
                                <ul
                                  className="sub-menu"
                                  // style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5247">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/icons/"
                                    >
                                      Icons
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5248">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/images/"
                                    >
                                      Images
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5249">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/price-table/"
                                    >
                                      Price Table
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5250">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/promo-boxes/"
                                    >
                                      Promo Boxes
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5251">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/skill-bar/"
                                    >
                                      Skill Bar
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5252">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/skill-circle/"
                                    >
                                      Skill Circle
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5223">
                                <a
                                  href="#"
                                  className="sf-with-ul-pre sf-with-ul"
                                >
                                  Set 4
                                </a>

                                <ul
                                  className="sub-menu"
                                  // style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5253">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/social-shares/"
                                    >
                                      Social Shares
                                    </a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5254">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/stunning-texts/"
                                    >
                                      Stunning Texts
                                    </a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5256">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/tabs-vertical/"
                                    >
                                      Tabs Vertical
                                    </a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5257">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/testimonial/"
                                    >
                                      Testimonial
                                    </a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5258">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/titles/"
                                    >
                                      Titles
                                    </a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5259">
                                    <a
                                      target="_blank"
                                      href="https://demo.goodlayers.com/features/typography/"
                                    >
                                      Typography
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul> */}
                          </li>

                          <li
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5225"
                            data-size="60"
                          >
                            <a href="/" className="sf-with-ul-pre sf-with-ul">
                              Contact
                            </a>

                            {/* <ul
                              className="sub-menu"
                              // style="display: none;"
                            >
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5264">
                                <a href="https://demo.goodlayers.com/kingster/contact/">
                                  Contact
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5263">
                                <a href="https://demo.goodlayers.com/kingster/contact-2/">
                                  Contact 2
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5262">
                                <a href="https://demo.goodlayers.com/kingster/contact-3/">
                                  Contact 3
                                </a>
                              </li>
                            </ul> */}
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5276"
                            data-size="60"
                          >
                            <a href="/" className="sf-with-ul-pre sf-with-ul">
                              Portfolio
                            </a>

                            {/* <ul
                              className="sub-menu"
                              // style="display: none;"
                            >
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5228">
                                <a className="sf-with-ul-pre sf-with-ul">
                                  Portfolio Grid
                                </a>
                                <ul
                                  className="sub-menu"
                                  // style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5275">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-2-columns/">
                                      Portfolio 2 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5274">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-3-columns/">
                                      Portfolio 3 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5273">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-4-columns/">
                                      Portfolio 4 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5272">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-5-columns/">
                                      Portfolio 5 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5329">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-2-columns-with-frame/">
                                      Portfolio 2 Columns With Frame
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5328">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-3-columns-with-frame/">
                                      Portfolio 3 Columns With Frame
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5327">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-4-columns-with-frame/">
                                      Portfolio 4 Columns With Frame
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5280">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-2-columns-no-space/">
                                      Portfolio 2 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5279">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-3-columns-no-space/">
                                      Portfolio 3 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5278">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-4-columns-no-space/">
                                      Portfolio 4 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5277">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-5-columns-no-space/">
                                      Portfolio 5 Columns No Space
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5231">
                                <a className="sf-with-ul-pre sf-with-ul">
                                  Portfolio Masonry
                                </a>
                                <ul
                                  className="sub-menu"
                                  //  style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5326">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-masonry-4-columns/">
                                      Masonry 4 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5324">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-masonry-3-columns/">
                                      Masonry 3 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5322">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-masonry-2-columns/">
                                      Masonry 2 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5325">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-masonry-4-columns-no-space/">
                                      Masonry 4 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5323">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-masonry-3-columns-no-space/">
                                      Masonry 3 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5321">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-masonry-2-columns-no-space/">
                                      Masonry 2 Columns No Space
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5229">
                                <a className="sf-with-ul-pre sf-with-ul">
                                  Portfolio Modern
                                </a>
                                <ul
                                  className="sub-menu"
                                  // style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5288">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-2-columns/">
                                      Modern 2 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5286">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-3-columns/">
                                      Modern 3 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5284">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-4-columns/">
                                      Modern 4 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5282">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-5-columns/">
                                      Modern 5 Columns
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5287">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-2-columns-no-space/">
                                      Modern 2 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5285">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-3-columns-no-space/">
                                      Modern 3 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5283">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-4-columns-no-space/">
                                      Modern 4 Columns No Space
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5281">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-modern-5-columns-no-space/">
                                      Modern 5 Columns No Space
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5230">
                                <a className="sf-with-ul-pre sf-with-ul">
                                  Portfolio Side Thumbnail
                                </a>
                                <ul
                                  className="sub-menu sub-menu-right"
                                  //   style="display: none;"
                                >
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5289">
                                    <a href="https://demo.goodlayers.com/kingster/portfolio-left-right-large-thumbnail/">
                                      Portfolio Left &amp; Right Large Thumbnail
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5291">
                                    <a href="/">
                                      Portfolio Left Large Thumbnail
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5290">
                                    <a href="/">
                                      Portfolio Right Large Thumbnail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul> */}
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5320"
                            data-size="60"
                          >
                            <a href="/" className="sf-with-ul-pre sf-with-ul">
                              Shop
                            </a>

                            {/* <ul
                              className="sub-menu"
                              // style="display: none;"
                            >
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5315">
                                <a href="/">Woocommerce Page Item</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5319">
                                <a href="/">Shop</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5316">
                                <a href="/">My Account</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5317">
                                <a href="/">Checkout</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5318">
                                <a href="/">Cart</a>
                              </li>
                            </ul> */}
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342"
                            data-size="60"
                          >
                            <a href="/">Gallery</a>
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5268"
                            data-size="60"
                          >
                            <a href="/">Price Table</a>
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5269"
                            data-size="60"
                          >
                            <a href="/">Maintenance</a>
                          </li>

                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5270"
                            data-size="60"
                          >
                            <a href="/">Coming Soon</a>
                          </li>

                          <li
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5220"
                            data-size="60"
                          >
                            <a href="/">404 Page</a>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5735 kingster-mega-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(95, { left: "54.5%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/" className="sf-with-ul-pre sf-with-ul">
                          Academics
                        </a>

                        <div
                          className="sf-mega sf-mega-full"
                          //   style='background-image: url("https://goodlayers.b-cdn.net/kingster/wp-content/uploads/2018/08/mega-menu-bg.jpg"); background-position: right bottom; background-repeat: no-repeat; display: none;'
                        >
                          <div className="sf-mega-section-wrap">
                            <div className="sf-mega-section kingster-column-15">
                              <div className="sf-mega-section-inner menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5739">
                                <a className="sf-with-ul-pre">Undergraduate</a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5736">
                                    <a href="/">Business Administration</a>
                                  </li>

                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5902">
                                    <a href="/">School Of Law</a>
                                  </li>

                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5901">
                                    <a href="/">Engineering</a>
                                  </li>

                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5900">
                                    <a href="/">Medicine</a>
                                  </li>

                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5899">
                                    <a href="/">Art &amp; Science</a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="sf-mega-section kingster-column-15">
                              <div className="sf-mega-section-inner menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5740">
                                <a href="/" className="sf-with-ul-pre">
                                  Graduate Program
                                </a>

                                <ul className="sub-menu">
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5954">
                                    <a href="/">Hospitality Management</a>
                                  </li>

                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5953">
                                    <a href="/">Physics</a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5909">
                                    <a href="/">Chemistry</a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5910">
                                    <a href="/">Music</a>
                                  </li>

                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5920">
                                    <a href="/">Computer Science</a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="sf-mega-section kingster-column-15">
                              <div className="sf-mega-section-inner menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5741">
                                <a href="/" className="sf-with-ul-pre">
                                  Resources
                                </a>

                                {/* <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5911"><a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/">Department Page</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5912"><a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/finance/">Major Page</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5913"><a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/finance/finance-faculty/">Faculty Page</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-personnel menu-item-5919"><a href="https://demo.goodlayers.com/kingster/personnel/john-hagensy-phd/">Single Instructor</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-course menu-item-5955"><a href="https://demo.goodlayers.com/kingster/course/introduction-to-financial-accounting/">Single Course</a></li>
                                </ul> */}
                              </div>
                            </div>

                            <div className="sf-mega-section kingster-column-15">
                              <div className="sf-mega-section-inner menu-item menu-item-type-custom menu-item-object-custom menu-item-5746">
                                <div className="kingster-mega-menu-section-content">
                                  {/* <img src="https://goodlayers.b-cdn.net/kingster/wp-content/uploads/2018/08/mega-menu-logo.png" style="margin-bottom: 13px;" alt=""> */}
                                  <span
                                  //   style="font-size: 14px; font-weight: 500;"
                                  >
                                    Academic offerings include 95 majors, 86
                                    minors, and more than 100 in-major
                                    specializations
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5728 kingster-normal-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(97, { left: "64.3%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/" className="sf-with-ul-pre sf-with-ul">
                          Admissions
                        </a>
                        {/* <ul className="sub-menu" style="display: none;">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5729" data-size="60"><a href="https://demo.goodlayers.com/kingster/apply-to-kingster/">Apply To Kingster</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5918" data-size="60"><a href="https://demo.goodlayers.com/kingster/campus-tour/">Campus Tour</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5730" data-size="60"><a href="https://demo.goodlayers.com/kingster/scholarships/">Scholarships</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5731" data-size="60"><a href="https://demo.goodlayers.com/kingster/athletics/">Athletics</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5732" data-size="60"><a href="https://demo.goodlayers.com/kingster/give-to-kingster/">Give To Kingster</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5917" data-size="60"><a href="https://demo.goodlayers.com/kingster/alumni/">Alumni</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6049" data-size="60"><a href="https://demo.goodlayers.com/kingster/event-calendar/">Event Calendar</a></li>
                          </ul> */}
                      </li>

                      <li
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6036 kingster-normal-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(70, { left: "74.2%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/" className="sf-with-ul-pre sf-with-ul">
                          Courses
                        </a>

                        <ul
                          className="sub-menu"
                          // style="display: none;"
                        >
                          <li
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6029"
                            data-size="60"
                          >
                            <a href="/">Course Search</a>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6035"
                            data-size="60"
                          >
                            <a href="/">Course List 1</a>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6034"
                            data-size="60"
                          >
                            <a href="/">Course List 2</a>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5734 kingster-normal-menu"
                        // onMouseEnter={handleMouseEnter}
                        onMouseEnter={() =>
                          handleMouseEnter(74, { left: "81.9%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/">Athletics</a>
                      </li>

                      <li
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5733 kingster-normal-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(113, { left: "90%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/">University Life</a>
                      </li>
                    </ul>

                    <div
                      className="kingster-navigation-slide-bar"
                      id="kingster-navigation-slide-bar"
                      style={{
                        width: `${slideBarWidth}px`,
                        left: slideBarPosition.left,
                        display: "block",
                        transition: "width 0.3s, left 0.3s",
                      }}
                    ></div>
                  </div>
                  {/* 
                  <div className="kingster-main-menu-right-wrap clearfix ">
                    <div
                      className="kingster-main-menu-search"
                      id="kingster-top-search"
                    >
                      <i className="icon_search"></i>
                    </div>
                  </div> */}
                </div>
                {/* kingster-navigation */}
              </div>
              {/* <! kingster-header-inner */}
            </div>
            {/* kingster-header-container */}
          </header>
          {/* Header Section Ends Here */}

          <div className="kingster-page-wrapper" id="kingster-page-wrapper">
            <div className="gdlr-core-page-builder-body clearfix">
              {/* Slider Section Start Here */}
              <div
                className="gdlr-core-pbf-wrapper"
                style={{ padding: "0px 0px 0px 0px" }}
              >
                <div
                  className="gdlr-core-pbf-background-wrap"
                  style={{ backgroundColor: "#191919" }}
                ></div>

                <Slider className="homepage-slides" {...settings}>
                  {/* Slide 1 */}
                  <div className="single-slide-item hero-area-bg-1">
                    <div className="overlay"></div>
                    <div className="hero-area-content">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div
                            className="col-lg-12"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                          >
                            {/* <div className="section-title">
                              <h6
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                style={{ color: "#fff", marginLeft: "0px" }}
                              >
                                Leading in Agricultural Products and Spices
                              </h6>

                              <h1
                                className="text-left"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                style={{
                                  maxWidth:
                                    window.innerWidth > 991 ? "75%" : "",
                                }}
                              >
                                We are committed to providing you with the
                                highest quality products and exceptional
                                service, no matter where you are in the world.
                              </h1>
                            </div> */}

                            {/* <NavLink
                              to="/about"
                              className="main-btn"
                              data-aos="fade-up"
                              data-aos-duration="1500"
                            >
                              Learn More
                            </NavLink> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="single-slide-item hero-area-bg-2">
                    <div className="overlay"></div>
                    <div className="hero-area-content">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div
                            className="col-lg-12 animate__animated animate__fadeInUp"
                            data-wow-delay=".2s"
                          >
                            {/* <div className="section-title">
                              <h6
                                className="animate__animated animate__fadeInDown"
                                style={{ color: "#fff", marginLeft: "0px" }}
                              >
                                A comprehensive range of Seed Products
                              </h6>

                              <h1
                                className="text-left"
                                style={{
                                  maxWidth:
                                    window.innerWidth > 991 ? "75%" : "",
                                }}
                              >
                                We maintain high standards for product
                                flawlessness at all phases, starting with
                                collect gathering and ending with packaging. We
                                also ensure that products are handled with care
                                and supplied in accordance with international
                                quality standards.
                              </h1>
                            </div> */}

                            {/* <NavLink
                              to="/about"
                              className="main-btn animate__animated animate__fadeInDown"
                            >
                              Learn More
                            </NavLink> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="single-slide-item hero-area-bg-3">
                    <div className="overlay"></div>
                    <div className="hero-area-content">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div
                            className="col-lg-12 animate__animated animate__fadeInUp"
                            data-wow-delay=".2s"
                          >
                            {/* <div className="section-title">
                              <h6
                                className="animate__animated animate__fadeInDown"
                                style={{ color: "#fff", marginLeft: "0px" }}
                              >
                                Robust infrastructure facilities
                              </h6>

                              <h1
                                className="text-left"
                                style={{
                                  maxWidth:
                                    window.innerWidth > 991 ? "75%" : "",
                                }}
                              >
                                The best of infrastructure, processes, planning
                                and people bringing you the best and the most
                                premium products in the business.
                              </h1>
                            </div> */}

                            {/* <NavLink
                              to="/about"
                              className="main-btn animate__animated animate__fadeInDown"
                            >
                              Learn More
                            </NavLink> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div className="single-slide-item hero-area-bg-4">
                    <div className="overlay"></div>
                    <div className="hero-area-content">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div
                            className="col-lg-12 animate__animated animate__fadeInUp"
                            data-wow-delay=".2s"
                          >
                            {/* <div className="section-title">
                              <h6
                                className="animate__animated animate__fadeInDown"
                                style={{ color: "#fff", marginLeft: "0px" }}
                              >
                                Robust infrastructure facilities
                              </h6>

                              <h1
                                className="text-left"
                                style={{
                                  maxWidth:
                                    window.innerWidth > 991 ? "75%" : "",
                                }}
                              >
                                The best of infrastructure, processes, planning
                                and people bringing you the best and the most
                                premium products in the business.
                              </h1>
                            </div> */}

                            {/* <NavLink
                              to="/about"
                              className="main-btn animate__animated animate__fadeInDown"
                            >
                              Learn More
                            </NavLink> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* Slider Section End Here */}

              {/* Info Section Starts here */}
              <div
                className="gdlr-core-pbf-wrapper "
                style={{ padding: "0px 0px 0px 0px" }}
              >
                <div
                  className="gdlr-core-pbf-background-wrap"
                  // style="background-color: #262626 ;"
                ></div>

                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                  <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                    <div
                      className="gdlr-core-pbf-column gdlr-core-column-15 gdlr-core-column-first"
                      data-skin="Column White"
                    >
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js info-wrap  slider-link-1"
                        // style="padding: 70px 0px; height: 283.328px;"
                        data-sync-height="column-height"
                        data-sync-height-center=""
                      >
                        <div
                          className="gdlr-core-sync-height-pre-spaces"
                          // style="padding-top: 10px;"
                        ></div>

                        <div className="gdlr-core-pbf-background-wrap">
                          <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js info-img-1 info-background"
                            data-parallax-speed="0.1"
                          ></div>
                        </div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-with-caption gdlr-core-item-pdlr"
                              // style="padding-bottom: 0px;"
                            >
                              <div className="gdlr-core-column-service-media gdlr-core-media-image">
                                <img
                                  src={InfoImg5}
                                  alt=""
                                  width="40"
                                  height="40"
                                  title="hp2-col-1-icon"
                                />
                              </div>

                              <div className="gdlr-core-column-service-content-wrapper ">
                                <div className="gdlr-core-column-service-title-wrap heading-wrapper">
                                  <h3 className="gdlr-core-column-service-title gdlr-core-skin-title">
                                    University Life
                                  </h3>

                                  <div
                                    className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                    // style="font-size: 17px ;font-weight: 500 ;font-style: normal ;"
                                  >
                                    Overall in here
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          className="gdlr-core-pbf-column-link"
                          href="#"
                          target="_self"
                        ></a>
                      </div>
                    </div>

                    <div
                      className="gdlr-core-pbf-column gdlr-core-column-15"
                      data-skin="Column White"
                    >
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js info-wrap  slider-link-2"
                        // style="padding: 70px 0px; height: 283.328px;"
                        data-sync-height="column-height"
                        data-sync-height-center=""
                      >
                        <div
                          className="gdlr-core-sync-height-pre-spaces"
                          // style="padding-top: 7.5px;"
                        ></div>

                        <div className="gdlr-core-pbf-background-wrap">
                          <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js info-img-2 info-background "
                            // style='background-image: url("https://goodlayers.b-cdn.net/kingster/wp-content/uploads/2018/08/hp2-col-2.jpg"); background-size: cover; background-position: center center; height: 291.981px; transform: translate(0px, -59.5px);'
                            data-parallax-speed="0.1"
                          ></div>
                        </div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-with-caption gdlr-core-item-pdlr"
                              // style="padding-bottom: 0px;"
                            >
                              <div
                                className="gdlr-core-column-service-media gdlr-core-media-image"
                                // style="margin-bottom: 20px;margin-left: auto ;margin-right: auto ;"
                              >
                                <img
                                  src={InfoImg6}
                                  alt=""
                                  width="49"
                                  height="45"
                                  title="hp2-col-2-icon"
                                />
                              </div>

                              <div className="gdlr-core-column-service-content-wrapper">
                                <div className="gdlr-core-column-service-title-wrap heading-wrapper">
                                  <h3
                                    className="gdlr-core-column-service-title gdlr-core-skin-title"
                                    // style="font-size: 19px ;font-weight: 700 ;letter-spacing: 0px ;text-transform: none ;"
                                  >
                                    Graduation
                                  </h3>
                                  <div
                                    className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                    // style="font-size: 17px ;font-weight: 500 ;font-style: normal ;"
                                  >
                                    Getting Diploma
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          className="gdlr-core-pbf-column-link"
                          href="#"
                          target="_self"
                        ></a>
                      </div>
                    </div>

                    <div
                      className="gdlr-core-pbf-column gdlr-core-column-15"
                      data-skin="Column White"
                    >
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js info-wrap  slider-link-3"
                        // style="padding: 70px 0px; height: 283.328px;"
                        data-sync-height="column-height"
                        data-sync-height-center=""
                      >
                        <div
                          className="gdlr-core-sync-height-pre-spaces"
                          // style="padding-top: 8px;"
                        ></div>

                        <div className="gdlr-core-pbf-background-wrap">
                          <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js info-img-3 info-background "
                            // style='background-image: url("https://goodlayers.b-cdn.net/kingster/wp-content/uploads/2018/08/hp2-col-3.jpg"); background-size: cover; background-position: center center; height: 291.981px; transform: translate(0px, -59.5px);'
                            data-parallax-speed="0.1"
                          ></div>
                        </div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-with-caption gdlr-core-item-pdlr"
                              // style="padding-bottom: 0px;"
                            >
                              <div
                                className="gdlr-core-column-service-media gdlr-core-media-image"
                                // style="margin-bottom: 20px;margin-left: auto ;margin-right: auto ;"
                              >
                                <img
                                  src={InfoImg7}
                                  alt=""
                                  width="50"
                                  height="44"
                                  title="hp2-col-3-icon"
                                />
                              </div>

                              <div className="gdlr-core-column-service-content-wrapper">
                                <div className="gdlr-core-column-service-title-wrap heading-wrapper">
                                  <h3
                                    className="gdlr-core-column-service-title gdlr-core-skin-title"
                                    // style="font-size: 19px ;font-weight: 700 ;letter-spacing: 0px ;text-transform: none ;"
                                  >
                                    Athletics
                                  </h3>

                                  <div
                                    className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                    // style="font-size: 17px ;font-weight: 500 ;font-style: normal ;"
                                  >
                                    Sport Clubs
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          className="gdlr-core-pbf-column-link"
                          href="#"
                          target="_self"
                        ></a>
                      </div>
                    </div>

                    <div
                      className="gdlr-core-pbf-column gdlr-core-column-15"
                      data-skin="Column White"
                    >
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js info-wrap  slider-link-4"
                        // style="padding: 70px 0px; height: 283.328px;"
                        data-sync-height="column-height"
                        data-sync-height-center=""
                      >
                        <div
                          className="gdlr-core-sync-height-pre-spaces"
                          // style="padding-top: 9.5px;"
                        ></div>

                        <div className="gdlr-core-pbf-background-wrap">
                          <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js info-img-4 info-background "
                            // style='background-image: url("https://goodlayers.b-cdn.net/kingster/wp-content/uploads/2018/08/hp2-col-4.jpg"); background-size: cover; background-position: center center; height: 291.981px; transform: translate(0px, -59.5px);'
                            data-parallax-speed="0.1"
                          ></div>
                        </div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-with-caption gdlr-core-item-pdlr"
                              // style="padding-bottom: 0px;"
                            >
                              <div className="gdlr-core-column-service-media gdlr-core-media-image">
                                <img
                                  src={InfoImg8}
                                  alt=""
                                  width="41"
                                  height="41"
                                  title="hp2-col-4-icon"
                                />
                              </div>

                              <div className="gdlr-core-column-service-content-wrapper">
                                <div className="gdlr-core-column-service-title-wrap heading-wrapper">
                                  <h3
                                    className="gdlr-core-column-service-title gdlr-core-skin-title"
                                    // style="font-size: 19px ;font-weight: 700 ;letter-spacing: 0px ;text-transform: none ;"
                                  >
                                    Social
                                  </h3>
                                  <div
                                    className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                    // style="font-size: 17px ;font-weight: 500 ;font-style: normal ;"
                                  >
                                    Overall in here
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          className="gdlr-core-pbf-column-link"
                          href="#"
                          target="_self"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Info Section Ends Here */}

              {/* About Us Section Starts Here */}

              <div
                className="gdlr-core-pbf-wrapper "
                style={{ padding: "125px 0px 0px 0px" }}
              >
                <div
                  className="gdlr-core-pbf-background-wrap"
                  style={{ backgroundColor: "#1e2d49" }}
                ></div>

                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                  <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first">
                      <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-item-pdlr"
                              // style="padding-bottom: 20px ;"
                            >
                              <div
                                className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle"
                                // style="border-width: 0px;"
                              >
                                <img
                                  src={Logo2}
                                  alt=""
                                  width="292"
                                  height="40"
                                  title="logo-white"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                              // style="padding-bottom: 20px ;"
                            >
                              <div className="gdlr-core-title-item-title-wrap clearfix">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title about-heading">
                                  About Our University
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="gdlr-core-pbf-column gdlr-core-column-40">
                      <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                              style={{ paddingBottom: "15px" }}
                            >
                              <div
                                className="gdlr-core-text-box-item-content"
                                style={{
                                  fontSize: "23px",
                                  color: "#d8e3fb",
                                }}
                              >
                                <p>
                                  We are one of the largest, most diverse
                                  universities in the USA with over 90,000
                                  students in USA, and a further 30,000 studying
                                  across 180 countries for Kingster University.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                              style={{ paddingBottom: "15px" }}
                            >
                              <div
                                className="gdlr-core-text-box-item-content"
                                style={{
                                  fontSize: "19px",
                                  color: "#ffffff",
                                  fontWeight: "500",
                                }}
                              >
                                <p>
                                  Kingster University was established by John
                                  Smith in 1920 for the public benefit and it is
                                  recognized globally. Throughout our great
                                  history, Kingster has offered access to a wide
                                  range of academic opportunities. As a world
                                  leader in higher education, the University has
                                  pioneered change in the sector.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                              <a
                                className="gdlr-core-button  gdlr-core-button-transparent gdlr-core-left-align gdlr-core-button-no-border"
                                href="/"
                                id="gdlr-core-button-id-1"
                              >
                                <span className="gdlr-core-content">
                                  Read More
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    height="18px"
                                    width="18px"
                                    style={{
                                      fill: "#ffffff",
                                      margin: "5px 0 0 7px",
                                    }}
                                  >
                                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                        style={{
                          margin: "0px 0px -40px 0px",
                          padding: "70px 0px 0px 0px",
                        }}
                      >
                        <div className="gdlr-core-pbf-background-wrap"></div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                          <div className="gdlr-core-pbf-element">
                            <div className="gdlr-core-image-item gdlr-core-center-align gdlr-core-item-pdlr">
                              <div
                                className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-round"
                                style={{ zIndex: "999", position: "relative" }}
                              >
                                <img
                                  src={VideoCover}
                                  width="1320"
                                  height="218"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Us Section Ends Here */}

              {/* Video Section Starts here */}

              <div
                className="gdlr-core-pbf-wrapper video-section "
                style={{ padding: "220px 0px 148px 0px" }}
              >
                <div className="gdlr-core-pbf-background-wrap ">
                  <div
                    className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js video-img"
                    data-parallax-speed="0.1"
                  ></div>

                  <div className="overlay"></div>
                </div>

                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                  <div
                    className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container-custom"
                    style={{ maxWidth: "710px" }}
                  >
                    <div className="gdlr-core-pbf-element">
                      <div
                        className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr"
                        // style="padding-bottom: 40px ;"
                      >
                        <div
                          className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle"
                          // style="border-width: 0px;"
                        >
                          <a
                            className="gdlr-core-lightgallery gdlr-core-js "
                            href="/"
                            data-lg-id="f74f2412-71c8-4710-9a84-33ce44faf49b"
                          >
                            <img
                              src={PlayBtn}
                              alt=""
                              width="82"
                              height="82"
                              title="icon-play"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="gdlr-core-pbf-element">
                      <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr">
                        <div className="gdlr-core-title-item-title-wrap clearfix">
                          <h3
                            className="gdlr-core-title-item-title gdlr-core-skin-title "
                            // style="font-size: 38px ;font-weight: 700 ;letter-spacing: 0px ;text-transform: none ;color: #ffffff ;"
                          >
                            Video Tour in Kingster
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="gdlr-core-pbf-element">
                      <div
                        className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-center-align"
                        // style="padding-bottom: 0px ;"
                      >
                        <div
                          className="gdlr-core-text-box-item-content"
                          // style="font-size: 19px ;font-weight: 500 ;text-transform: none ;color: #ffffff ;"
                        >
                          <p>
                            Take a tour in Kingster and you will find the best
                            university in the state. The video will take you to
                            every places in this university.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Video Section Ends here */}

              {/* Admission Section Starts here */}

              <div
                className="gdlr-core-pbf-wrapper Admission-section"
                style={{ padding: "0px 0px 0px 0px" }}
              >
                <div className="gdlr-core-pbf-background-wrap">
                  <div
                    className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                    // style="background-size: cover; background-repeat: no-repeat; background-position: center center; height: 411px; transform: translate(0px, -487.475px);"
                    data-parallax-speed="0.8"
                  ></div>
                </div>

                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                  <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                    <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                        style={{ minHeight: "575px", height: "650px" }}
                        data-sync-height="height-half"
                      >
                        <div className="gdlr-core-pbf-background-wrap">
                          <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js admission-img-left"
                            data-parallax-speed="0"
                          ></div>
                        </div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content"></div>
                      </div>
                    </div>

                    <div className="gdlr-core-pbf-column gdlr-core-column-30">
                      <div
                        className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                        style={{
                          padding: "80px 120px 55px 90px",
                          height: "650px",
                        }}
                        data-sync-height="height-half"
                        data-sync-height-center=""
                      >
                        <div
                          className="gdlr-core-sync-height-pre-spaces"
                          // style="padding-top: 34.492px;"
                        ></div>

                        <div className="gdlr-core-pbf-background-wrap">
                          <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js admission-img-right"
                            data-parallax-speed="0.1"
                          ></div>
                        </div>

                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                              style={{ paddingBottom: "20px" }}
                            >
                              <div className="gdlr-core-title-item-title-wrap clearfix">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title ">
                                  Apply for Admission
                                </h3>
                              </div>

                              <span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption admission-open">
                                Fall 2019 applications are now open
                              </span>
                            </div>
                          </div>

                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                              // style="padding-bottom: 20px ;"
                            >
                              <div
                                className="gdlr-core-text-box-item-content"
                                // style="font-size: 18px ;text-transform: none ;color: #ffffff ;"
                              >
                                <p>
                                  We don’t just give students an education and
                                  experiences that set them up for success in a
                                  career. We help them succeed in their
                                  career—to discover a field they’re passionate
                                  about and dare to lead it.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="gdlr-core-pbf-element">
                            <div
                              className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                              style={{ paddingBottom: "0px" }}
                            >
                              <a
                                className="gdlr-core-button  gdlr-core-button-solid gdlr-core-left-align gdlr-core-button-no-border"
                                href="/kingster/apply-to-kingster/"
                              >
                                <span className="gdlr-core-content">
                                  Apply Now
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Section Ends here */}

              {/* Footer Section Starts Here */}

              <footer className="">
                <div className="kingster-footer-wrapper ">
                  <div className="kingster-footer-container kingster-container clearfix">
                    <div className="kingster-footer-column kingster-item-pdlr kingster-column-15">
                      <div
                        id="text-2"
                        className="widget widget_text kingster-widget"
                      >
                        <div className="textwidget">
                          <p>
                            <img decoding="async" src={Logo} alt="" />
                            <br />
                            <span
                              className="gdlr-core-space-shortcode"
                              // style="margin-top: 5px ;"
                            ></span>
                            <br />
                            N. H. NO. 8, Killa Pardi,
                            <br />
                            District Valsad,
                            <br />
                            Gujarat, India - (396 125)
                          </p>

                          <p>
                            <span
                              style={{ fontSize: "15px", color: "#ffffff" }}
                            >
                              +91 260 2404300
                            </span>
                            <br />
                            <span
                              className="gdlr-core-space-shortcode"
                              style={{ marginTop: "-20px" }}
                            ></span>
                            <br />
                            <a
                              style={{ fontSize: "15px", color: "#ffffff" }}
                              href="mailto:school.db@vallabhashram.in"
                            >
                              school.db@vallabhashram.in
                            </a>
                          </p>
                          <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-left-align">
                            <div
                              className="gdlr-core-divider-line gdlr-core-skin-divider"
                              style={{
                                borderColor: "#3db166",
                                borderWidth: "2px",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="kingster-footer-column kingster-item-pdlr kingster-column-15">
                      <div
                        id="gdlr-core-custom-menu-widget-2"
                        className="widget widget_gdlr-core-custom-menu-widget kingster-widget"
                      >
                        <h3 className="kingster-widget-title">Our Campus</h3>
                        <span className="clear"></span>
                        <div className="menu-our-campus-container">
                          <ul
                            id="menu-our-campus"
                            className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain"
                          >
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5709 kingster-normal-menu">
                              <a href="#">Acedemic</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5710 kingster-normal-menu">
                              <a href="#">Planning &amp; Administration</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5711 kingster-normal-menu">
                              <a href="#">Campus Safety</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5712 kingster-normal-menu">
                              <a href="#">Office of the Chancellor</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5713 kingster-normal-menu">
                              <a href="#">Facility Services</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5714 kingster-normal-menu">
                              <a href="#">Human Resources</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="kingster-footer-column kingster-item-pdlr kingster-column-15">
                      <div
                        id="gdlr-core-custom-menu-widget-3"
                        className="widget widget_gdlr-core-custom-menu-widget kingster-widget"
                      >
                        <h3 className="kingster-widget-title">Campus Life</h3>
                        <span className="clear"></span>
                        <div className="menu-campus-life-container">
                          <ul
                            id="menu-campus-life"
                            className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain"
                          >
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5715 kingster-normal-menu">
                              <a href="#">Accessibility</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5716 kingster-normal-menu">
                              <a href="#">Financial Aid</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717 kingster-normal-menu">
                              <a href="#">Food Services</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5718 kingster-normal-menu">
                              <a href="#">Housing</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5719 kingster-normal-menu">
                              <a href="#">Information Technologies</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5720 kingster-normal-menu">
                              <a href="#">Student Life</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="kingster-footer-column kingster-item-pdlr kingster-column-15">
                      <div
                        id="gdlr-core-custom-menu-widget-4"
                        className="widget widget_gdlr-core-custom-menu-widget kingster-widget"
                      >
                        <h3 className="kingster-widget-title">Academics</h3>
                        <span className="clear"></span>
                        <div className="menu-academics-container">
                          <ul
                            id="menu-academics"
                            className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain"
                          >
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5721 kingster-normal-menu">
                              <a href="#">Canvas</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5722 kingster-normal-menu">
                              <a href="#">Catalyst</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5723 kingster-normal-menu">
                              <a href="#">Library</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5724 kingster-normal-menu">
                              <a href="#">Time Schedule</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5725 kingster-normal-menu">
                              <a href="#">Apply For Admissions</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5726 kingster-normal-menu">
                              <a href="#">Pay My Tuition</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="kingster-copyright-wrapper">
                  <div className="kingster-copyright-container kingster-container clearfix">
                    <div className="kingster-copyright-left kingster-item-pdlr">
                      Copyright All Right Reserved 2024, GoodLayers
                    </div>
                    <div className="kingster-copyright-right kingster-item-pdlr">
                      <span
                        className="gdlr-core-social-network-item gdlr-core-item-pdb  gdlr-core-none-align gdlr-direction-horizontal"
                        // style="padding-bottom: 0px ;display: block ;"
                      >
                        <a
                          href="#"
                          target="_blank"
                          className="gdlr-core-social-network-icon"
                          title="facebook"
                        >
                          <i className="fa6b fa6-facebook"></i>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="gdlr-core-social-network-icon"
                          title="linkedin"
                        >
                          <i className="fa6b fa6-linkedin"></i>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="gdlr-core-social-network-icon"
                          title="skype"
                        >
                          <i className="fa6b fa6-skype"></i>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="gdlr-core-social-network-icon"
                          title="twitter"
                        >
                          <i className="fa6b fa6-x-twitter"></i>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="gdlr-core-social-network-icon"
                          title="instagram"
                        >
                          <i className="fa6b fa6-instagram"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </footer>

              {/* Footer Section Ends Here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
