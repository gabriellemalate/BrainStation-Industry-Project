import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import questionData from './data/questions';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import {useState, useEffect} from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import CruisePage from './pages/CruisePage/CruisePage';

function App() {
  
  const [cruises, setCruises] = useState([])

  useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<QuestionPage cruises={cruises} setCruises={setCruises}/>}/>
          <Route path='/:questionId' element={<QuestionPage cruises={cruises} setCruises={setCruises}/>}/>
          <Route path='/loading' element={<LoadingPage />}/>
          <Route path='/cruises/:cruiseName' element={<CruisePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
