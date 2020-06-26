import React from "react";
import "./DrugCard.css";

const DrugCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div>{props.name}</div>
      <div>{props.times_a_day} times a day</div>
      <div>{props.days_left} days left</div>
      <div>{props.success}% success rate</div>
      <div>Notes:</div>
      <div>{props.notes}</div>
    </div>
  );
};

export default DrugCard;
