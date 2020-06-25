import React from 'react';

const DrugCard = (props) => {
  return (
    <div>
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
