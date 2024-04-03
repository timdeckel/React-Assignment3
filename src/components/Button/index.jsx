import styles from "./Button.module.css";

const Button = ({ ButtonText, updatePage, btnStyle, location }) => {
  const getButtonStyling = () => {
    let buttonStyle = styles.button__body;
    if (btnStyle === "headerButton") {
      buttonStyle = styles.header__button;
    }
    return buttonStyle;
  };
  const handleClick = () => {
    console.log("a button has been pressed, here is btntxt: "+ ButtonText + " and here is location" + location)
    {
      location === "home" ? updatePage(null) : updatePage(location);
    }
  };
  return (
    <div className={getButtonStyling()} onClick={handleClick}>
      <p>{ButtonText}</p>
    </div>
  );
};

export default Button;
