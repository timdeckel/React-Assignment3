import styles from "./Header.module.css";
import Button from "../Button";

const Header = ({updateFunction}) => {
  return (
    <header className={styles.header__container}>
      <Button ButtonText="home" updatePage={updateFunction} location="home" btnStyle='headerButton'/>
      <h2 className={styles.header__headline}>Warhammer Faction Gallery</h2>
    </header>
  );
};

export default Header;
