"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";
import styles from "./Review.module.css"; // Import the CSS module

const ReviewSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.carouselWrapper}> {/* Apply the CSS module class */}
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass={styles.carouselItem} // Apply the CSS module class
      >
        <ClientReview
          image="/images/avtor2.jpg"
          name="Asia Parveen"
          role="Next.js Developer"
        />

        <ClientReview
          image="/images/avtor4.jpg"
          name="Parveen"
          role="Web Developer"
        />

        <ClientReview
          image="/images/avtor5.jpg"
          name="Asia"
          role="React Developer"
        />
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
