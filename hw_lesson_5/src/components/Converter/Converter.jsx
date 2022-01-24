import { useState } from 'react';

export function Converter() {
  const [valueUSD, setValueUSD] = useState();
  const [valueBIN, setValueBIN] = useState();
  const currency = 2.6;

  const onChangeUSD = () => {
    setValueBIN(0);
    setValueBIN(currency * valueUSD);
  };

  const onChangeBIN = () => {
    setValueUSD(0);
    setValueUSD(valueBIN / currency);
  };

  return (
    <div>
      <h3>Live currency converter</h3>
      <div>
        <p>Enter currency in $, USD:</p>
        <input type='text' value={valueUSD} onChange={onChangeUSD} />
      </div>
      <div>
        <p>Enter currency in BYN:</p>
        <input type='text' value={valueBIN} onChange={onChangeBIN} />
      </div>
    </div>
  );
}
