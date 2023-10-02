import React,{useEffect, useState} from 'react'

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
  const deleteTask=()=>
  {
    items = {
      'id':id
    };
    setDeleteComponents(prevState => [...prevState,prevState.push(items.id)]);
    deletecomponents.filter((a)=>a === items.id) ? setDisplay(display="none"): setDisplay(display="block"); 
  }
 /*   */
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
      document.getElementsByClassName("modal")[0].style.display="none";
      setClose(prevState=>prevState=true);
      
    }
    else
    {
      document.getElementsByClassName("modal")[0].style.display="block";
      setClose(prevState=>prevState=false);
      
    }
  }
  const done = ()=>{
    setTimeout(()=>{
      let list = document.createElement("h2");
      list.textContent = `${newTitle}`;/* ${newDesc} ${newStartT}${newEndT} */
      document.getElementById("completeTask").appendChild(list);
    },0)
  }
  const save = () => {
    document.getElementsByClassName("modal")[0].style.display="none";
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


  return (
    <>
     <div id='item' style={{display:`${display}`,border:`${ priority==="High"?"4px solid #C70039"
      :priority==="Average"?"4px solid #FFC300":priority==="Low"?"4px solid #DAF7A6" :"" }`}}>

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
            
            <h3>{newTitle}</h3>
            <hr/>
            <h2>{newDesc}</h2>
            <h2>{newEndT}</h2>  
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