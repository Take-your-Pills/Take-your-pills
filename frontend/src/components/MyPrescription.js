import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { PrescriptionContext } from "../context/PrescriptionContext";
import PrescriptionCard from "./PrescriptionCard";
import "./MyPrecription.css";

const MyPrescription = () => {
  const { prescriptions, getPrescriptions } = useContext(PrescriptionContext);
  const { user, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user.length > 0) {
      getPrescriptions(user[0].id);
    }
  }, [user]);

  return (
    <div className="body">
      <button>
        <Link to="/new-prescription">Add Prescription</Link>
      </button>

      {prescriptions.map((prescription) => {
        return <PrescriptionCard {...prescription} key={prescription.id} />;
      })}

      <button>
        <Link to="/prescription-info">More</Link>
      </button>
    </div>
  );
};

export default MyPrescription;
