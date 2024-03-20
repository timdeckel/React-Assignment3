import styles from "./ContentBody.module.css";
import MainContent from "../MainContent";

const ContentBody = () => {
  return (
    <div className={styles.ContentBody}>
      <MainContent></MainContent>
    </div>
  );
};

export default ContentBody;
