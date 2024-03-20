import styles from "./MainContent.module.css";
import ProfileArticle from "../ProfileArticle";

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <h1>main content</h1>
      <ProfileArticle></ProfileArticle>
    </div>
  );
};

export default MainContent;
