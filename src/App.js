import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Question from './components/Question';
import Result from './components/Result';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    
      <div className="w-full h-full">
      <QuizProvider> 
      <Router>
        <Routes>
          <Route exact path='/' element={<Question/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </Router>
      </QuizProvider> 
      </div>
  );
}

export default App;
