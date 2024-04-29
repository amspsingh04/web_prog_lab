import React, { useState } from 'react';

function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to m
      const bmi = weight / (heightInMeters ** 2);
      setBmi(bmi.toFixed(2)); // Round to two decimal places
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        value={weight}
        placeholder="Weight in kg"
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        value={height}
        placeholder="Height in cm"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default Bmi;
