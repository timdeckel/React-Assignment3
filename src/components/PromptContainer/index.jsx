import styles from "./PromptContainer.module.css";
import PromptClicky from "../PromptClicky";

const PromptContainer = () => {
  return (
    <div className={styles.prompt__container}>
      <h2>Prompt Container</h2>
      <div className={styles.button__container}>
        <PromptClicky text="Chaos"></PromptClicky>
        <PromptClicky text="Loyalist"></PromptClicky>
      </div>
    </div>
  );
};

export default PromptContainer;
