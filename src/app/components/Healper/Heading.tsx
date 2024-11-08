import React from 'react';
import styles from './Healper.module.css';

interface Props {
    headingPrimary: string;
    headingSub: string;
}

const Heading = ({ headingPrimary, headingSub }: Props) => {
  return (
    <div className={styles.headingContainer}>
        <h1 className={styles.headingSub}>{headingSub}</h1>
        <h1 className={styles.headingPrimary}>{headingPrimary}</h1>
    </div>
  );
}

export default Heading;
