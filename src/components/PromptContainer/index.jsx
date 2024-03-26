import styles from "./PromptContainer.module.css";
import PromptClicky from "../PromptClicky";
import { factionList } from "../../data/FactionData";

const PromptContainer = ({updateFunction}) => {
  return (
    <div className={styles.prompt__container}>
      <div className={styles.button__container}>
        {generatePrompts(updateFunction)}
      </div>
    </div>
  );
};

const generatePrompts = (updateFunction) => {
  return (
    factionList.map((faction, index) => (
      <PromptClicky text={faction.factionName} backgroundURL={faction.backgroundURL} updateFunction={updateFunction} key={index}/>
    ))
  );
}


export default PromptContainer;

