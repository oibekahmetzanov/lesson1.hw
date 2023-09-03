import React from 'react';
import Heart from '../assort/Rectangle 1672.svg'
const PersonCard = ({ person }) => {
  return (
    <div className="person-card">
     <img src={Heart} alt="" />
      <h2>{person.name}</h2>
      <p>Размер обуви: {person.shoeSize}</p>
    </div>
  );
};

export default PersonCard;