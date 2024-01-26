import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import questionData from './data/questions';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import {useState, useEffect} from 'react';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  
  const [cruises, setCruises] = useState([])

  useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<QuestionPage cruises={cruises} setCruises={setCruises}/>}/>
          <Route path='/:questionId' element={<QuestionPage cruises={cruises} setCruises={setCruises}/>}/>
          <Route path='/cruises' element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
