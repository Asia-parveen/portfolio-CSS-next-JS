import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css"; 


const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroInnerContainer}>
        <div className={styles.heroImageContainer}>
          <div data-aos="zoom-in" className={styles.heroImage}>
            <Image
              src="/images/avtr.png"
              alt="Hero"
              width={300}
              height={300}
              className={styles.heroImage}
            />
          </div>
        </div>
        <div className={styles.heroTextContainer}>
          <h1 data-aos="fade-right" data-aos-delay="400" className={styles.heroGreeting}>
            Hello I&apos;m
          </h1>

          <h1 data-aos="fade-left" data-aos-delay="600" className={styles.heroName}>
            Asia <span className={styles.heroNameHighlight}>Parveen!</span>
          </h1>
          <h1 data-aos="fade-right" data-aos-delay="800" className={styles.heroRole}>
            Software Developer
          </h1>
          <p data-aos="fade-left" data-aos-delay="1000" className={styles.heroDescription}>
            I am a Software Developer with a focus on web and mobile
            applications, currently expanding my expertise in Artificial
            Intelligence and the Metaverse.
          </p>
          <button data-aos="zoom-in" data-aos-delay="1200" className={styles.heroButton}>
            <span className={styles.heroButtonBg}></span>
            <span>
              <a href="#About" className={styles.text}>About Me</a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

 
