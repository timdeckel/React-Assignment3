import styles from "./PromptClicky.module.css";
import { getImageURL } from "../../utils/functions";

const PromptClicky = ({ text, backgroundURL }) => {
  return (
    <>
      <div className={styles.button__background}>
        <img src={getImageURL(backgroundURL)} alt={text + " " + backgroundURL}/>
        <div className={styles.button}>{text}</div>
      </div>
    </>
  );
};

export default PromptClicky;
