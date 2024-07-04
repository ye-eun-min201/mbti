
import './App.css';
import { Routes, Route } from 'react-router';
import ResultSpringWarm from './components/ResultSpringWarm';
import ResultAutumnWarm from './components/ResultAutumnWarm';
import ResultWinterCool from './components/ResultWinterCool';
import ResultSummerCool from './components/ResultSummerCool';
import Question from './components/Question';
import Start from './components/Start';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(1); // 질문번호

  const [score, setScore] = useState({
    WC: 0,
    SA: 0,
    WS: 0,
  
  });

  const updateScore = (type, value) => { // 점수 업데이트 함수 
    setScore((prevScore) => ({
      ...prevScore,
      [type]: prevScore[type] + value,
    }));
  };

  const resetState = () => { // 다시하기 누르면 점수랑 질문번호 초기화 
    setNum(1);
    setScore({
      WC: 0,
      SA: 0,
      WS: 0,
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Start setNum={setNum} />} />
      <Route path="/question" element={<Question num={num} setNum={setNum} updateScore={updateScore} score={score} />} />
      <Route path="/ResultSummerCool" element={<ResultSummerCool score={score} resetState={resetState} />} />
      <Route path="/ResultWinterCool" element={<ResultWinterCool score={score} resetState={resetState} />} />

      <Route path="/ResultAutumnWarm" element={<ResultAutumnWarm score={score} resetState={resetState} />} />
      <Route path="/ResultSpringWarm" element={<ResultSpringWarm score={score} resetState={resetState} />} />

    </Routes>
  );
}

export default App;


