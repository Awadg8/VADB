import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Slider from "react-slick"; // For Awards slider

// slider animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo2 from "../Assets/images/logo (2).png";
import InfoImg5 from "../Assets/images/Info/info-img-5.png";
import InfoImg6 from "../Assets/images/Info/info-img-6.png";
import InfoImg7 from "../Assets/images/Info/info-img-7.png";
import InfoImg8 from "../Assets/images/Info/info-img-8.png";
import VideoCover from "../Assets/images/download.jfif";
import PlayBtn from "../Assets/images/play-btn.png";

export default function Main() {
  // const [showAccordion, setShowAccordion] = useState(false);

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
          <div className="kingster-page-wrapper" id="kingster-page-wrapper">
            <div className="gdlr-core-page-builder-body clearfix">
              {/* Header Component */}
              <Header />

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
                          href="/"
                          target="_self"
                        >
                          {" "}
                        </a>
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
                          href="/"
                          target="_self"
                        >
                          {" "}
                        </a>
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
                          href="/"
                          target="_self"
                        >
                          {" "}
                        </a>
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
                          href="/"
                          target="_self"
                        >
                          {" "}
                        </a>
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

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
