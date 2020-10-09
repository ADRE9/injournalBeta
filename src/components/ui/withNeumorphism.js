import React from 'react';


const NeumorphicCard = (ActualCard) => {
  const neuCard = (props) => {
  return (
    <ActualCard
    style={{
    "backgroundColor": "rgb(227, 236, 246)",
    "boxShadow":"-5px -5px 10px rgba(255,255,255,1),5px 5px 10px rgba(0,0,0,0.2)",}}/>
  );
}
return neuCard;
};

export default NeumorphicCard;