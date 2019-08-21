import React from 'react';
import {InfoRange} from './InfoRange';

function RangeInput(props) {
  const {min, max, step, value, setValue} = props;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      border: "1px black solid",
      borderRadius: "3px",
      padding: "1em",
      margin: "1em"}}>
      <InfoRange infoValue={value}/>
      <input 
        style={{width: "100%"}} 
        value={value} 
        onChange={e=>setValue(e.target.value)} 
        min={min} 
        max={max} 
        step={step} 
        type="range"/>
      <InfoRange infoValue={max} />
    </div>
  )
}

export default RangeInput;
