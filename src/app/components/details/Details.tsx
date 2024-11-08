import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Details.module.css";// Import CSS module

const Detail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          ABOUT ME
        </h1>
        <p className={styles.headerSubtitle}>
          I T &apos; S A - M E , A S I A
        </p>
      </div>

      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>My Background</h1>
        <p className={styles.sectionText}>
          I hold a strong academic background with a Bachelor’s degree in Chemistry and Microbiology...
        </p>
        <p className={styles.sectionText}>
          In addition to my scientific expertise, I am well-versed in computer applications, particularly in MS Office...
        </p>
        <p className={styles.sectionText}>
          I have also completed a professional English language course at PACC...
        </p>
        <p className={styles.sectionText}>
          With a diverse educational background and a passion for continuous growth...
        </p>
      </div>

      <div className={styles.section1}>
        <h1 className={styles.sectionTitle2}>Current Training & Skill Development</h1>
        <p className={styles.sectionText}>
          <span className={styles.highlight}>Web & Mobile App Development</span><br />
          Currently enrolled in a comprehensive Web and Mobile App Development course at <span className={styles.highlight}>Syalni Mass IT Training Center</span>
        </p>
        <p className={styles.sectionText}>
          <span className={styles.highlight}>Web 3.0, Artificial Intelligence (AI), and Metaverse</span><br />
          Pursuing an advanced course at <span className={styles.highlight}>Grosvenor House</span>
        </p>
      </div>

      <div className={styles.projectTitle}>
        <h1>My Latest Projects</h1>
      </div>

      <div className={`${styles.gridContainer} ${styles.mdGrid} ${styles.lgGrid}`}>
        <div className={styles.projectLink}>
          <Link href="https://resume-smoky-six.vercel.app/" target="_blank">
            <Image
              src="/images/cv2.png"
              alt="Resume Website"
              width={350}
              height={900}
              className={styles.projectImage}
            />
          </Link>
        </div>
        <div className={styles.projectLink}>
          <Link href="https://next-js-css-website.vercel.app/" target="_blank">
            <Image
              src="/images/css.png"
              alt="CSS Website"
              width={380}
              height={900}
              className={styles.projectImage}
            />
          </Link>
        </div>
        <div className={styles.projectLink}>
          <Link href="https://asia-parveen.github.io/barber_project" target="_blank">
            <Image
              src="/images/lastproject.png"
              alt="Barber Project Website"
              width={350}
              height={900}
              className={styles.projectImage}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
