import React from 'react';
import Heading from '../../Healper/Heading';
import FutureCard from './FutureCard';
import styles from './Future.module.css';

const Future = () => {
  return (
    <div className={styles.futureSection}>
      <Heading headingPrimary='Where I See Myself' headingSub='Future Goals'/>
      <div className={`${styles.futureGrid} ${styles.headingSpacing}`}>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <FutureCard 
            title="Skill Enhancement" 
            subtitle="Continuous Learning" 
            hours="6 hours"
            num="1"
            bg={styles.bgRed} // Applying red background class from module
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <FutureCard 
            title="Project Development" 
            subtitle="Innovative Solutions" 
            hours="7 hours"
            num="2"
            bg={styles.bgYellow} // Applying yellow background class from module
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <FutureCard 
            title="Community Contribution" 
            subtitle="Open Source Involvement" 
            hours="5 hours"
            num="3"
            bg={styles.bgLightRed} // Applying light red background class from module
          />
        </div>
      </div>
    </div>
  );
}

export default Future;
