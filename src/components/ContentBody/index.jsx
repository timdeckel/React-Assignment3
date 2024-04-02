import styles from "./ContentBody.module.css";
import ProfileCard from "../ProfileCard";
import { subFactionList } from "../../data/FactionData";
import { useState } from "react";
import SubFactionProfile from "../SubFactionProfile";

const ContentBody = ({ faction }) => {
  const [subPage, setPage] = useState(null);

  const handleClick = (data) => {
    setPage(data);
  };

  return (
    <>
      {!subPage && (
        <>
          {faction === "Chaos" && <h1>Welcome to the side of Chaos!</h1>}
          {faction === "Imperium" && (
            <h1>Welcome to the side of the Imperium!</h1>
          )}
          <div className={styles.ContentBody}>
            <div className={styles.Content__Wrapper}>
              {generateProfileCards(faction, handleClick)}
            </div>
          </div>
        </>
      )}
      {subPage && <SubFactionProfile name={subPage} />}
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
