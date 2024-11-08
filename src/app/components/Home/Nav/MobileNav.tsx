// import React from "react";
// import Link from "next/link";
// import { ImCross } from "react-icons/im";
// import styles from "./nav.module.css";

// interface Prop {
//   showNav: boolean;
//   closeNav: () => void;
// }

// const MobileNav = ({ closeNav, showNav }: Prop) => {
//   const navOpenStyle = showNav ? styles.navMenuOpen : "";
//   const overlayOpenStyle = showNav ? styles.overlayOpen : "";

//   return (
//     <div>
//       {/* Black shade overlay */}
//       <div className={`${styles.overlay} ${overlayOpenStyle}`}></div>
      
//       <ul className={`${styles.navMenu} ${navOpenStyle}`}>
//         <li className={`${styles.navLink} ${styles.navLinkLarge}`}>
//           <Link href="#">Home</Link>
//         </li>
//         <li className={`${styles.navLink} ${styles.navLinkLarge}`}>
//           <Link href="#">About</Link>
//         </li>
//         <li className={`${styles.navLink} ${styles.navLinkLarge}`}>
//           <Link href="#">Services</Link>
//         </li>
//         <li className={`${styles.navLink} ${styles.navLinkLarge}`}>
//           <Link href="#">Portfolio</Link>
//         </li>
//         <li className={`${styles.navLink} ${styles.navLinkLarge}`}>
//           <Link href="#">Skills</Link>
//         </li>
//         <li className={`${styles.navLink} ${styles.navLinkLarge}`}>
//           <Link href="#">Contact</Link>
//         </li>
        
//         {/* Close navbar using cross icon */}
//         <ImCross 
//           onClick={closeNav} 
//           className={styles.closeIcon} 
//         /> 
//       </ul>
//     </div>
//   );
// };

// export default MobileNav;
// ;



import React from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import styles from "./nav.module.css";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeNav, showNav }) => {
  return (
    <div className={`${styles.overlay} ${showNav ? styles.overlayOpen : ""}`}>
      <ul className={styles.navMenu}>
        {["Home", "About", "Services", "Skills", "Project", "Contact"].map(
          (text) => (
            <li key={text} onClick={closeNav}>
              <Link href={`#${text}`}>{text}</Link>
            </li>
          )
        )}
        <ImCross onClick={closeNav} className={styles.closeIcon} />
      </ul>
    </div>
  );
};

export default MobileNav;

