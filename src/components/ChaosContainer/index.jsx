import styles from "./ChaosContainer.module.css";
import ContentBody from "../ContentBody";

const ChaosContainer = () => {
  return (
    <div className={styles.ChaosContainer}>
      <h1>Welcome to the side of Chaos!</h1>
      <ContentBody faction="Chaos"/>
    </div>
  );
};

export default ChaosContainer;
