import React from 'react';
import ContactForm from "./ContactForm";
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>CONTACT ME</h1>
        <p className={styles.headerSubtitle}>SAY HELLO TO ME</p>
      </div>
      <div className={styles.formWrapper}>
        <p className={styles.contactTitle}>Contact me</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
