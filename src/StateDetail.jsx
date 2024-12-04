import React from 'react';
import { useParams } from 'react-router-dom';
import { statesData } from './statesData'; // Import states data

function StateDetail() {
  const { number } = useParams(); // Get the number from the URL
  const currentState = statesData.find((state) => state.number === parseInt(number));

  if (!currentState) {
    return <div>State not found</div>;
  }

  return (
    <div>
      <h2>{currentState.name}</h2>
      <p>{currentState.description}</p>
    </div>
  );
}

export default StateDetail;
