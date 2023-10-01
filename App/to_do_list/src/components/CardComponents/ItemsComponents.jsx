import React,{useState} from 'react'

function ItemsComponents({data:{id,title,descriptions,startDataTime,endDataTime}}) 
{  
  const [deletecomponents,setDeleteComponents]= useState([]);
  let [closes,setClose] = useState(false);
  let [display,setDisplay] = useState ("block");
  let [displaymodel,setDisplayModel]  = useState ("none");
  let items = {};

  //redirected item value

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
  const save = () => {
 
  }
  return (
    <>
     <div id='item' style={{display:`${display}`}}>
             <span id='done' className="material-symbols-outlined">
                done
                </span>
            <span className="material-symbols-outlined" onClick={editCart} id ='edit'>
            edit
          </span>
           <span className="material-symbols-outlined" onClick={deleteTask}  id ='close'>
            cancel</span>
            <h1>Task:{title}</h1>
            <h2>Descriptions:{descriptions}</h2>
            <h2>StartDataTime:{startDataTime}</h2>
            <h2>EndDataTime:{endDataTime}</h2>
           </div>
        {
          closes ===  true ?
          <div className='modal' style={{display:`${displaymodel}`}}>
          <div className='edit_Mode'>
          <span className="material-symbols-outlined" onClick={close} id ='closeModal'>
            cancel</span>
          <div>
          <h2>TitleTask</h2>
          <textarea  placeholder='Title' id='title'  defaultValue={title}/>
          <h2>Descriptions</h2>
          <textarea placeholder='Description'  defaultValue={descriptions}/>
          </div>
          <div>
          <h2>StartTask</h2>
          <input type="datetime-local" defaultValue={startDataTime} />
          <h2>DateEndTask</h2>
          <input type="datetime-local" defaultValue={endDataTime} />
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