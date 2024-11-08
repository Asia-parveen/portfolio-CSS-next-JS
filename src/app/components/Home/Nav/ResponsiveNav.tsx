// "use client";

// import React, { useState } from "react";
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";
// import styles from "./nav.module.css";

// const ResponsiveNav = () => {
//   const [showNav, setShowNav] = useState(false);

//   const showNavHandler = () => setShowNav(true);
//   const closeNavHandler = () => setShowNav(false);

//   return (
//     <div className={styles.container}>
//       <Nav openNav={showNavHandler} />
//       <MobileNav closeNav={closeNavHandler} showNav={showNav} />
//     </div>
//   );
// };

// export default ResponsiveNav;
"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav closeNav={closeNavHandler} showNav={showNav} />
    </div>
  );
};

export default ResponsiveNav;


