import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "./Review.module.css";

interface Props {
  image: string;
  name: string;
  role: string;
}

const ClientReview = ({ image, name, role }: Props) => {
  return (
    <div className={styles.clientReviewContainer}>
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        objectFit="contain"
        className={styles.clientImage} // Apply the CSS module class
      />
      <div className={styles.starRating}> {/* Apply the CSS module class */}
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className={styles.clientName}>{name}</h1> {/* Apply the CSS module class */}
      <p className={styles.clientRole}>{role}</p> {/* Apply the CSS module class */}
      <p className={styles.clientReviewText}>
        &quot;Asia&apos;s website design is modern, user-friendly, and perfectly
        tailored to my business needs. The seamless functionality and attention
        to detail exceeded my expectations!&quot;
      </p>
    </div>
  );
};

export default ClientReview;
