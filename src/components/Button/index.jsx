import styles from "./Button.module.css";
// to do, lägg till conditional logic att om knappen har en viss text, visa logoan o så. 


const Button = ({ ButtonText, updatePage }) => {
  const handleClick = () => {
    {ButtonText === "return" ? updatePage(null) : updatePage(ButtonText)}
  }
  return ( 
      <div className={styles.button__body} onClick={handleClick}>
        <p>{ButtonText}</p>
      </div>
  );
};

export default Button;
