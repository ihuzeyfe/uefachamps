import React from "react";
import { Data } from "../helpers/Data";
import ClubsItem from "../components/ClubsItem";
import "../style/Clubs.css";

export const Clubs = () => {
  return (
    <div className="clubsCard">
      <h1 className="clubsTitle"> CLUBS </h1>
      <div className="cardClubs">
        {Data.map((clubsItem, key) => {
          return (
            <ClubsItem
              key={key}
              image={clubsItem.image}
              name={clubsItem.name}
              birth={clubsItem.birth}
              content={clubsItem.content}
            />
          );
        })}
      </div>
    </div>
  );
};
