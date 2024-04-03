import styles from "./PromptContainer.module.css";
import Prompt from "../Prompt";
import { factionList } from "../../data/FactionData";

const PromptContainer = ({updateFunction}) => {
  return (
    <div className={styles.prompt__wrapper}>
      <div className={styles.prompt__container}>
        {generatePrompts(updateFunction)}
      </div>
    </div>
  );
};

const generatePrompts = (updateFunction) => {
  return (
    factionList.map((faction, index) => (
      <Prompt text={faction.factionName} backgroundURL={faction.backgroundURL} updateFunction={updateFunction} key={index}/>
    ))
  );
}


export default PromptContainer;

