import React,{useEffect, useState} from 'react'
import ModalComponents from './ModalComponents';

function ItemsComponents({data:{id,title,descriptions,startDataTime,endDataTime,priority}}) 
{  
  const [deletecomponents,setDeleteComponents]= useState([]);
  let [closes,setClose] = useState(false);
  let [display,setDisplay] = useState ("block");
  let [displaymodel,setDisplayModel]  = useState ("none");
  let [newTitle,setTitle] = useState(title);
  let [newDesc,setDesc] = useState(descriptions);
  let [newEndT,setEndT] = useState(endDataTime);
  let [newpriority,setNewPirority] = useState(priority);
  let items = {};
  let [blockState,setBlockState] = useState(true);
  let infoblock = {};
  let [info,setInfo] = useState(infoblock);
  let Context = React.createContext();

  //Times values
  let [timer,setTimer] = useState("");
  let [timerValue,setTimerValue] = useState("");

  //css Values
  let [borders,setBorders] = useState(""); 

  useEffect(()=>{
    if(priority==="High")
      setBorders((prevState)=>prevState ="4px solid #C70039");
      if(priority==="Average")
      setBorders((prevState)=>prevState ="4px solid #FFC300");
      if(priority==="Low")
    setBorders((prevState)=>prevState ="4px solid #DAF7A6"); 
  },[priority])
  const deleteTask=()=>
  {
    items = {
      'id':id
    };
    setDeleteComponents(prevState => [...prevState,prevState.push(items.id)]);
    deletecomponents.filter((a)=>a === items.id) ? setDisplay(display="none"): setDisplay(display="block"); 
  }
  useEffect(()=>{
    setTimer(timer => (Date.parse(newEndT)-(Date.parse(startDataTime))));
     let years = Math.floor(timer / (1000 * 60 * 60 * 24 * 30 * 12));
     let months = Math.floor(timer / (1000 * 60 * 60 * 24 * 30) % 12);
     let days = Math.floor(timer / (1000 * 60 * 60 * 24) % 30);
     let hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
     let  minutes = Math.floor((timer/ (1000 * 60)) % 60);
     let seconds = Math.floor((timer / 1000) % 60);
  
     setTimerValue(timerValue = `${years}/${months}/${days}\t ${hours}:${minutes}:${seconds}`);
  },[timer]);

  const editCart = () => 
  {
      if(closes === false){
        setDisplayModel(prevState=>prevState = "block");
        setClose(prevState=>prevState = true);
      }
      else
      {
        setDisplayModel(prevState=>prevState = "none");
        setClose(prevState=>prevState = false);
      }
  }
  const close = ()=>
  {
    if(closes === false)
    {
     setDisplayModel(prevState=>prevState = "none");
    }
    else
    {
      setDisplayModel(prevState=>prevState = "block");
    }
    setClose(prevState=>prevState=!prevState);
  }
  const done = ()=>{
      let list = document.createElement("h2");
      list.textContent = `${newTitle}`;/* ${newDesc} ${newStartT}${newEndT} */
      document.getElementById("completeTask").appendChild(list);

      items = {
        'id':id
      };

      setDeleteComponents(prevState => [...prevState,prevState.push(items.id)]);
      deletecomponents.filter((a)=>a === items.id) ? setDisplay(display="none"): setDisplay(display="block"); 
  }
  const save = () => {
    setDisplayModel(prevState=>prevState = "none");
    setClose(prevState=>prevState=true); 
    
  }
  const  TitleValue=(event)=>{
    setTitle(prevState=>prevState = event.target.value);
  }

  const DescriptionsValue = (event)=>{
    setDesc(prevState=>prevState = event.target.value);
  }

  const PriorityValue = (event)=>{
    setNewPirority(prevState=>{return prevState = event.target.value});
  }

  const EndDataValue = (event) =>{
    setEndT(prevState=>prevState = event.target.value);
  }
  const ItemInfo = () =>{
    setBlockState((prevState)=>prevState=!prevState);
  }
  useEffect(()=>{
   const infoblock ={
      state:blockState,
      title:newTitle,
      startData:startDataTime,
      priority:newpriority,
      endTask:newEndT,
      timer: timer,
      descriptions:newDesc
    }
    setInfo(infoblock);
    console.log(info);
  },[blockState])
  return (
    <>
     <div id='item' style={{display:`${display}`,border:`${borders}`}}>
      
      <div id='controlItem'>
      <span id='done' onClick={done}  className="material-symbols-outlined">
                done
                </span>
            <span className="material-symbols-outlined" onClick={editCart} id ='edit'>
            edit
          </span>
           <span className="material-symbols-outlined" onClick={deleteTask}  id ='close'>
            cancel</span>
            </div>
            <div id='contentCard' >
            <h3 onClick={ItemInfo} >{newTitle}</h3> 
            {
              blockState===false?<ModalComponents closeWindow={ItemInfo} info={info} />:console.log(blockState)
            }
             
            </div>
            <div id='DataItem'>
            <span className="material-symbols-outlined">
            schedule
            </span>
             <h4>{/* timerValue */ newEndT}</h4> 
            </div>
           </div>
        {
          closes ===  true ?
          <div className='modal' style={{display:`${displaymodel}`}}>
          <div className='edit_Mode'>
          <span className="material-symbols-outlined" onClick={close} id ='closeModal'>
            cancel</span>
          <div>
          <h2>TitleTask</h2>
          <textarea  placeholder='Title' id='title'  defaultValue={title} onChange={TitleValue}/>
          <h2>Descriptions</h2>
          <textarea placeholder='Description'  defaultValue={descriptions} onChange={DescriptionsValue}/>
          </div>
          <div id='Editblock2'>
          <h2>DateEndTask</h2>
          <input type="date" defaultValue={endDataTime} onChange={EndDataValue} />
          <h2>Priority</h2>
          <select defaultValue={newpriority} onChange={PriorityValue}>
            <option>High</option>
            <option>Average</option>
            <option>Low</option>
          </select>
          </div>
          <button onClick={save}>UpdateTask <span className="material-symbols-outlined">save</span></button>
          </div>
          </div>
          :
          ""
        }
    </>
  )
}

export default ItemsComponents