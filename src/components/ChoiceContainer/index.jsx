import styles from "./ChoiceContainer.module.css";
import PromptContainer from "../PromptContainer";

const ChoiceContainer = ({updateFunction}) => {
  return (
    <div className={styles.choice__container}>
      <h1>Choose which faction you want to learn about!</h1>
      <PromptContainer updateFunction={updateFunction}/>
    </div>
  );
};



export default ChoiceContainer;
