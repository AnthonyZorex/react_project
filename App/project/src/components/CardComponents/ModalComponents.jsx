import React from 'react'
import classes from "./index.module.css"
function ModalComponents({info}) 
{
  
  return (

    <div className={classes.InfoBlock} style={{display:`${info.state===true?"block":"none"}`}}>
    <div className={classes.info_Mode}>
    <h2>{info.title}</h2>
    <h2>{info.descriptions}</h2>
    <h2>{info.startData}</h2>
    <h2>{info.priority}</h2>
    <h2>{info.endTask}</h2>
    </div>
    </div>
  )
}

export default ModalComponents