import { useState } from 'react';
import './App.css';
import LikeBtn from './componenets/button';
import Header from './componenets/header';

function App() {

  const [count,setCount] = useState(5001)

  const handleClick = (event) =>{

    setCount(count+1)
  }
  const countUpdate = (newCount) =>{
    setCount(newCount)
  
  }


  return (
    <div className="App">
      <Header title = "VS cloud"/>
      <button onClick = {handleClick} count={count} >increse</button>
      <LikeBtn initcount = {count} onCountUpdate ={countUpdate}/>
    </div>
  );
}

export default App;
