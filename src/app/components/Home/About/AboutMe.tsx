import React from 'react';
import Heading from "../../Healper/Heading";
import AboutInfoBox from "./AboutInfoBox";
import Image from "next/image";
import styles from "./About.module.css";


const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer} id="About">
      <Heading headingPrimary="Driven to build innovative web solutions." headingSub="Who I Am" />

      <div className={styles.contentGrid}>
        {/* Personal information section */}
        <div>
          <h1 className={styles.headingContainer}>Personal Information</h1>
          <AboutInfoBox text1="First Name : Asia" text2="Last Name : Parveen" />
          <AboutInfoBox text1="Qualification : Bsc." text2="Learn : Programming" />
          <AboutInfoBox text1="Address : Pakistan" text2="Experts : Frameworks" />
          <AboutInfoBox text1="Language : English/Urdu" text2="Freelance : Available" />
          <AboutInfoBox text1="City : Karachi" text2="Skills : Web Developer " />
        </div>
        
        {/* Image section */}
        <Image 
          data-aos="zoom-in" 
          data-aos-anchor-placement="top-center" 
          src="/images/comp2.jpg" 
          alt="About img" 
          width={400} 
          height={400} 
          className={styles.image} 
        />
      </div>
    </div>
  );
};

export default AboutMe;
