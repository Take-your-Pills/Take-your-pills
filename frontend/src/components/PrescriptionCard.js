import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { PrescriptionContext } from "../context/PrescriptionContext";
import { DrugsContext } from "../context/DrugsContext";
import "./PrescriptionCard.css";

const PrescriptionCard = (props) => {
  const { drugs, getDrugs, getSuccess } = useContext(DrugsContext);
  const { getPrescriptionsSuccess, prescriptions } = useContext(
    PrescriptionContext
  );
  const [prescriptionDrugs, setPrescriptionDrugs] = useState([]);

  useEffect(() => {
    axios
      .get(`/drugs/${props.id}`)
      .then((response) => response.data)
      .then((drugsList) => {
        setPrescriptionDrugs(drugsList);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-info">{props.days_left} days left</div>
      <div className="card-info">
        Start date: {props.start_year}-{props.start_month}-{props.start_day}
      </div>
      <div className="card-info">
        {prescriptionDrugs.length && prescriptionDrugs[0].name}
      </div>
      <div className="card-info">
        {prescriptionDrugs.length && prescriptionDrugs[0].duration} days to take
      </div>
      <div className="card-info">
        {prescriptionDrugs.length && prescriptionDrugs[0].times_a_day} per day
      </div>
      <div className="card-info">
        {prescriptionDrugs.length && prescriptionDrugs[0].dose} per take
      </div>
    </div>
  );
};

export default PrescriptionCard;
