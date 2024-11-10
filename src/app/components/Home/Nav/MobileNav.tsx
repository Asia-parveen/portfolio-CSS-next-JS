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
        {[
          { text: "Home", href: "/" },
          { text: "About", href: "/about" },
          { text: "Services", href: "#services" },
          { text: "Skills", href: "#skills" },
          { text: "Project", href: "#project" },
          { text: "Contact", href: "/contact" }
        ].map(({ text, href }) => (
          <li key={text} onClick={closeNav}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
        <ImCross onClick={closeNav} className={styles.closeIcon} />
      </ul>
    </div>
  );
};

export default MobileNav;




// import React from "react";
// import Link from "next/link";
// import { ImCross } from "react-icons/im";
// import styles from "./nav.module.css";

// interface MobileNavProps {
//   showNav: boolean;
//   closeNav: () => void;
// }

// const MobileNav: React.FC<MobileNavProps> = ({ closeNav, showNav }) => {
//   return (
//     <div className={`${styles.overlay} ${showNav ? styles.overlayOpen : ""}`}>
//       <ul className={styles.navMenu}>
//         {["Home", "About", "Services", "Skills", "Project", "Contact"].map(
//           (text) => (
//             <li key={text} onClick={closeNav}>
//               <Link href={`#${text}`}>{text}</Link>
//             </li>
//           )
//         )}
//         <ImCross onClick={closeNav} className={styles.closeIcon} />
//       </ul>
//     </div>
//   );
// };

// export default MobileNav;

