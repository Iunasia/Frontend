import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  // state to manage current image
  const [current, setCurrent] = useState(0);

  // go to previous image
  function goLeft() {
    if (current === 0) {
      setCurrent(images.length - 1); // go to last image
    } else {
      setCurrent(current - 1);
    }
  }

  // go to next image
  function goRight() {
    if (current === images.length - 1) {
      setCurrent(0); // go to first image
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={goLeft}
      />

      {/* display current image */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="slide"
      />

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={goRight}
      />
    </div>
  );
};