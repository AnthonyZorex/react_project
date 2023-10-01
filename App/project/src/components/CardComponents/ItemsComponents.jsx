import React,{useState} from 'react'

function ItemsComponents({data:{id,title,descriptions,startDataTime,endDataTime}}) 
{  
  const [deletecomponents,setDeleteComponents]= useState([]);
  let [closes,setClose] = useState(false);
  let [display,setDisplay] = useState ("block");
  let [displaymodel,setDisplayModel]  = useState ("none");
  let [newTitle,setTitle] = useState(title);
  let [newDesc,setDesc] = useState(descriptions);
  let [newStartT,setStartT] = useState(startDataTime);
  let [newEndT,setEndT] = useState(endDataTime);
  let [priority,setPirority] = useState()
  let items = {};
  const deleteTask=()=>
  {
    items = {
      'id':id
    };
    setDeleteComponents(prevState => [...prevState,prevState.push(items.id)]);
    deletecomponents.filter((a)=>a === items.id) ? setDisplay(display="none"): setDisplay(display="block"); 
  }
  const editCart = () => 
  {
    // displaymodel = 'none', closes = false;
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
  document.getElementById("item")

  return (
    <>
     <div id='item' style={{display:`${display}`}}>
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
          <textarea  placeholder='Title' id='title'  defaultValue={title} onChange={(event)=>{setTitle(prevState=>prevState = event.target.value)}}/>
          <h2>Descriptions</h2>
          <textarea placeholder='Description'  defaultValue={descriptions} onChange={(event)=>{setDesc(prevState=>prevState = event.target.value)}}/>
          </div>
          <div id='Editblock2'>
          <h2>DateEndTask</h2>
          <input type="date" defaultValue={endDataTime} onChange={(event)=>{setEndT(prevState=>prevState = event.target.value)}} />
          <h2>Priority</h2>
          <select>
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