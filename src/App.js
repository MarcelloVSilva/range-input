import React, {useState} from 'react';
import RangeInput from './components/RangeInput';

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(5);
  const [rangeInputValue, setRangeInputValue] = useState(50);

  const handleChange = event => {
    let {id, value} = event.target;
    value = parseFloat(value);
    switch (id) {
      case "Min":
        setMin(value);
        break;
      case "Max":
        setMax(value); 
        break;
      case "Step":
        setStep(value); 
        break;
      default:
        break;
    }
  };

  return (<>
      Min: <input id="Min" type="number" placeholder="min" value={min} onChange={handleChange}/>
      Max: <input id="Max" type="number" placeholder="max"value={max} onChange={handleChange}/>
      Step: <input id="Step" type="number" placeholder="step" value={step} onChange={handleChange}/>
      <RangeInput value={rangeInputValue} setValue={setRangeInputValue} min={min} max={max} step={step}/>
      <h1>R$: {rangeInputValue}</h1>
    </>
  );
}

export default App;
