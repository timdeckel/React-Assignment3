import styles from "./ContentBody.module.css";
import ProfileCard from "../ProfileCard";
import {subFactionList} from "../../data/FactionData"

const ContentBody = ({faction}) => {

  return(
    <>
      <div className={styles.ContentBody}>
        <div className={styles.Content__Wrapper}>
          {generateProfileCards(faction)}
        </div>
      </div>
    </>
  );
};

const getFilteredList = (faction) => {
  return (subFactionList.filter(subFaction => subFaction.allegiance === faction))
}

export const generateProfileCards = (faction) => {
  let filterdList = getFilteredList(faction);
  return (
    filterdList.map((faction, index) => (
      <ProfileCard name={faction.name} imageUrl={faction.imageURL} key={index}/>
    ))
  )
}

export default ContentBody;