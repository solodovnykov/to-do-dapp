import styles from "./mainText.module.scss";

const MainText = () => {
  return (
    <div className="container">
      <div className={styles.mainText}>
        <h1 className={styles.mainTextWrapper}>
          Hello, Anton! <div className={styles.emoji}></div>
        </h1>
      </div>
    </div>
  );
};

export default MainText;
