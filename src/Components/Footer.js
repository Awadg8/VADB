import React from "react";

import Logo from "../Assets/images/logo.png";
import ProactiiLogo from "../Assets/images/proactii-logo.png";

export default function Footer() {
  return (
    <>
      {/* Footer Section Starts Here */}

      <footer className="">
        <div className="kingster-footer-wrapper ">
          <div className="kingster-footer-container kingster-container clearfix">
            <div className="kingster-footer-column kingster-item-pdlr kingster-column-15">
              <div id="text-2" className="widget widget_text kingster-widget">
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
                    <span style={{ fontSize: "15px", color: "#ffffff" }}>
                      +91 260 240 4300
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
                      <a href="/">Acedemic</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5710 kingster-normal-menu">
                      <a href="/">Planning &amp; Administration</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5711 kingster-normal-menu">
                      <a href="/">Campus Safety</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5712 kingster-normal-menu">
                      <a href="/">Office of the Chancellor</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5713 kingster-normal-menu">
                      <a href="/">Facility Services</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5714 kingster-normal-menu">
                      <a href="/">Human Resources</a>
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
                      <a href="/">Accessibility</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5716 kingster-normal-menu">
                      <a href="/">Financial Aid</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717 kingster-normal-menu">
                      <a href="/">Food Services</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5718 kingster-normal-menu">
                      <a href="/">Housing</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5719 kingster-normal-menu">
                      <a href="/">Information Technologies</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5720 kingster-normal-menu">
                      <a href="/">Student Life</a>
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
                      <a href="/">Canvas</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5722 kingster-normal-menu">
                      <a href="/">Catalyst</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5723 kingster-normal-menu">
                      <a href="/">Library</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5724 kingster-normal-menu">
                      <a href="/">Time Schedule</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5725 kingster-normal-menu">
                      <a href="/">Apply For Admissions</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5726 kingster-normal-menu">
                      <a href="/">Pay My Tuition</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kingster-copyright-wrapper">
          <div className="kingster-copyright-container kingster-container clearfix">
            <div className="kingster-copyright-left kingster-item-pdlr flex">
              © Copyright All Right Reserved 2024 | Designed with &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="15"
                height="15px"
                style={{ fill: "red", marginTop:"5px" }}
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              &nbsp; By &nbsp;
              <a href="https://proactii.com/" target="_blank" rel="noreferrer">
                <img src={ProactiiLogo} alt="Proactii Logo" width="20" />
              </a>
            </div>

            <div className="kingster-copyright-right kingster-item-pdlr">
              <span
                className="gdlr-core-social-network-item gdlr-core-item-pdb  gdlr-core-none-align gdlr-direction-horizontal"
                // style="padding-bottom: 0px ;display: block ;"
              >
                <a
                  href="https://www.facebook.com/shreevallabhashramofficial/?ref=hl"
                  target="_blank"
                  className="gdlr-core-social-network-icon"
                  title="facebook"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    width="19px"
                    height="19px"
                    style={{ fill: "#fff" }}
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/vallabh_ashram"
                  target="_blank"
                  className="gdlr-core-social-network-icon"
                  title="twitter"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="19px"
                    height="19px"
                    style={{ fill: "#fff" }}
                  >
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/channel/UCUhadVLGTDREGTNv8i6w5Pw"
                  target="_blank"
                  className="gdlr-core-social-network-icon"
                  title="youtube"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="19px"
                    height="19px"
                    style={{ fill: "#fff" }}
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Section Ends Here */}
    </>
  );
}
