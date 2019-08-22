import React from 'react';
import {InfoRange} from './InfoRange';

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px black solid",
    borderRadius: "3px",
    padding: "1em",
    margin: "1em"
  },
  range: {
    width: "100%"
  }
};

function RangeInput(props) {
  const {min, max, step, value, onChange, showInfoChange = true} = props;

  return (
    <div style={styles.container}>
      {showInfoChange && <InfoRange infoValue={value}/>}
      <input 
        style={styles.range} 
        value={value} 
        onChange={onChange} 
        min={min} 
        max={max} 
        step={step} 
        type="range"/>
      {showInfoChange && <InfoRange infoValue={max} />}
    </div>
  )
}

export default RangeInput;
