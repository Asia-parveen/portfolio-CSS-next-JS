import React from 'react';
import { BiCheckCircle } from "react-icons/bi";
import styles from "./About.module.css";

interface Props {
    text1: string;
    text2: string;
}

const AboutInfoBox = ({ text1, text2 }: Props) => {
  return (
    <div className={styles.aboutInfoBoxContainer}>
      <div className={styles.infoBoxItem}>
        <BiCheckCircle className={styles.infoBoxIcon} />
        <span className={styles.infoBoxText}>{text1}</span>
      </div>
      <div className={styles.infoBoxItem}>
        <BiCheckCircle className={styles.infoBoxIcon} />
        <span className={styles.infoBoxText}>{text2}</span>
      </div>
    </div>
  );
}

export default AboutInfoBox;
