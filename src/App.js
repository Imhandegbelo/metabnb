import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='place-to-stay' element={<PlaceToStay/>} />
      </Routes>
    </div>
  );
}

export default App;
