import React ,{useEffect, useState} from 'react'
import classes from "./index.module.css"
function ModalComponents({info:{descriptions,title,state,endTask},closeWindow}) 
{

  let counter = 0;
  let [descriptionCard,setValueDescriptionCard] = useState([])
  let items = {};
  const newDocComponent = () => {
  items = {
  id:counter,
  textValue:""
  }
  setValueDescriptionCard(descriptionCard =>{return[...descriptionCard,items]})
  console.log(descriptionCard);
}
  return (

    <div className={classes.InfoBlock}>
      <span className="material-symbols-outlined" onClick={closeWindow}  id ='closeModal'>
            cancel</span>
    <div className={classes.info_Mode}>
      <div className={classes.informblock}>
      <div className={classes.title}>
      <h2>{title}</h2>
      <hr/>
      </div>
      <textarea defaultValue={descriptions}/>
      {
        descriptionCard && descriptionCard.map((item)=>{
          
        return  <textarea key={item.id} defaultValue={item.textValue} onChange={(event)=>{
          item.textValue = event.target.value;

          console.log(item);
        }}/>
        })
      }
      <button onClick={newDocComponent}>+</button>
      {/*  <h2>{info.startData}</h2>
    <h2>{info.priority}</h2> */}
    <h2>End Data Task: {endTask}</h2>
      </div>
      <div className={classes.correctBlock}>
        <div>
        <button>Correct Discription</button>
        </div>
     
      </div>
    </div>
    </div>
  )
}

export default ModalComponents