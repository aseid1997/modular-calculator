/* eslint-disable no-eval */
import React, { useState } from 'react';

const ArithmeticPlugin: React.FC = () => {
  const [result, setResult] = useState<string>('0');

  const handleButtonClick = (value: string) => {
    setResult((prevResult) => {
      if (value === '=') {
        try {
          return eval(prevResult).toString(); 
        } catch {
          return 'Error';
        }
      } else if (value === 'C') {
        return '0';
      } else {
        return prevResult === '0' ? value : prevResult + value;
      }
    });
  };

  return (
    <div className="arithmetic-plugin">
      <h2>Arithmetic</h2>
      <div className="display">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/', '=', 'C'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArithmeticPlugin;
