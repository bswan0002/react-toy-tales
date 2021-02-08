import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = (props) => {
  return (
    <div id="toy-collection">
      {props.toys.map((toy) => (
        <ToyCard
          toy={toy}
          addLike={props.addLike}
          donateToy={props.donateToy}
        />
      ))}
    </div>
  );
};

export default ToyContainer;
