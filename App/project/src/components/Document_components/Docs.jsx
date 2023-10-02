import React ,{useState} from 'react'
import List from './List';

function Docs() {

  const [currency,setCurrency] = useState([]);
  const [money,setMoney] = useState([]);
  const [value,setValue] = useState(0);

  window.addEventListener('load',connect)

 async function connect()
 {
  try {
    let res = await fetch("http://data.fixer.io/api/latest?access_key=e2bacce8c576275dda0556a622536060", {
        method: 'GET'
    });
    let data = await res.json();
console.log(data);
    for(let i in data.rates)
    {
      setCurrency(currency=>{return[...currency,i]});
      setMoney(money=>{return[...money,data.rates[i]]})
    }
}

catch (e) {
    console.error(e);
}}

  return (
    <div>
      <h2>
      <select onChange={(event)=>{ console.log(currency.indexOf(event.target.value))}}>
      {
        currency.map(item=>{return  <List key={item} data={item}/>})
      }
      </select>
      in Euro:{money}
      </h2>
   
    </div>
  )
}

export default Docs