import React from 'react';
import PrescriptionCard from './PrescriptionCard'
import { Link } from "react-router-dom";




const MyPrescription = () => {

  //[{}]



  let duration = Math.max(prescriptions.map((drug) => {
    return drug.duration
  }))

  let startDate = prescriptions.map((drug) => {
    return drug.startDate
  })

  //DAYS LEFT
  let daysleft = () => {
    return (startDate + duration) - today()
  }

  let dosesShouldbeTaken = prescription.map((drug) => {
    return (
      ((today() - drug.startDate) / drug.duration) * drug.totalDoses
    )
  })

  let totalDosesShouldbeTaken = dosesShouldbeTaken.reduce(function (a, b) {
    return a + b;
  }, 0);

  let dosesActuallyTaken = prescription.map((drug) => {
    return drugs.dosesTakenSoFar
  })

  let totalDosesActuallyTaken = dosesActuallyTaken.reduce(function (a, b) {
    return a + b;
  }, 0)




  //SUCCESS  RATE
  let successRate = () => {
    return (totalDosesActuallyTaken / totalDosesShouldbeTaken) * 100
  }


  return (
    <div>
      <button><Link to='/new-prescription'>Add Prescription</Link></button>
      <PrescriptionCard
        daysleft={this.daysleft}
        successRate={this.successRate}
      />
    </div>
  )
};

export default MyPrescription;
