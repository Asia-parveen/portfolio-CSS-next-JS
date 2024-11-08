import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from "./services.module.css";

interface Props {
  image: string;
  title: string;
  descrpption: string;
}

const ServiceCard = ({ image, title, descrpption }: Props) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={80} height={80} className={styles.cardImage} />
      <div className={styles.textCenter}>
        {/* title */}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{descrpption}</p>
        <button className={styles.learnMoreButton}><Link href="https://github.com/Asia-parveen"> Learn More </Link></button>

        
       
      </div>
    </div>
  );
}

export default ServiceCard;
