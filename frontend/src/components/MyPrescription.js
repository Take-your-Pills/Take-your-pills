import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import { PrescriptionContext } from '../context/PrescriptionContext';
import PrescriptionCard from './PrescriptionCard';


const MyPrescription = () => {

  const { prescriptions, getPrescriptions } = useContext(PrescriptionContext);
  const { user, getUser } = useContext(UserContext);


  useEffect(() => {
    getUser()
  }, []);

  useEffect(() => {
    if(user.length > 0){
      getPrescriptions(user[0].id)
    }
  }, [user]);


  return (
    <div>
      {prescriptions.map(prescription => {
        return <PrescriptionCard 
        {...prescription}/>
      })}
    </div>
  );
};

export default MyPrescription;
