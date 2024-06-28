import './App.css';
import { useState } from 'react';

import { Route,Routes } from 'react-router-dom';
import Question from './components/Question';
import Start from './components/Start';
import Result from './components/Result';


function App() {
  const [num,setNum]=useState(1);
const [score,setScore]=useState({
  EI:0,
  SN:0,
  TF:0,
  PJ:0,
})

const updateScore=(type,value)=> {
  setScore({
    ...score,
    [type]:score[type]+value,
  });
}
  const resetState=()=> {
    setNum(1);
    setScore({
      EI:0,
      SN:0,
      TF:0,
      PJ:0,
    })
  }

  return (
    <Routes>
    <Route path="/" element={<Start setNum={setNum}/>}/>
    <Route path="/question" element={<Question num={num} updateScore={updateScore} setNum={setNum} />}/>
    <Route path="/result" element={<Result score={score} resultSate={resetState} />}/>
  </Routes>
  );
}
export default App;
