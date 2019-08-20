import React from 'react';

export const InfoRange = ({infoValue}) =>{
  return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black", 
        borderRadius: "50%", 
        width: "36px", 
        height: "36px"}}>
          {infoValue}
      </div>
  )
}
