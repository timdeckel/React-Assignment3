import styles from "./PromptClicky.module.css";

const PromptClicky = ({ text }) => {
  return (
    <>
      <div className={styles.button__background}>
        <div className={styles.button}>{text}</div>
      </div>
    </>
  );
};

export default PromptClicky;
