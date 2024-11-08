import React from 'react';
import Heading from '../../Healper/Heading';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="Contact">
      <Heading headingPrimary="Get In Touch With Us" headingSub="Contact Us" />
      <div className={styles.contactGrid}>
        {/* Info content section */}
        <div>
          <p className={styles.infoText}>Get In Touch</p>
          <h1 className={styles.infoHeading}>
            Elevate your <span className={styles.brandHighlight}>Brand</span> to excellence!
          </h1>
          <h1 className={styles.contactEmail}>beautyhealthytips177@gmail.com</h1>
        </div>

        {/* Form content section */}
        <div>
          <div className={styles.formGrid}>
            <input 
              type="text" 
              placeholder="Name" 
              className={styles.inputField} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.inputField} 
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            className={`${styles.inputField} ${styles.subjectInput}`} 
          />
          <textarea 
            rows={4} 
            placeholder="Message" 
            className={`${styles.inputField} ${styles.textArea}`} 
          />
          <button className={styles.submitButton}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
