import styles from "./ChaosContainer.module.css";
import Button from "../Button";
import ContentBody from "../ContentBody";

const ChaosContainer = ({updateFunction}) => {
  return (
    <div className={styles.ChaosContainer}>
      <h1>Welcome to the side of Chaos!</h1>
      <ContentBody faction="Chaos"/>
    </div>
  );
};

export default ChaosContainer;
