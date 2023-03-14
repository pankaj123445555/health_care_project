
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage';
import Diet from './Component/Diet';

function App() {
  return (
   
     <BrowserRouter>
     <div id = 'App'>
     <Routes>
     <Route path ="/" element = {<HomePage/>}/>
     <Route path ="/diet-plan" element = {<Diet/>}/>
     </Routes>
     </div>
     </BrowserRouter>
    
  );
}

export default App;
