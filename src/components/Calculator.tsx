import React, { useState } from 'react';
import { parseExpression } from '../utils/parser';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = parseExpression(expression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCalculate();
    } else if (event.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className="result">{result}</div>
      <div className="buttons">
        {['1', '2', '3', '+', '-', '4', '5', '6', '*', '/', '7', '8', '9', '(', ')', '0', '.', '√', '%'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
