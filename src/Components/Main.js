import React, { useState } from "react";

import SliderImg from "../Assets/Slider1.png";
import Logo from "../Assets/logo.png";

export default function Main() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [slideBarWidth, setSlideBarWidth] = useState(52);
  const [slideBarPosition, setSlideBarPosition] = useState({ left: "48%" });

  const handleMouseEnter = (width, position) => {
    setSlideBarWidth(width);
    setSlideBarPosition(position);
  };

  const handleMouseLeave = () => {
    setSlideBarWidth(52);
    setSlideBarPosition({ left: "48%" });
  };

  return (
    <div className="page-template-default page page-id-399 theme-kingster gdlr-core-body woocommerce-js tribe-js kingster-body kingster-body-front kingster-full  kingster-with-sticky-navigation  kingster-blockquote-style-1 gdlr-core-link-to-lightbox">
      <div
        className="kingster-body-outer-wrapper mm-page mm-slideout"
        id="mm-0"
      >
        <div className="kingster-body-wrapper clearfix  kingster-with-frame">
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
                  contact@VallabhAshram.edu
                  <svg
                    className="contact-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  +1-3435-2356-222
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
                          handleMouseEnter(52, { left: "48%" })
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
                          handleMouseEnter(54, { left: "54.2%" })
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
                          handleMouseEnter(95, { left: "59.8%" })
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
                          handleMouseEnter(97, { left: "68.5%" })
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
                          handleMouseEnter(70, { left: "77.8%" })
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
                          handleMouseEnter(74, { left: "84.5%" })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/">Athletics</a>
                      </li>

                      <li
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5733 kingster-normal-menu"
                        onMouseEnter={() =>
                          handleMouseEnter(113, { left: "92%" })
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
          {/* header */}

          <div className="kingster-page-wrapper" id="kingster-page-wrapper">
            <div className="gdlr-core-page-builder-body clearfix">
              <div
                className="gdlr-core-pbf-wrapper "
                // style="padding: 0px 0px 0px 0px;"
              >
                <div
                  className="gdlr-core-pbf-background-wrap"
                  // style="background-color: #191919 ;"
                ></div>

                <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                  <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                    <div className="gdlr-core-pbf-element">
                      <div className="gdlr-core-revolution-slider-item gdlr-core-item-pdlr gdlr-core-item-pdb ">
                        <img src={SliderImg} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
