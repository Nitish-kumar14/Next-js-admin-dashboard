import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

import React from "react";

const card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle scale={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total User</span>
        <span className={styles.number}> 10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> mor than previous week
        </span>
      </div>
    </div>
  );
};

export default card;
