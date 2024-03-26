import styles from "./PromptClicky.module.css";
import { getImageURL } from "../../utils/functions";
import Button from "../Button";

const PromptClicky = ({ text, backgroundURL, updateFunction }) => {

  return (
    <>
      <div className={styles.button__background}>
        <img src={getImageURL(backgroundURL)} alt={text + " " + backgroundURL}/>
        <Button ButtonText={text} updatePage={updateFunction}/>
      </div>
    </>
  );
};

export default PromptClicky;
