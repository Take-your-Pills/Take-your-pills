import React from "react";

const TempDrug = ({ tempDrug }) => {
  return (
    <div className="temp-durg-info">
      <div className="temp-info">
        <h3>Drug Name:</h3>
        <p>{tempDrug.name}</p>
      </div>
      <div className="temp-info">
        <h3>Duration of the cure:</h3>
        {tempDrug.duration} days
      </div>
      <div>{tempDrug.time_a_day} times per day</div>
      <div className="temp-info">
        <h3>Dose:</h3>
        {tempDrug.dose}
      </div>
      <div className="temp-info">
        <h3>Time take :</h3>
        {tempDrug.hour}
      </div>
      <div className="temp-info">
        <h3>Notes:</h3>
        {tempDrug.notes}
      </div>
    </div>
  );
};

export default TempDrug;
