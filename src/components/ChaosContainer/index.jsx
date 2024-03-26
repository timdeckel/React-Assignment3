import styles from "./ChaosContainer.module.css";
import Button from "../Button";

const ChaosContainer = ({updateFunction}) => {
  return (
    <div className={styles.ChaosContainer}>
      <h1>Welcome to the side of Chaos!</h1>
      <Button ButtonText="return" updatePage={updateFunction}/>
    </div>
  );
};

export default ChaosContainer;
