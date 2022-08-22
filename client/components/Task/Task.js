import { useEffect, useState } from "react";
import styles from "./task.module.scss";
import randomColor from "randomcolor";

const Task = () => {
  return (
    <li className={styles.taskItem}>
      <div className={styles.titleWrapper}>
        <span
          style={{
            backgroundColor: randomColor({
              luminosity: "light",
              format: "hsl",
            }),
          }}
          className={styles.dot}
        />
        <h2 className={styles.title}>Walk my dog at 1 pm</h2>
      </div>

      <div className={styles.deleteButton}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 3H2.5H10.5"
            stroke="#802B2B"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#fff"
          />
          <path
            d="M9.5 3V10C9.5 10.2652 9.39464 10.5196 9.20711 10.7071C9.01957 10.8946 8.76522 11 8.5 11H3.5C3.23478 11 2.98043 10.8946 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10V3M4 3V2C4 1.73478 4.10536 1.48043 4.29289 1.29289C4.48043 1.10536 4.73478 1 5 1H7C7.26522 1 7.51957 1.10536 7.70711 1.29289C7.89464 1.48043 8 1.73478 8 2V3"
            stroke="#802B2B"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.deleteButtonPath}
          />
        </svg>
      </div>
    </li>
  );
};

export default Task;
