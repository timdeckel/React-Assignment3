import { getImageURL } from "../../utils/functions";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({name, imageUrl}) => {
  return (
    <>
      <div className={styles.ProfileCard}>
        <p>{name}</p>
        <img src={getImageURL(imageUrl)} alt={name} />
      </div>
    </>
  );
};

export default ProfileCard;