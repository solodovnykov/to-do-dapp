import styles from "./wrongNetworkMessage.module.scss";

const WrongNetworkMessage = () => {
  return (
    <div className="container-max">
      <div className={styles.wrongNetwork}>
        <span className={styles.wrongIcon} />
        <p className={styles.wrongText}>
          Please connect to the Rinkeby Testnet and reload the page.
        </p>
      </div>
    </div>
  );
};

export default WrongNetworkMessage;
