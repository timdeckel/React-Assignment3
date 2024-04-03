import styles from "./SubFactionProfile.module.css";
import { subFactionList } from "../../data/FactionData";

const SubFactionProfile = ({ name }) => {
  const profileData = subFactionList.filter((obj) => obj.name === name)[0];

  return (
    <>
      <div className={styles.subFactionProfile__container}>
        <h1>{profileData.name}</h1>
        <div className={styles.row}>
          <p className={styles.img}>img</p>
          <div className={styles.row__item}>
            <p>{profileData.quote}</p>
            <p>{profileData.allegiance}</p>
            <p>{profileData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const generateProfile = ({ name }) => {
  return subFactionList.filter((obj) => obj.name === name);
};

export default SubFactionProfile;
