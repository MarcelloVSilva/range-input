import React from 'react'
import RangeInput from './RangeInput';

function MultiInputRange(props) {  
  const {min, max, step, value, onChange, count} = props;
  const LTR = "ltr";
  const RTL = "rtl";
  let arrAux = [];
  for(let i=0; i<count; i++) {
    arrAux.push(i.toString());
  }
  
  const onChangeSingleInputRange = (idx, event) => {
    let arrValues = [...value];
    const currentValue = parseFloat(event.target.value);
    let direction = currentValue > arrValues[idx] ? LTR : RTL;
    arrValues[idx] = currentValue;
    onChange(controlValues(arrValues, direction));
  }

  const controlValues = (values, direction) =>{
    values = direction === LTR ? values : values.reverse();

    values.map((item, idx, arr)=>{
      const condition = direction === LTR ? item>arr[idx+1] : item<arr[idx+1]      
      if(condition)
        arr[idx+1] = arr[idx]
      return item
    })
    
    return direction === LTR ? values : values.reverse();
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


  return createRangeInput(arrAux);
}

export default MultiInputRange;

