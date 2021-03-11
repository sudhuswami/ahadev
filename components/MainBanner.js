import dynamic from "next/dynamic";
import React, { Component } from "react";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  margin: 20,
  autoplayHoverPause: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
};

class MainBanner extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="main-banner">
        {this.state.display ? (
          <OwlCarousel
            className="partner-slider owl-carousel owl-theme"
            {...options}
          >
            <div className="partner-item">
              <a>
                <img src="/images/slider/slider-1.jpg" alt="partner" />
              </a>
            </div>
            <div className="partner-item">
              <a>
                <img src="/images/slider/slider-2.jpg" alt="partner" />
              </a>
            </div>
            <div className="partner-item">
              <a>
                <img src="/images/slider/slider-3.jpg" alt="partner" />
              </a>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MainBanner;
