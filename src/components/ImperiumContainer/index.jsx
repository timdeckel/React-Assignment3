import styles from "./ImperiumContainer.module.css";
import ContentBody from "../ContentBody";

const ImperiumContainer = ({updateFunction}) => {
  return (
    <div className={styles.ImperiumContainer}>
      <h1>Welcome to the side of the Imperium!</h1>
      <ContentBody faction="Imperium"/>
    </div>
  );
};

export default ImperiumContainer;