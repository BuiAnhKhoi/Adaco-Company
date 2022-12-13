import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./SlideshowImage.css";
import ImageSlideShowOne from "../../../assets/images/SlideShowImageHomepage/SlideshowImage1.JPG";
import ImageSlideShowTwo from "../../../assets/images/SlideShowImageHomepage/SlideshowImage2.JPG";
import ImageSlideShowThree from "../../../assets/images/SlideShowImageHomepage/SlideshowImage3.JPG";
import ImageSlideShowFour from "../../../assets/images/SlideShowImageHomepage/SlideshowImage4.JPG";

const slideImages = [
  {
    url: ImageSlideShowOne,
  },
  {
    url: ImageSlideShowTwo,
  },
  {
    url: ImageSlideShowThree,
  },
  {
    url: ImageSlideShowFour,
  },
];

const properties = {
  autoplay: false,
};

const SlideShowImageHomepage = () => {
  return (
    <div className="slideshow__inner">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideShowImageHomepage;
