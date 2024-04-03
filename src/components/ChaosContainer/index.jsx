import styles from "./ChaosContainer.module.css";
import ContentBody from "../ContentBody";

const ChaosContainer = ({updateFunction}) => {
  return (
    <div className={styles.chaos__container}>
      <ContentBody faction="Chaos" updateFunction={updateFunction} />
    </div>
  );
};

export default ChaosContainer;
