import React, { useState } from "react";

import Logo from "../Assets/images/logo.png";

export default function Header() {
  const [slideBarWidth, setSlideBarWidth] = useState(52);
  const [slideBarPosition, setSlideBarPosition] = useState({ left: "41.5%" });
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMouseEnter = (width, position) => {
    setSlideBarWidth(width);
    setSlideBarPosition(position);
  };

  const handleMouseLeave = () => {
    setSlideBarWidth(52);
    setSlideBarPosition({ left: "41.5%" });
  };

  const handleMobileMenu = () => {
    setShowMobileMenu(true);
  };

  return (
    <>
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
              +91 260 240 4300
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
                    onMouseEnter={() => handleMouseEnter(52, { left: "41.5%" })}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="/" className="sf-with-ul-pre sf-with-ul">
                      Home
                    </a>
                  </li>

                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 kingster-normal-menu"
                    onMouseEnter={() => handleMouseEnter(54, { left: "48%" })}
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
                        <a href="/" className="sf-with-ul-pre sf-with-ul">
                          Features
                        </a>

                        {/* <ul
                      className="sub-menu"
                      // style="display: none;"
                    >
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5219">
                        <a
                          href="/"
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
                          href="/"
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
                          href="/"
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
                          href="/"
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
                    onMouseEnter={() => handleMouseEnter(95, { left: "54.5%" })}
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
                                Academic offerings include 95 majors, 86 minors,
                                and more than 100 in-major specializations
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5728 kingster-normal-menu"
                    onMouseEnter={() => handleMouseEnter(97, { left: "64.3%" })}
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
                    onMouseEnter={() => handleMouseEnter(70, { left: "74.2%" })}
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
                    onMouseEnter={() => handleMouseEnter(74, { left: "81.9%" })}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="/">Athletics</a>
                  </li>

                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5733 kingster-normal-menu"
                    onMouseEnter={() => handleMouseEnter(113, { left: "90%" })}
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

      {/* Mobile Header Starts Here */}
      <div className="kingster-mobile-header-wrap">
        <div
          className="kingster-mobile-header kingster-header-background kingster-style-slide kingster-sticky-mobile-navigation "
          id="kingster-mobile-header"
        >
          <div className="kingster-mobile-header-container kingster-container clearfix">
            <div className="kingster-logo  kingster-item-pdlr">
              <div className="kingster-logo-inner">
                <a className="" href="/">
                  <img src={Logo} alt="" />
                </a>
              </div>
            </div>

            <div className="kingster-mobile-menu-right">
              {/* <div
                className="kingster-main-menu-search"
                id="kingster-mobile-top-search"
              >
                <i className="fa fa-search"></i>
              </div> */}

              <div className="kingster-mobile-menu">
                <a
                  className="kingster-mm-menu-button kingster-mobile-menu-button kingster-mobile-button-hamburger"
                  href="#kingster-mobile-menu"
                  onClick={handleMobileMenu}
                >
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header Ends Here */}

      {showMobileMenu && (
        <div
          className="kingster-mm-menu-wrap kingster-navigation-font mm-menu mm-pagedim-black mm-offcanvas mm-right"
          id="kingster-mobile-menu"
          data-slide="right"
        >
          <div className="mm-panels">
            <div
              className="mm-panel mm-hasnavbar mm-opened mm-current"
              id="menu-main-navigation"
            >
              <div className="mm-navbar">
                <a className="mm-title">
                  <span className="mmenu-custom-close"></span>
                </a>
              </div>
              <ul className="m-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2039 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-5271">
                  <a className="mm-next" href="#mm-1" data-target="#mm-1"></a>
                  <a
                    href="https://demo.goodlayers.com/kingster/"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-2"
                    data-target="#mm-2"
                  ></a>
                  <span className="kingster-mm-menu-blank">Pages</span>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5735">
                  <a className="mm-next" href="#mm-20" data-target="#mm-20"></a>
                  <a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/">
                    Academics
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5728">
                  <a className="mm-next" href="#mm-24" data-target="#mm-24"></a>
                  <a href="https://demo.goodlayers.com/kingster/apply-to-kingster/">
                    Admissions
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6036">
                  <a className="mm-next" href="#mm-25" data-target="#mm-25"></a>
                  <a href="/kingster/course-search/?course-keywords">Courses</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5734">
                  <a href="https://demo.goodlayers.com/kingster/athletics/">
                    Athletics
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5733">
                  <a href="https://demo.goodlayers.com/kingster/university-life/">
                    University Life
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-1">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#menu-main-navigation"
                  data-target="#menu-main-navigation"
                ></a>
                <a className="mm-title" href="#menu-main-navigation">
                  Home
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2039 current_page_item menu-item-6000">
                  <a
                    href="https://demo.goodlayers.com/kingster/"
                    aria-current="page"
                  >
                    Homepage 1
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5999">
                  <a href="https://demo.goodlayers.com/kingster/homepage-2/">
                    Homepage 2
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-2">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#menu-main-navigation"
                  data-target="#menu-main-navigation"
                ></a>
                <a className="mm-title" href="#menu-main-navigation">
                  Pages
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314">
                  <a href="https://demo.goodlayers.com/kingster/about-us/">
                    About KU
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5311">
                  <a className="mm-next" href="#mm-3" data-target="#mm-3"></a>
                  <a href="https://demo.goodlayers.com/kingster/blog-full-right-sidebar-with-frame/">
                    Blog
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5218">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-8"
                    data-target="#mm-8"
                  ></a>
                  <span className="kingster-mm-menu-blank">Features</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5225">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-13"
                    data-target="#mm-13"
                  ></a>
                  <span className="kingster-mm-menu-blank">Contact</span>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5276">
                  <a className="mm-next" href="#mm-14" data-target="#mm-14"></a>
                  <a href="https://demo.goodlayers.com/kingster/portfolio-3-columns/">
                    Portfolio
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5320">
                  <a className="mm-next" href="#mm-19" data-target="#mm-19"></a>
                  <a href="https://demo.goodlayers.com/kingster/woocommerce-page/">
                    Shop
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342">
                  <a href="https://demo.goodlayers.com/kingster/gallery/">
                    Gallery
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5268">
                  <a href="https://demo.goodlayers.com/kingster/price-table/">
                    Price Table
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5269">
                  <a href="https://demo.goodlayers.com/kingster/maintenance/">
                    Maintenance
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5270">
                  <a href="https://demo.goodlayers.com/kingster/coming-soon/">
                    Coming Soon
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5220">
                  <a href="https://demo.goodlayers.com/kingster/404">
                    404 Page
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-3">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-2"
                  data-target="#mm-2"
                ></a>
                <a className="mm-title" href="#mm-2">
                  Blog
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5312">
                  <a className="mm-next" href="#mm-4" data-target="#mm-4"></a>
                  <a href="https://demo.goodlayers.com/kingster/blog-full-right-sidebar-with-frame/">
                    Blog Full
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5307">
                  <a className="mm-next" href="#mm-5" data-target="#mm-5"></a>
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-3-columns-no-space/">
                    Blog Grid
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5313">
                  <a className="mm-next" href="#mm-6" data-target="#mm-6"></a>
                  <a href="https://demo.goodlayers.com/kingster/blog-3-columns-with-frame/">
                    Blog Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5232">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-7"
                    data-target="#mm-7"
                  ></a>
                  <span className="kingster-mm-menu-blank">Single Posts</span>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-4">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-3"
                  data-target="#mm-3"
                ></a>
                <a className="mm-title" href="#mm-3">
                  Blog Full
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5300">
                  <a href="https://demo.goodlayers.com/kingster/blog-full-right-sidebar-with-frame/">
                    Blog Full Right Sidebar With Frame
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5299">
                  <a href="https://demo.goodlayers.com/kingster/blog-full-left-sidebar-with-frame/">
                    Blog Full Left Sidebar With Frame
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5298">
                  <a href="https://demo.goodlayers.com/kingster/blog-full-both-sidebar-with-frame/">
                    Blog Full Both Sidebar With Frame
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5303">
                  <a href="https://demo.goodlayers.com/kingster/blog-full-right-sidebar/">
                    Blog Full Right Sidebar
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5302">
                  <a href="https://demo.goodlayers.com/kingster/blog-full-left-sidebar/">
                    Blog Full Left Sidebar
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5301">
                  <a href="https://demo.goodlayers.com/kingster/blog-full-both-sidebar/">
                    Blog Full Both Sidebar
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-5">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-3"
                  data-target="#mm-3"
                ></a>
                <a className="mm-title" href="#mm-3">
                  Blog Grid
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5310">
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-2-columns/">
                    Blog Grid 2 Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5309">
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-3-columns/">
                    Blog Grid 3 Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308">
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-4-columns/">
                    Blog Grid 4 Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5306">
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-2-columns-no-space/">
                    Blog Grid 2 Columns No Space
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5305">
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-3-columns-no-space/">
                    Blog Grid 3 Columns No Space
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5304">
                  <a href="https://demo.goodlayers.com/kingster/blog-grid-4-columns-no-space/">
                    Blog Grid 4 Columns No Space
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-6">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-3"
                  data-target="#mm-3"
                ></a>
                <a className="mm-title" href="#mm-3">
                  Blog Columns
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5294">
                  <a href="https://demo.goodlayers.com/kingster/blog-2-columns-with-frame/">
                    Blog 2 Columns With Frame
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5293">
                  <a href="https://demo.goodlayers.com/kingster/blog-3-columns-with-frame/">
                    Blog 3 Columns With Frame
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5292">
                  <a href="https://demo.goodlayers.com/kingster/blog-4-columns-with-frame/">
                    Blog 4 Columns With Frame
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5297">
                  <a href="https://demo.goodlayers.com/kingster/blog-2-columns/">
                    Blog 2 Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5296">
                  <a href="https://demo.goodlayers.com/kingster/blog-3-columns/">
                    Blog 3 Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5295">
                  <a href="https://demo.goodlayers.com/kingster/blog-4-columns/">
                    Blog 4 Columns
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5343">
                  <a href="https://demo.goodlayers.com/kingster/blog-3-columns-with-frame-post-format/">
                    Blog Columns With Post Format
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-7">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-3"
                  data-target="#mm-3"
                ></a>
                <a className="mm-title" href="#mm-3">
                  Single Posts
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5339">
                  <a href="https://demo.goodlayers.com/kingster/standard-post-type/">
                    Standard Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5336">
                  <a href="https://demo.goodlayers.com/kingster/a-global-mba-for-the-next-generation-of-business-leaders/">
                    Custom Layout 1
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5338">
                  <a href="https://demo.goodlayers.com/kingster/professor-smith-johny-explains-facebooks-monetization-strategy/">
                    Custom Layout 2
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5332">
                  <a href="https://demo.goodlayers.com/kingster/kingster-public-safety-survey-open-through-nov-30/">
                    Custom Layout 3
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5330">
                  <a href="https://demo.goodlayers.com/kingster/aside-post-format/">
                    Aside Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5331">
                  <a href="https://demo.goodlayers.com/kingster/audio-post-format/">
                    Audio Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5333">
                  <a href="https://demo.goodlayers.com/kingster/gallery-post-format/">
                    Gallery Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5334">
                  <a href="https://demo.goodlayers.com/kingster/image-post-format/">
                    Image Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5335">
                  <a href="https://demo.goodlayers.com/kingster/link-post-format/">
                    Link Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5337">
                  <a href="https://demo.goodlayers.com/kingster/quote-post-format/">
                    Quote Post Format
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5340">
                  <a href="https://demo.goodlayers.com/kingster/video-post-format/">
                    Video Post Format
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-8">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-2"
                  data-target="#mm-2"
                ></a>
                <a className="mm-title" href="#mm-2">
                  Features
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5219">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-9"
                    data-target="#mm-9"
                  ></a>
                  <span className="kingster-mm-menu-blank">Set 1</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5221">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-10"
                    data-target="#mm-10"
                  ></a>
                  <span className="kingster-mm-menu-blank">Set 2</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5222">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-11"
                    data-target="#mm-11"
                  ></a>
                  <span className="kingster-mm-menu-blank">Set 3</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5223">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-12"
                    data-target="#mm-12"
                  ></a>
                  <span className="kingster-mm-menu-blank">Set 4</span>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-9">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-8"
                  data-target="#mm-8"
                ></a>
                <a className="mm-title" href="#mm-8">
                  Set 1
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5233">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/"
                  >
                    Accordions &amp; Toggles
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5234">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/alert-box/"
                  >
                    Alert Box
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5235">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/blockquotes/"
                  >
                    Blockquotes
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5236">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/buttons/"
                  >
                    Buttons
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5237">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/call-to-action/"
                  >
                    Call To Action
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5238">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/column-services/"
                  >
                    Column Services
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5239">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/columns/"
                  >
                    Columns
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-10">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-8"
                  data-target="#mm-8"
                ></a>
                <a className="mm-title" href="#mm-8">
                  Set 2
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5240">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/counters/"
                  >
                    Counters
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5241">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/count-down/"
                  >
                    Count Down
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5242">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/dividers/"
                  >
                    Dividers
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5243">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/dropcaps/"
                  >
                    Dropcaps
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5244">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/featured-boxes/"
                  >
                    Featured Boxes
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5245">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/flip-boxes/"
                  >
                    Flip Boxes
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5246">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/icon-list/"
                  >
                    Icon Lists
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-11">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-8"
                  data-target="#mm-8"
                ></a>
                <a className="mm-title" href="#mm-8">
                  Set 3
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5247">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/icons/"
                  >
                    Icons
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5248">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/images/"
                  >
                    Images
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5249">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/price-table/"
                  >
                    Price Table
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5250">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/promo-boxes/"
                  >
                    Promo Boxes
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5251">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/skill-bar/"
                  >
                    Skill Bar
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5252">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/skill-circle/"
                  >
                    Skill Circle
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-12">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-8"
                  data-target="#mm-8"
                ></a>
                <a className="mm-title" href="#mm-8">
                  Set 4
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5253">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/social-shares/"
                  >
                    Social Shares
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5254">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/stunning-texts/"
                  >
                    Stunning Texts
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5256">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/tabs-vertical/"
                  >
                    Tabs Vertical
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5257">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/testimonial/"
                  >
                    Testimonial
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5258">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/titles/"
                  >
                    Titles
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5259">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://demo.goodlayers.com/features/typography/"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-13">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-2"
                  data-target="#mm-2"
                ></a>
                <a className="mm-title" href="#mm-2">
                  Contact
                </a>
              </div>
              <ul className="sub-menu mm-listview">
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
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-14">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-2"
                  data-target="#mm-2"
                ></a>
                <a className="mm-title" href="#mm-2">
                  Portfolio
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5228">
                  <a className="mm-next" href="#mm-15" data-target="#mm-15"></a>
                  <a>Portfolio Grid</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5231">
                  <a className="mm-next" href="#mm-16" data-target="#mm-16"></a>
                  <a>Portfolio Masonry</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5229">
                  <a className="mm-next" href="#mm-17" data-target="#mm-17"></a>
                  <a>Portfolio Modern</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5230">
                  <a className="mm-next" href="#mm-18" data-target="#mm-18"></a>
                  <a>Portfolio Side Thumbnail</a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-15">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-14"
                  data-target="#mm-14"
                ></a>
                <a className="mm-title" href="#mm-14">
                  Portfolio Grid
                </a>
              </div>
              <ul className="sub-menu mm-listview">
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
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-16">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-14"
                  data-target="#mm-14"
                ></a>
                <a className="mm-title" href="#mm-14">
                  Portfolio Masonry
                </a>
              </div>
              <ul className="sub-menu mm-listview">
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
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-17">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-14"
                  data-target="#mm-14"
                ></a>
                <a className="mm-title" href="#mm-14">
                  Portfolio Modern
                </a>
              </div>
              <ul className="sub-menu mm-listview">
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
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-18">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-14"
                  data-target="#mm-14"
                ></a>
                <a className="mm-title" href="#mm-14">
                  Portfolio Side Thumbnail
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5289">
                  <a href="https://demo.goodlayers.com/kingster/portfolio-left-right-large-thumbnail/">
                    Portfolio Left &amp; Right Large Thumbnail
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5291">
                  <a href="https://demo.goodlayers.com/kingster/portfolio-left-large-thumbnail/">
                    Portfolio Left Large Thumbnail
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5290">
                  <a href="https://demo.goodlayers.com/kingster/portfolio-right-large-thumbnail/">
                    Portfolio Right Large Thumbnail
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-19">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-2"
                  data-target="#mm-2"
                ></a>
                <a className="mm-title" href="#mm-2">
                  Shop
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5315">
                  <a href="https://demo.goodlayers.com/kingster/woocommerce-page/">
                    Woocommerce Page Item
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5319">
                  <a href="https://demo.goodlayers.com/kingster/shop/">Shop</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5316">
                  <a href="https://demo.goodlayers.com/kingster/my-account/">
                    My Account
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5317">
                  <a href="https://demo.goodlayers.com/kingster/checkout/">
                    Checkout
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5318">
                  <a href="https://demo.goodlayers.com/kingster/cart/">Cart</a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-20">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#menu-main-navigation"
                  data-target="#menu-main-navigation"
                ></a>
                <a className="mm-title" href="#menu-main-navigation">
                  Academics
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5739">
                  <a className="mm-next" href="#mm-21" data-target="#mm-21"></a>
                  <a>Undergraduate</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5740">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-22"
                    data-target="#mm-22"
                  ></a>
                  <span className="kingster-mm-menu-blank">
                    Graduate Program
                  </span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5741">
                  <a
                    className="mm-next mm-fullsubopen"
                    href="#mm-23"
                    data-target="#mm-23"
                  ></a>
                  <span className="kingster-mm-menu-blank">Resources</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5746">
                  <span className="kingster-mm-menu-blank">Logo</span>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-21">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-20"
                  data-target="#mm-20"
                ></a>
                <a className="mm-title" href="#mm-20">
                  Undergraduate
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5736">
                  <a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/">
                    Business Administration
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5902">
                  <a href="https://demo.goodlayers.com/kingster/school-of-law/">
                    School Of Law
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5901">
                  <a href="https://demo.goodlayers.com/kingster/engineering/">
                    Engineering
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5900">
                  <a href="https://demo.goodlayers.com/kingster/medicine/">
                    Medicine
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5899">
                  <a href="https://demo.goodlayers.com/kingster/art-science/">
                    Art &amp; Science
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-22">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-20"
                  data-target="#mm-20"
                ></a>
                <a className="mm-title" href="#mm-20">
                  Graduate Program
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5954">
                  <a href="https://demo.goodlayers.com/kingster/hospitality-management/">
                    Hospitality Management
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5953">
                  <a href="https://demo.goodlayers.com/kingster/physics/">
                    Physics
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5909">
                  <span className="kingster-mm-menu-blank">Chemistry</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5910">
                  <span className="kingster-mm-menu-blank">Music</span>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5920">
                  <span className="kingster-mm-menu-blank">
                    Computer Science
                  </span>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-23">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#mm-20"
                  data-target="#mm-20"
                ></a>
                <a className="mm-title" href="#mm-20">
                  Resources
                </a>
              </div>
              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5911">
                  <a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/">
                    Department Page
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5912">
                  <a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/finance/">
                    Major Page
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5913">
                  <a href="https://demo.goodlayers.com/kingster/bachelor-of-science-in-business-administration/finance/finance-faculty/">
                    Faculty Page
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-personnel menu-item-5919">
                  <a href="https://demo.goodlayers.com/kingster/personnel/john-hagensy-phd/">
                    Single Instructor
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-course menu-item-5955">
                  <a href="https://demo.goodlayers.com/kingster/course/introduction-to-financial-accounting/">
                    Single Course
                  </a>
                </li>
              </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-24">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#menu-main-navigation"
                  data-target="#menu-main-navigation"
                ></a>
                <a className="mm-title" href="#menu-main-navigation">
                  Admissions
                </a>
              </div>

              {/* <ul className="sub-menu mm-listview">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5729">
                <a href="https://demo.goodlayers.com/kingster/apply-to-kingster/">
                  Apply To Kingster
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5918">
                <a href="https://demo.goodlayers.com/kingster/campus-tour/">
                  Campus Tour
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5730">
                <a href="https://demo.goodlayers.com/kingster/scholarships/">
                  Scholarships
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5731">
                <a href="https://demo.goodlayers.com/kingster/athletics/">
                  Athletics
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5732">
                <a href="https://demo.goodlayers.com/kingster/give-to-kingster/">
                  Give To Kingster
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5917">
                <a href="https://demo.goodlayers.com/kingster/alumni/">
                  Alumni
                </a>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6049">
                <a href="https://demo.goodlayers.com/kingster/event-calendar/">
                  Event Calendar
                </a>
              </li>
            </ul> */}
            </div>

            <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-25">
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href="#menu-main-navigation"
                  data-target="#menu-main-navigation"
                ></a>

                <a className="mm-title" href="#menu-main-navigation">
                  Courses
                </a>
              </div>

              <ul className="sub-menu mm-listview">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6029">
                  <a href="/kingster/course-search/?course-keywords">
                    Course Search
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6035">
                  <a href="https://demo.goodlayers.com/kingster/course-list-1/">
                    Course List 1
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6034">
                  <a href="https://demo.goodlayers.com/kingster/course-list-2/">
                    Course List 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
