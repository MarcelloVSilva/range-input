import React from 'react';
import RangeInput from './RangeInput';

const styles = {
  container: {
    border: "1px black solid",
    padding: "5px",
    margin: "1em",
    backgroundColor: "rgb(238, 238, 238)",
    borderRadius: "3px"
  }
};

function DoubleInputRange(props) {
  const {min, max, step, value, onChange} = props;

  const onChangeSingleInputRange = (idx, event) => {
    let arrValues = value;
    arrValues[idx] = parseFloat(event.target.value);
    onChange(controlValues(idx, arrValues));
  }

  const controlValues = (idx, values) =>{
    if(values[0]>values[1])
      values[(idx - 1)*(-1)] = values[idx];
    return values;
  }

  return (
    <div style={styles.container}>
      <RangeInput 
        showInfoChange={false}
        value={value[0]}
        onChange={event=>onChangeSingleInputRange(0, event)} 
        min={min} 
        max={max} 
        step={step}/>
      <RangeInput 
        showInfoChange={false}
        value={value[1]}
        onChange={event=>onChangeSingleInputRange(1, event)} 
        min={min} 
        max={max} 
        step={step}/>
    </div>
  )
}

export default DoubleInputRange;
