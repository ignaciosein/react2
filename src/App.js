import {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count,setCount ]=useState(0)
  return (
    <div className="App">
      

<button onClick={()=>setCount(count+1)}>+</button>
<h1>{count}</h1>
<button onClick={()=>setCount(count-1)}>-</button>


    </div>
  );
}

export default App;
