import React from 'react';
import Heading from '../../Healper/Heading';
import ReviewSlider from "./ReviewSlide";
import styles from './Review.module.css';

const Review = () => {
  return (
    <div className={styles.reviewContainer}>
        <Heading headingPrimary='My client Reviews' headingSub='Reviews'/>
        <div className={styles.headingContainer}>
         <ReviewSlider/>
        </div>
    </div>
  );
}

export default Review;
