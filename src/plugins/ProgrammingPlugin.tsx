import React, { useState } from 'react';

const ProgrammingPlugin: React.FC = () => {
  const [decimal, setDecimal] = useState<string>('0');
  const [binary, setBinary] = useState<string>('0');
  const [octal, setOctal] = useState<string>('0');
  const [hex, setHex] = useState<string>('0');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDecimal(value);
    setBinary(parseInt(value, 10).toString(2));
    setOctal(parseInt(value, 10).toString(8));
    setHex(parseInt(value, 10).toString(16).toUpperCase());
  };

  return (
    <div className="programming-plugin">
      <h2>Programming</h2>
      <label>
        Decimal:
        <input type="number" value={decimal} onChange={handleInputChange} />
      </label>
      <label>
        Binary:
        <input type="text" value={binary} readOnly />
      </label>
      <label>
        Octal:
        <input type="text" value={octal} readOnly />
      </label>
      <label>
        Hexadecimal:
        <input type="text" value={hex} readOnly />
      </label>
    </div>
  );
};

export default ProgrammingPlugin;
