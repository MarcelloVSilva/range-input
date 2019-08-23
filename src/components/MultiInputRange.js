import React, {useState, useEffect} from 'react'
import RangeInput from './RangeInput';

function MultiInputRange(props) {  
  const {min, max, step, multiInputRangeValues, onChange, count} = props;
  const [countListInputRange, setCountListInputRange] = useState([]);
  const [inputRangeIsIncreasing, setInputRangeIsIncreasing] = useState(false);
  
  useEffect(() => {
    let arrAux = [];
    for(let i = 0; i < count; i++) {
      arrAux.push(i);
    }
    setCountListInputRange(arrAux);
    return () => setCountListInputRange([]);
  }, [count]);

  const handleChange = (index, value) => {
    value = parseFloat(value);
    setInputRangeIsIncreasing(value > multiInputRangeValues[index]);
    handleChangeSingleInputRange(index, value);
  };
  
  const handleChangeSingleInputRange = (index, currentInputRangeValue) => {
    multiInputRangeValues[index] = currentInputRangeValue;
    onChange(sortArrayByAscendingOrder(multiInputRangeValues));
  };

  const sortArrayByAscendingOrder = array => {
    sortArrayByDirection(array)
      .map((item, idx, arr)=>{
        const condition = inputRangeIsIncreasing ? item>arr[idx+1] : item<arr[idx+1];      
        if(condition)
          arr[idx+1] = arr[idx];
        return item;
      });
    return sortArrayByDirection(array);
  };

  const sortArrayByDirection = array => {
    return inputRangeIsIncreasing ? array : array.reverse();
  };

  return (
    countListInputRange.map(index=>
      <RangeInput
        key={index} 
        showInfoChange={false}
        value={multiInputRangeValues[index]}
        onChange={({target}) => handleChange(index, target.value)} 
        min={min} 
        max={max} 
        step={step}/>
    )
  )
}

export default MultiInputRange;

