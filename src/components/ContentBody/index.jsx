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
          {faction === "Imperium" && (<h1>Welcome to the side of the Imperium!</h1>)}
          <div className={styles.content__body}>
            <div className={styles.content__wrapper}>
              {generateProfileCards(faction, handleClick)}
            </div>
          </div>
        </>
      )}
      {subPage && <SubFactionProfile name={subPage} updateFunction={setPage}/>}
    </>
  );
};

export const generateProfileCards = (faction, handleClick) => {
  const filterdList = subFactionList.filter((subFaction) => subFaction.allegiance === faction);
  return filterdList.map((subfaction, index) => (
    <ProfileCard
      name={subfaction.name}
      imageUrl={subfaction.imageURL}
      clickFunction={handleClick}
      key={index}
    />
  ));
};

export default ContentBody;
