import styles from "./MainContent.module.css";
import ProfileItem from "../ProfileItem";

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <h1>main content</h1>
      <ProfileItem></ProfileItem>
    </div>
  );
};

export default MainContent;
