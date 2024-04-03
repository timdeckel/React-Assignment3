import styles from "./ImperiumContainer.module.css";
import ContentBody from "../ContentBody";

const ImperiumContainer = ({ updateFunction }) => {
  return (
    <div className={styles.ImperiumContainer}>
      <ContentBody faction="Imperium" />
    </div>
  );
};

export default ImperiumContainer;
