import React, {useState} from 'react';
import MultiInputRange from './components/MultiInputRange';

const styles = {
  showValues: {
    background: "black",
    color: "white",
    width: "fit-content",
    padding: "10px"
  }
};

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(5);
  const [rangeInputValue, setRangeInputValue] = useState([10, 20, 30, 40, 50]);

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

  const onChange = (values) => {
    console.log([...values]);
    setRangeInputValue([...values]);
  }

  return (<>
      Min: <input id="Min" type="number" placeholder="min" value={min} onChange={handleChange}/>
      Max: <input id="Max" type="number" placeholder="max"value={max} onChange={handleChange}/>
      Step: <input id="Step" type="number" placeholder="step" value={step} onChange={handleChange}/>
      <MultiInputRange 
        count={5}
        onChange={onChange}
        value={rangeInputValue}
        min={min} 
        max={max} 
        step={step}/>
      <div style={styles.showValues}>
        MultiInputRange.value: [{rangeInputValue.map((value, idx, arr)=>{
          const handleComma = idx<arr.length-1 ? ', ':'';
          return `${value}${handleComma}`;
        })}]
      </div>
    </>
  );
}

export default App;
