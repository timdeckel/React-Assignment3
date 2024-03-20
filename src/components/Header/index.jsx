import styles from "./Header.module.css";
import IconContainer from "../IconContainer";
import TopNav from "../TopNav";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header__item}>
        <IconContainer></IconContainer>
        <IconContainer></IconContainer>
        <IconContainer></IconContainer>
        <IconContainer></IconContainer>
        <IconContainer></IconContainer>
      </div>
      <div className={styles.center__item}>
        <h1 className={styles.headerHeadline}>Header</h1>
      </div>
      <div className={styles.header__item}>
        <TopNav></TopNav>
      </div>
    </header>
  );
};

export default Header;
