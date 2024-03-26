import styles from "./ChoiceContainer.module.css";
import PromptContainer from "../PromptContainer";

const ChoiceContainer = ({updateFunction}) => {
  return (
    <div className={styles.ChoiceContainer}>
      <h1>Choose which faction you want to learn about!</h1>
      <PromptContainer/>
    </div>
  );
};



export default ChoiceContainer;
