import React from 'react';

const styles = {
  infoRange: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black", 
    borderRadius: "50%", 
    width: "36px", 
    height: "36px"}
}

export const InfoRange = ({infoValue}) =>{
  return (
      <div style={styles.infoRange}>
          {infoValue}
      </div>
  )
}
