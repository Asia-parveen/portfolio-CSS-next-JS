import React from 'react';
import Heading from '../../Healper/Heading';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Project.module.css';

const Project = () => {
  return (
    <div className={styles.projectSection} id="Project">
      <Heading headingPrimary='Discover My Projects' headingSub='Project' />
      <div className={styles.projectGrid}>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Link href="https://quiz-app-gold-psi-15.vercel.app/">
            <div className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <Image 
                src="/images/3.JPG"
                alt="quizapp"
                width={300}
                height={300}
                className={styles.projectImage} 
              />
            </div>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <Link href="https://countdown-timer-next-js-rho.vercel.app/">
            <div className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <Image 
                src="/images/2.JPG"
                alt="countdowntimmer"
                width={300}
                height={300}
                className={styles.projectImage} 
              />
            </div>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <Link href="https://asia-parveen.github.io/post-Application/">
            <div className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <Image 
                src="/images/4.JPG"
                alt="postapp"
                width={300}
                height={300}
                className={styles.projectImage} 
              />
            </div>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
          <Link href="https://asia-parveen.github.io/calculator-made-project/">
            <div className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <Image 
                src="/images/1.jpg"
                alt="calculator"
                width={300}
                height={300}
                className={styles.projectImage} 
              />
            </div>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="700">
          <Link href="https://asia-parveen.github.io/bulb-on-off-projrct/">
            <div className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <Image 
                src="/images/6.JPG"
                alt="bulb"
                width={300}
                height={300}
                className={styles.projectImage} 
              />
            </div>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="900">
          <Link href="https://asia-parveen.github.io/signup-login-form/">
            <div className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <Image 
                src="/images/5.JPG"
                alt="signupform"
                width={300}
                height={300}
                className={styles.projectImage} 
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
