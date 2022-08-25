import styles from "./connectWalletButton.module.scss";

const ConnectWalletButton = () => {
  return (
    <div className="container-max">
      <div className={styles.connectButtonWrapper}>
        <button className={styles.connectButton}>
          Connect Wallet <span className={styles.buttonIcon} />
        </button>

        <p className={styles.description}>
          Hello there, this is decentralized To Do app created with Next.js,
          Solidity and Truffle
        </p>
      </div>
    </div>
  );
};

export default ConnectWalletButton;
