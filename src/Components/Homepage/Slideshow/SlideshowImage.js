import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./SlideshowImage.css";
import ImageSlideShowOne from "../../../assets/images/SlideShowImageHomepage/SlideshowImage1.jpg";
import ImageSlideShowTwo from "../../../assets/images/SlideShowImageHomepage/SlideshowImage2.jpg";
import ImageSlideShowThree from "../../../assets/images/SlideShowImageHomepage/SlideshowImage3.jpg";
import ImageSlideShowFour from "../../../assets/images/SlideShowImageHomepage/SlideshowImage4.jpg";

const properties = {
  autoplay: false,
};

const SlideShowImageHomepage = () => {
  return (
    <div className="slideshow__inner">
      <Slide {...properties}>
        {/* {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))} */}
        <div className="each-slide" key="1">
          <div style={{ backgroundImage: `url(${ImageSlideShowOne})` }}></div>
        </div>
        <div className="each-slide" key="2">
          <div style={{ backgroundImage: `url(${ImageSlideShowTwo})` }}></div>
        </div>
        <div className="each-slide" key="3">
          <div style={{ backgroundImage: `url(${ImageSlideShowThree})` }}></div>
        </div>
        <div className="each-slide" key="4">
          <div style={{ backgroundImage: `url(${ImageSlideShowFour})` }}></div>
        </div>
      </Slide>
    </div>
  );
};
export default SlideShowImageHomepage;
