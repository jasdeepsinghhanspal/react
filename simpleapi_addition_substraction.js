//apical.js
import React, { useState } from 'react';
//very simple api for calculation of addition and substraction
const Calculator=()=> {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseInt(num1) - parseInt(num2);
    setResult(difference);
  };

  const handleReset = () => {
    setResult(0);
    setNum1('');
    setNum2('');
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
