import styles from "./Header.module.css";
import IconContainer from "../IconContainer";
import TopNav from "../TopNav";
import Button from "../Button";

const Header = ({updateFunction}) => {
  return (
    <header className={styles.headerContainer}>
      <Button ButtonText="" updatePage={updateFunction}/>
      <div className={styles.center__item}>
        <h1 className={styles.headerHeadline}>Header</h1>
      </div>
    </header>
  );
};

export default Header;
