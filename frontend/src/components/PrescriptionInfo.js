import React, {useContext} from 'react';
import { DrugsContext } from '../context/DrugsContext';
import DrugCard from './DrugCard'

const PrescriptionInfo = () => {
  
  const { drugs, getDrugs, getSuccess } = useContext(DrugsContext);


  return (
    <div>
      {drugs.map(drug => {
        return <DrugCard 
        {...drug}
        key={drug.id}
        />
      })}
    </div>
  );
};

export default PrescriptionInfo;
