import styles from "./ContentBody.module.css";
import ProfileCard from "../ProfileCard";
import { subFactionList } from "../../data/FactionData";
import { useState } from "react";
import SubFactionProfile from "../SubFactionProfile";

const ContentBody = ({ faction }) => {
  const [subPage, setPage] = useState(null);

  const handleClick = (data) => {
    setPage(data);
    console.log(data);
  };

  return (
    <>
      {!subPage && (
        <div className={styles.ContentBody}>
          <div className={styles.Content__Wrapper}>
            {generateProfileCards(faction, handleClick)}
          </div>
        </div>
      )}
      {subPage && getDetailedProfile(subPage)}
    </>
  );
};

const getDetailedProfile = (name) => {
  return (
    <>
      <SubFactionProfile name={name} />
    </>
  );
};

const getFilteredList = (faction) => {
  return subFactionList.filter(
    (subFaction) => subFaction.allegiance === faction
  );
};

export const generateProfileCards = (faction, handleClick) => {
  let filterdList = getFilteredList(faction);
  return filterdList.map((faction, index) => (
    <ProfileCard
      name={faction.name}
      imageUrl={faction.imageURL}
      clickFunction={handleClick}
      key={index}
    />
  ));
};

export default ContentBody;
