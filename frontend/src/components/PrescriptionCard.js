import React, { useEffect, useContext } from 'react';
import { PrescriptionContext } from '../context/PrescriptionContext';
import { DrugsContext } from '../context/DrugsContext';


const PrescriptionCard = (props) => {

  const { drugs, getDrugs, getSuccess } = useContext(DrugsContext);
  const { getPrescriptionsSuccess } = useContext(PrescriptionContext);



    useEffect(() => {
        getDrugs(props.id)
      }, []);


      useEffect(() => {
        if(drugs.length > 0){
            getSuccess()
        }
      }, [drugs.length]);

      useEffect(() => {
        if(drugs.length > 0 && typeof drugs[0].success === "number"){
            getPrescriptionsSuccess(drugs);
        }
      }, [drugs]);


  return (
    <div>
        <div>{props.title}</div>
        <div>{props.success}%</div>
        <div>{props.days_left} days left</div>

    </div>
  );
};

export default PrescriptionCard;