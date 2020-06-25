import React from 'react';
import MyPillCard from './MyPillCard'


const MyPills = () => {

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  console.log(today)
  return <div>
    <h1>My Pills</h1>

    {prescription.map((prescription) => {
      if (prescription.endDate > today) {
        <MyPillCard
          drugTitle={prescription.drugTitle}
          quantity={prescription.quatity}
          hour={prescription.hour}
          note={prescription.note}
        />
      }
    }
    )}
  </div>;
};

export default MyPills;
