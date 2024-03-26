import styles from "./Button.module.css";


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
