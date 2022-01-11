import React from "react";
import CardMui from "../organism/cards/CardMui";

interface Books {
  finishedReading: {
    image: string;
    name: string;
    author: string;
    time: string;
  }[];
}

const MainFinished = (props:Books) => {
  return (
    <div>
      <CardMui details={props.finishedReading} />
    </div>
  );
};

export default MainFinished;
