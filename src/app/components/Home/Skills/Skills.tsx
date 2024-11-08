import React from 'react';
import Heading from "../../Healper/Heading";
import SkillCard from "./SkillCards";
import styles from "./Skills.module.css";

const Skill = () => {
  return (
    <div className={styles.container} id="Skills">
      <Heading headingPrimary='Explor My skills' headingSub='My skills' />
      <div className={styles.gridWrapper}>
        {/* put my skill card here */}
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay200}`}>
          <SkillCard image="/images/tailwind.png" percent="90" title="Tailwind css" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay400}`}>
          <SkillCard image="/images/js.png" percent="90" title="JavaScript" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay600}`}>
          <SkillCard image="/images/react.png" percent="80" title="React js" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay800}`}>
          <SkillCard image="/images/nexjs.png" percent="70" title="next js" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay1000}`}>
          <SkillCard image="/images/html1.png" percent="95" title="HTML" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay1200}`}>
          <SkillCard image="/images/css2.png" percent="90" title="CSS" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay1400}`}>
          <SkillCard image="/images/bootst.png" percent="90" title="Bootstrep" />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperDelay1600}`}>
          <SkillCard image="/images/typ1.png" percent="90" title="TypeScript" />
        </div>
      </div>
    </div>
  )
}

export default Skill;
