import styles from "./Loader.module.css";

const LoadingIndicator = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingIndicator;
