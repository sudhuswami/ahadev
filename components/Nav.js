import React, { Component } from "react";
import Link from "next/link";

class Nav extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <div id="navbar" className="navbar-area navbar-two">
          <div className="neemo-nav">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="container">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/aha-logo.png" alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        About Us
                      </a>
                      <ul className="dropdown-menu web_list">
                        <li>
                          <Link href="/about-us">
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <a className="nav-link">Career</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/coming-soon">
                            <a className="nav-link">Testimonial</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown mega-dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Web Development
                      </a>
                      <div className="dropdown-menu mega-dropdown-menu ">
                        <div className="row">
                          <div className="col-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <h3 className="menu_web_dev">
                              {" "}
                              <Link href="/web-development">
                                <a className="nav-link">Web Development</a>
                              </Link>{" "}
                            </h3>

                            <ul>
                              <li>
                                <Link href="/web-development/php-development/laravel-developer">
                                  <a className="nav-link">Laravel Developers</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/mobile-website-developer">
                                  <a className="nav-link">
                                    Mobile website Development
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/yii-development/">
                                  <a className="nav-link">Yii Development</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/zend-developer">
                                  <a className="nav-link">Zend Development</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/vuejs-developer">
                                  <a className="nav-link">Vue Js</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/wordpress-developer">
                                  <a className="nav-link">
                                    WordPress Development
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/magento-developer">
                                  <a className="nav-link">Magento</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/php-development">
                                  <a className="nav-link">Php Development</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/customised-php">
                                  <a className="nav-link">Customized PHP</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/drupal">
                                  <a className="nav-link">Drupal</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/cakephp">
                                  <a className="nav-link">CakePhp</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/codeigniter">
                                  <a className="nav-link">CodeIgniter</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/smarty">
                                  <a className="nav-link">Smarty</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/php-development/open-cart">
                                  <a className="nav-link">OpenCart</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <h3 className="menu_web_dev">
                              <Link href="/web-development/web-designing">
                                <a className="nav-link">Web Designing</a>
                              </Link>
                            </h3>
                            <ul>
                              <li>
                                <Link href="/web-development/web-designing/bootstrap-developer">
                                  <a className="nav-link">Twitter Bootstrap</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/html-5">
                                  <a className="nav-link">HTML5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/responsive-website-designer">
                                  <a className="nav-link">Responsive Website</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/designshop">
                                  <a className="nav-link">Design Shop</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/photoshop">
                                  <a className="nav-link">Photoshop</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/corel-draw">
                                  <a className="nav-link">Corel Draw</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/web2.0">
                                  <a className="nav-link">Web 2.0</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development/web-designing/mobile-apps-design">
                                  <a className="nav-link">Mobile Apps Design</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <h3 className="menu_web_dev">
                              <a className="nav-link">Hosting Partners</a>
                            </h3>
                            <ul>
                              <li>
                                <Link href="/web-development/hosting-partners">
                                  <a className="nav-link">Hosting Partners</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <h3 className="menu_web_dev">
                              <a className="nav-link">Outsourcing</a>
                            </h3>
                            <ul>
                              <li>
                                <Link href="/hosting-partners">
                                  <a className="nav-link">Outsourcing</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Mobile Apps
                      </a>
                      <ul className="dropdown-menu web_list p-left">
                        <li>
                          <Link href="/mobile-applications/android-development">
                            <a className="nav-link">Android App Development</a>
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link href="/mobile-applications/iphone-development">
                            <a className="nav-link">iPhone App Development</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/mobile-applications/mobile-applications">
                            <a className="nav-link">Hybrid Mobile Apps</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown mega-dropdown">
                      <a
                        title="SEO Services "
                        data-toggle="dropdown"
                        className="dropdown-toggle"
                      >
                        SEO Services <b className="caret"></b>
                      </a>
                      <div className="dropdown-menu mega-dropdown-menu">
                        <div className="row">
                          <div className="col-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <h3 className="menu_web_dev">
                              <a>SEO Services</a>
                            </h3>
                            <ul className="afterbefore">
                              <li>
                                <Link href="/seo-services/on-page-optimization">
                                  <a className="nav-link">
                                    On-Page Optimization
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/off-page-optimization">
                                  <a className="nav-link">
                                    Off-Page Optimization
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/link-building">
                                  <a className="nav-link">Link Building</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/local-listing">
                                  <a className="nav-link">Local Listing</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/google-analytics-and-webmaster">
                                  <a className="nav-link">
                                    Google Analytics And Webmaster
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/panda-penguin-recovery">
                                  <a className="nav-link">
                                    Panda Penguin Recovery
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <h3 className="menu_web_dev">
                              <a>Internet Marketing Services</a>
                            </h3>

                            <ul>
                              <li>
                                <Link href="/seo-services/pay-per-click">
                                  <a className="nav-link">Pay Per Click</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/social-media-optimization">
                                  <a className="nav-link">
                                    Social Media Optimizations
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/email-marketing">
                                  <a className="nav-link">Email Marketing</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/google-adsence">
                                  <a className="nav-link">Google AdSence</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/content-writing">
                                  <a className="nav-link">
                                    Content Writing Services
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="ccol-sm-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <h3 className="menu_web_dev">
                              <a>Our Packages</a>
                            </h3>
                            <ul>
                              <li>
                                <Link href="/seo-services/seo-packages">
                                  <a className="nav-link">SEO Packages</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/why-us">
                                  <a className="nav-link">Why Us</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/seo-services/how-we-do">
                                  <a className="nav-link">How We Do</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/portfolio">
                        <a className="nav-link">Portfolios</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className="nav-link">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
