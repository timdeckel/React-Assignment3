import styles from "./MainContent.module.css";
import PromptContainer from "../PromptContainer";

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <h1>main content</h1>
      <PromptContainer></PromptContainer>
    </div>
  );
};

export default MainContent;
