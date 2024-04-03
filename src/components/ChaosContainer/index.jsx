import styles from "./ChaosContainer.module.css";
import ContentBody from "../ContentBody";

const ChaosContainer = () => {
  return (
    <div className={styles.ChaosContainer}>
      <ContentBody faction="Chaos" />
    </div>
  );
};

export default ChaosContainer;
