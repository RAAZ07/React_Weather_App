

import React  from 'react';

import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Forecast from './pages/Forecast';



function App() {
 

  
  return (
    <BrowserRouter>
    <Routes>
      
      
      <Route index element={<Forecast />}/>
        
  </Routes>
    </BrowserRouter>
  );
}

export default App;
