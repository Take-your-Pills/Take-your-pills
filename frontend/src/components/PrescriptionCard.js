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
    <div className="prescription-card">
      <div className="prescription-card-title">{props.title}</div>
      <div className="prescription-card-info">{props.days_left} days left</div>
      <div className="prescription-card-info">
        Start date: {props.start_year}-{props.start_month}-{props.start_day}
      </div>
      <div className="prescription-card-info">
        {prescriptionDrugs.length && prescriptionDrugs[0].name}
      </div>
      <div className="prescription-card-info">
        {prescriptionDrugs.length && prescriptionDrugs[0].times_a_day} times a day
      </div>
      <div className="prescription-card-info">
        dosage :{prescriptionDrugs.length && prescriptionDrugs[0].dose}
      </div>
    </div>
  );
};

export default PrescriptionCard;
