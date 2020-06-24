import React, { useEffect, useContext, useRef } from 'react';
import { PrescriptionContext } from '../context/PrescriptionContext';

const PrescriptionCard = (props) => {

    const { prescriptions } = useContext(PrescriptionContext);

  let daysLeft = null

    useEffect(() => {
          const end_year = Number(props.end_year)
          const end_month = Number(props.end_month)
          const end_day = Number(props.end_day)
    
          const now_year = Number(new Date().getFullYear())
          const now_month = Number(new Date().getMonth() + 1)
          const now_day = Number(new Date().getDate())
    
          const oneDay = 24 * 60 * 60 * 1000;
          const now = new Date(now_year, now_month, now_day );
          const end_date = new Date(end_year, end_month, end_day);
    
          daysLeft = Math.round(Math.abs((now - end_date) / oneDay));
      }, [prescriptions]);

      console.log(daysLeft)
  return (
    <div>
        <div>{props.title}</div>
        <div>{daysLeft}</div>
    </div>
  );
};

export default PrescriptionCard;