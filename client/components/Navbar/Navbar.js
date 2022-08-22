import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className="container-max">
      <div className={styles.navbar}>
        <div className={styles.logo}>TooDoo</div>
        <ul className={styles.iconsWrapper}>
          <li className={styles.searchIcon}></li>
          <li className={styles.notificationIcon}></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
