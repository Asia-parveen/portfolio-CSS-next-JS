import React from 'react';
import Image from 'next/image';
import styles from "./Skills.module.css";

interface Props {
  image: string;
  percent: string;
  title: string;
}

const SkillCard = ({ image, percent, title }: Props) => {
  return (
    <div className={styles.card}>
      {/* image */}
      <Image
        src={image}
        width={80}
        height={80}
        alt="skill"
        className={styles.cardImage}
      />
      {/* title */}
      <h1 className={styles.cardTitle}>{title}</h1>
      <div className={styles.cardPercent}>{percent}%</div>
    </div>
  );
};

export default SkillCard;

