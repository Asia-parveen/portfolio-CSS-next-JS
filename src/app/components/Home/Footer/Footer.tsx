import React from "react";
import { BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      {/* logo part */}
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoText}>
            As<span className={styles.highlight}>i</span>a Pa
            <span className={styles.highlight}>rv</span>een
          </div>
          <h1 className={styles.description}>
            Crafted with passion and dedication. &quot;Empowering ideas, one line of code at a time.&quot;
          </h1>
          <p className={styles.email}>beautyhealthytips177@gmail.com</p>
        </div>

        {/* links part */}
        <div className={styles.linksSection}>
          <h1 className={styles.linksTitle}>Quick Links</h1>
          <p className={styles.link}>
            <Link href="/about">About</Link>
          </p>
          <p className={styles.link}>
            <Link href="#Services">Services</Link>
          </p>
          <p className={styles.link}>
            <Link href="#Project">Projects</Link>
          </p>
          <p className={styles.link}>
            <Link href="#Contact">Contacts</Link>
          </p>
        </div>

        {/* address part */}
        <div className={styles.addressSection}>
          <h1 className={styles.addressTitle}>Address</h1>
          <div className={styles.contactItem}>
            <BiMapPin className={styles.icon} />
            <p className={styles.contactText}>Karachi, Pakistan</p>
          </div>
          <div className={styles.contactItem}>
            <BiEnvelope className={styles.icon} />
            <p className={styles.contactText}>beautyhealthytips@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <BiPhone className={styles.icon} />
            <p className={styles.contactText}>+92 305 9989157</p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &#169; Asia Parveen copyright webdev worries 2024
      </div>
    </div>
  );
};

export default Footer;



// import React from "react";
// import { BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";
// import Link from "next/link";
// import styles from "./Footer.module.css";

// const Footer: React.FC = () => {
//   return (
//     <div className={styles.footer}>
//       {/* logo part */}
//       <div className={styles.container}>
//         <div className={styles.logoSection}>
//           <div className={styles.logoText}>
//             As<span className={styles.highlight}>i</span>a Pa
//             <span className={styles.highlight}>rv</span>een
//           </div>
//           <h1 className={styles.description}>
//             Crafted with passion and dedication. "Empowering ideas, one line of code at a time."
//           </h1>
//           <p className={styles.email}>beautyhealthytips177@gmail.com</p>
//         </div>

//         {/* links part */}
//         <div className={styles.linksSection}>
//           <h1 className={styles.linksTitle}>Quick Links</h1>
//           <p className={styles.link}>
//             <Link href="/about">About</Link>
//           </p>
//           <p className={styles.link}>
//             <Link href="#Services">Services</Link>
//           </p>
//           <p className={styles.link}>
//             <Link href="#Project">Projects</Link>
//           </p>
//           <p className={styles.link}>
//             <Link href="#Contact">Contacts</Link>
//           </p>
//         </div>

//         {/* address part */}
//         <div className={styles.addressSection}>
//           <h1 className={styles.addressTitle}>Address</h1>
//           <div className={styles.contactItem}>
//             <BiMapPin className={styles.icon} />
//             <p className={styles.contactText}>Karachi, Pakistan</p>
//           </div>
//           <div className={styles.contactItem}>
//             <BiEnvelope className={styles.icon} />
//             <p className={styles.contactText}>beautyhealthytips@gmail.com</p>
//           </div>
//           <div className={styles.contactItem}>
//             <BiPhone className={styles.icon} />
//             <p className={styles.contactText}>+92 305 9989157</p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.copyright}>
//         &#169; Asia Parveen copyright webdev worries 2024
//       </div>
//     </div>
//   );
// };

// export default Footer;

