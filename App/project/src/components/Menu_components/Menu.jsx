import React ,{useState} from 'react'

function Menu() {
    //parametrs UI
  let [mode_page,setMode] = useState(false);
  let [mods,setModeBackground] = useState("Salmon");
  let [color,setColor] = useState("#000");
  let [menuBackgroundcolor,setMenuBackgroundcolor] = useState("#000");
    // select menu
    let [todo,setTodo] = useState(false);
    let [docs,setDocs] = useState(false);
  function liteMode()
  {
    if(mode_page===false)
    {
      setMode(mode_page=true);
      setModeBackground(mods="#273746");
      setColor(color="#fff");
      setMenuBackgroundcolor(menuBackgroundcolor="Salmon")
      document.getElementById('content').style.background=`${mods}`;
      document.getElementById('content').style.color=`${color}`;
      document.getElementById('menu').style.background=`${menuBackgroundcolor}`;
      document.getElementById('menu').style.color=`${"#000"}`;
    }
  }
  function darkMode()
  {
    if(mode_page===true)
    {
      setMode(mode_page = false);
      setModeBackground(mods = "Salmon");
      setColor(color="#000");
      setMenuBackgroundcolor(menuBackgroundcolor="")
      document.getElementById('content').style.background=`${mods}`;
      document.getElementById('content').style.color=`${color}`;
      document.getElementById('menu').style.background=`${menuBackgroundcolor}`;
      document.getElementById('menu').style.color=`${color}`;   
    }
  }
 
   function to_do()
   {
    if(!todo)
    {
        document.getElementById("menuTask").style.display ="none";
        document.getElementById("completeTask").style.display ="none";
        setTodo(todo=false);
        setDocs(docs=true);
    }
    else
    {
        document.getElementById("menuTask").style.display ="inline-block";
        document.getElementById("completeTask").style.display ="flex";
        document.getElementById("docs").style.display ="none";
        setTodo(todo=true);
        setDocs(docs=false);
    }
  }
  function note ()
  {
    if(docs){
      setDocs(docs=true);
      document.getElementById("docs").style.display ="none";
      setTodo(todo=false);
    }
    else{
      setDocs(docs=false);
      document.getElementById("docs").style.display ="flex";
      document.getElementById("menuTask").style.display ="none";
      document.getElementById("completeTask").style.display ="none";
      setTodo(todo=true);
    }
  }
  return (
        <div id="menu">
        {
        mode_page===false
        ?
        <span onClick={liteMode} className="material-symbols-outlined">
        light_mode
        </span>
        : 
        <span onClick={darkMode} className="material-symbols-outlined">
        dark_mode
        </span>
        }
        <hr/>
        <span onClick={to_do} className="material-symbols-outlined">
        checklist_rtl
        </span>
        <hr/>
        <span onClick={note} className="material-symbols-outlined">
        note_add
        </span>
        <hr/>
        <span className="material-symbols-outlined">
        settings
      </span>
      <hr/>
    </div>
  )
}

export default Menu