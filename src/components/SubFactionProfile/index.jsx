import styles from "./SubFactionProfile.module.css";
import { subFactionList } from "../../data/FactionData";
const SubFactionProfile = ({ name }) => {
  const profileData = subFactionList.filter((obj) => obj.name === name)[0];

  return (
    <>
      <div className={styles.subFactionProfile__container}>
        <h2>{profileData.name}</h2>
      </div>
    </>
  );
};

const generateProfile = ({ name }) => {
  return subFactionList.filter((obj) => obj.name === name);
};

export default SubFactionProfile;
