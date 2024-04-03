import { getImageURL } from "../../utils/functions";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ name, imageUrl, clickFunction }) => {
  const handleClick = () => {
    {
      name === "" ? clickFunction(null) : clickFunction(name);
    }
  };
  return (
    <>
      <div className={styles.ProfileCard} onClick={handleClick}>
        <p >{name}</p>
        <img src={getImageURL(imageUrl)} alt={name} />
      </div>
    </>
  );
};

export default ProfileCard;
