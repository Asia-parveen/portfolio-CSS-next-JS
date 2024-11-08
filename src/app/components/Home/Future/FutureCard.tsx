import React from 'react';
import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";
import styles from "./Future.module.css";

interface Props {
  title: string;
  subtitle: string;
  hours: string;
  bg: string;
  num: string;
}

const FutureCard = ({ title, subtitle, hours, bg, num }: Props) => {
  const scaleUp = num === '2' ? `${styles.scaleUp} ${styles.scaleUpActive}` : styles.scaleUp;

  return (
    <div className={`${scaleUp} ${styles.card}`}>
      <div className={`${styles.cardHeader} ${bg}`}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardSubtitle}>
          Future {subtitle} plan and more <span className="text-blue-600">grow</span>
        </p>
        <div className={styles.workPractice}>
          <h1 className={styles.workPracticeTime}>{hours}</h1>
          <p className={styles.workPracticeText}>work practice</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterItem}>
          <BiCheckCircle className={styles.cardFooterItemIcon} />
          <p className={styles.cardFooterItemText}>Next.js website</p>
        </div>
        <div className={styles.cardFooterItem}>
          <BiCheckCircle className={styles.cardFooterItemIcon} />
          <p className={styles.cardFooterItemText}>React.js website</p>
        </div>
        <div className={styles.cardFooterItem}>
          <BiCheckCircle className={styles.cardFooterItemIcon} />
          <p className={styles.cardFooterItemText}>Full Stack website</p>
        </div>
        <div className={styles.cardFooterItem}>
          <BiCheckCircle className={styles.cardFooterItemIcon} />
          <p className={styles.cardFooterItemText}>Node.js website</p>
        </div>
        <div className={styles.cardFooterItem}>
          <BiCheckCircle className={styles.cardFooterItemIcon} />
          <p className={styles.cardFooterItemText}>MERN website</p>
        </div>
      </div>

      <button className={`${styles.cardButton} ${bg}`}>
        <Link href="https://github.com/Asia-parveen">Read More</Link>
      </button>
    </div>
  );
}

export default FutureCard;
