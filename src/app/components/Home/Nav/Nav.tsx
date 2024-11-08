import React from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./nav.module.css";

interface NavProps {
  openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          As<span className={styles.logoHighlight}>i</span>a Pa
          <span className={styles.logoHighlight}>rv</span>een
        </div>
        <ul className={`${styles.navLinks} ${styles.navLinksLarge}`}>
          {["Home", "About", "Services", "Skills", "Project", "Contact"].map(
            (text) => (
              <li key={text} className={styles.navLink}>
                {/* For "About" and "Contact", link to their respective pages */}
                {text === "About" || text === "Contact" ? (
                  <Link href={`/${text.toLowerCase()}`}>{text}</Link>
                ) : (
                  <Link href={`#${text}`}>{text}</Link>
                )}
              </li>
            )
          )}
        </ul>
        <div className="flex items-center space-x-6">
          <Link href="https://www.linkedin.com/in/asia-parveen-258a952a7/">
            <button className={styles.linkedinButton}>
              <span className={styles.linkedinButtonText}>Linkedin</span>
            </button>
          </Link>
          <HiBars3BottomRight
            onClick={openNav}
            className={styles.burgerMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;



// import React from "react";
// import Link from "next/link";
// import { HiBars3BottomRight } from "react-icons/hi2";
// import styles from "./nav.module.css";

// interface NavProps {
//   openNav: () => void;
// }

// const Nav: React.FC<NavProps> = ({ openNav }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.logo}>
//           As<span className={styles.logoHighlight}>i</span>a Pa
//           <span className={styles.logoHighlight}>rv</span>een
//         </div>
//         <ul className={`${styles.navLinks} ${styles.navLinksLarge}`}>
//           {["Home", "About", "Services", "Skills", "Project", "Contact"].map(
//             (text) => (
//               <li key={text} className={styles.navLink}>
//                 <Link href={`#${text}`}>{text}</Link>
//               </li>
//             )
//           )}
//         </ul>
//         <div className="flex items-center space-x-6">
//           <Link href="https://www.linkedin.com/in/asia-parveen-258a952a7/">
//             <button className={styles.linkedinButton}>
//               <span className={styles.linkedinButtonText}>Linkedin</span>
//             </button>
//           </Link>
//           <HiBars3BottomRight
//             onClick={openNav}
//             className={styles.burgerMenu}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;
