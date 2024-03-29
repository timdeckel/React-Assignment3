import styles from "./Button.module.css";
// to do, lägg till conditional logic att om knappen har en viss text, visa logoan o så. 


const Button = ({ ButtonText, updatePage, btnStyle }) => {
  const getButtonStyling = () => {
    let buttonStyle = styles.button__body
    if (btnStyle === 'headerButton') {
      buttonStyle = styles.header__button;
    }
    return buttonStyle;
  }
  const handleClick = () => {
    {ButtonText === 'return' ? updatePage(null) : updatePage(ButtonText)}
  }
  return ( 
      <div className={getButtonStyling()} onClick={handleClick}>
        <p>{ButtonText}</p>
      </div>
  );
};

export default Button;
