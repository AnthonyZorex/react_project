import './App.css';
import React ,{useState} from 'react';
import ItemsComponents from "./components/CardComponents/ItemsComponents";
import Menu from './components/Menu_components/Menu';
import Docs from './components/Document_components/Docs';
function App() 
{
  
  //value
  let [title,setTitle] = useState("");
  let [descriptions,setDescriptions] = useState("");
  let [startDataTime,setStartDataTime] = useState("");
  let [endDataTime,setEndDataTime] = useState("");
  let [priority,setPirority] = useState("");
  //generic item
  let [arrayItems,setItemsArray] = useState([]);
  let items = {};
  let [counter,setCounter] = useState(0);
  
  
  function new_card()
  { 
    let Data = new Date();
   /*  let  Year = Data.getFullYear();
    let Month = Data.getMonth();
    let Day = Data.getDate();
    let  Seconds = Data.getFullYear();
    let Minuts = Data.getMonth();
    let hour = Data.getDate(); */
    setStartDataTime(startDataTime = `${Data.getDate()}`);
    console.log(startDataTime);
    setCounter(counter = counter + 1);
    items = {
      "id":counter,
       "title":title,
       "descriptions": descriptions,
       "startDataTime": startDataTime,
       "endDataTime": endDataTime,
       "priority":priority
    };

      setItemsArray(arrayItems=>{return[...arrayItems,items]});
      document.getElementById("title").value = "";
      document.getElementById("Descriptions").value  = "";
      document.getElementById("endData").value  = "";
      setTitle(prevState=>prevState ="");
      setDescriptions(prevState=>prevState ="");
      setStartDataTime(prevState=>prevState ="");
      setDescriptions(prevState=>prevState ="");
      setPirority(prevState=>prevState ="");
  }

  const  TitleValue=(event)=>{
    setTitle(prevState => prevState = event.target.value);
  }

  const DescriptionsValue = (event)=>{
    setDescriptions(prevState => prevState = event.target.value);
  }

  const PriorityValue = (event)=>{
    setPirority(prevState=>{return prevState = event.target.value});
  }

  const EndDataValue = (event) =>{
  /*   let endT = Date.parse(event.target.value); */
    /* let years = Math.floor(endT / (1000 * 60 * 60 * 24 * 30 * 12));
    let months = Math.floor(endT / (1000 * 60 * 60 * 24 * 30) % 12);
    let days = Math.floor(endT / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor((endT / (1000 * 60 * 60)) % 24);
    let  minutes = Math.floor((endT/ (1000 * 60)) % 60);
    let seconds = Math.floor((endT / 1000) % 60); */
    setEndDataTime(prevState => prevState = event.target.value);
    console.log(endDataTime);
  }

  return (
   <main>  
   <Menu/>
   <div id='content' >
    <div id="docs">
    <Docs  />
    </div>

    <div id='menuTask'>
    <div id='inputMenu'>
      <h2>TitleTask</h2>
      <input type='text' id='title' placeholder='Title' onChange={TitleValue} />
      <h2>Descriptions</h2>
      <textarea placeholder='Description' id='Descriptions' onChange={DescriptionsValue} />
      <h2>Priority</h2>
          <select  defaultValue={priority}  onChange={PriorityValue}>
          <option></option>
            <option>High</option>
            <option>Average</option>
            <option>Low</option>
          </select>
      <h2>EndTask</h2>
      <input type="datetime-local" id='endData' onChange={EndDataValue} />
    <span onClick={new_card} title='New task' className="material-symbols-outlined">
add_circle
</span>
    </div>
    <div id ='allItem'>
      
    <h1 id ='nameBlock'>Tasks</h1>
    <div id='card'>
      {
       arrayItems && arrayItems.map(e=>
       <ItemsComponents key={e.id} data={e} />) 
      }
      </div>
    </div>
    </div>
    
   </div>
   <div id='completeTask'>
      <div>
      <span  className="material-symbols-outlined">
    checklist_rtl
    </span>
      </div>
    </div>
   </main>
   
  );
}

export default App;
