import styles from "./ImperiumContainer.module.css";
import ContentBody from "../ContentBody";

const ImperiumContainer = ({ updateFunction }) => {
  return (
    <div className={styles.imperium__container}>
      <ContentBody faction="Imperium" updateFunction={updateFunction}/>
    </div>
  );
};

export default ImperiumContainer;
