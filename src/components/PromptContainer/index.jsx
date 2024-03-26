import styles from "./PromptContainer.module.css";
import PromptClicky from "../PromptClicky";
import { factionList } from "../../data/PromptData";

const PromptContainer = () => {
  return (
    <div className={styles.prompt__container}>
      <div className={styles.button__container}>
        {generatePrompts()}
      </div>
    </div>
  );
};

const generatePrompts = () => {
  return (
    factionList.map((faction, index) => (
      console.log(faction.backgroundURL),
      <PromptClicky text={faction.factionName} backgroundURL={faction.backgroundURL} key={index}></PromptClicky>
    ))
  );
}


export default PromptContainer;

