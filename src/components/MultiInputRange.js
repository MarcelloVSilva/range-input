import React from 'react'
import RangeInput from './RangeInput';

function MultiInputRange(props) {  
  const {min, max, step, value, onChange, count} = props;
  let arrAux = [];
  for(let i=0; i<count; i++) {
    arrAux.push(i.toString());
  }

  const createRangeInput=(arr)=>{
    return arr.map(item=>
      <RangeInput
        key={item} 
        showInfoChange={false}
        value={value[item]}
        onChange={event=>onChangeSingleInputRange(item, event)} 
        min={min} 
        max={max} 
        step={step}/>
    )
  }

  const onChangeSingleInputRange = (idx, event) => {
    let arrValues = value;
    arrValues[idx] = parseFloat(event.target.value);
    onChange(arrValues);
  }

  return createRangeInput(arrAux);
}

export default MultiInputRange;

