import styles from "./Button.module.css";

const Button = ({ ButtonText, updatePage, btnStyle }) => {
  const getButtonStyling = () => {
    let buttonStyle = styles.button__body;
    if (btnStyle === "headerButton") {
      buttonStyle = styles.header__button;
    }
    return buttonStyle;
  };
  const handleClick = () => {
    {
      ButtonText === "return" ? updatePage(null) : updatePage(ButtonText);
    }
  };
  return (
    <div className={getButtonStyling()} onClick={handleClick}>
      <p>{ButtonText}</p>
    </div>
  );
};

export default Button;
