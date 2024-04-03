import styles from "./Prompt.module.css";
import { getImageURL } from "../../utils/functions";
import Button from "../Button";

const Prompt = ({ text, backgroundURL, updateFunction }) => {
  return (
    <>
      <div className={styles.prompt__background}>
        <img
          src={getImageURL(backgroundURL)}
          alt={text + " and name of background is " + backgroundURL}
        />
        <Button ButtonText={text} updatePage={updateFunction} location={text} />
      </div>
    </>
  );
};

export default Prompt;
