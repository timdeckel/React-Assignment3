import styles from "./ChaosContainer.module.css";
import ContentBody from "../ContentBody";

const ChaosContainer = ({updateFunction}) => {
  return (
    <div className={styles.ChaosContainer}>
      <ContentBody faction="Chaos" updateFunction={updateFunction} />
    </div>
  );
};

export default ChaosContainer;
