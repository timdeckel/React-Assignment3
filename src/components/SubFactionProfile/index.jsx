import styles from "./SubFactionProfile.module.css";
import { subFactionList } from "../../data/FactionData";
import { getImageURL } from "../../utils/functions";
import Button from "../Button"

const SubFactionProfile = ({ name, updateFunction }) => {
  const profileData = subFactionList.filter((obj) => obj.name === name)[0];
  return (
    <>
      <div className={styles.breadcrumb__button}>
        <Button ButtonText={"back"} updatePage={updateFunction} location={null}/>
      </div>
      <div className={styles.subFactionProfile__container}>
        <h1>{profileData.name}</h1>
        <div className={styles.row}>
           <img className={styles.img} src={getImageURL(profileData.imageURL)} alt={name} />
          <div className={styles.row__item}>
            <p>Qoute: {profileData.quote}</p>
            <p>Allegiance: {profileData.allegiance}</p>
            <p>{profileData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubFactionProfile;
