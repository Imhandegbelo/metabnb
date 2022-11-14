import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/place-to-stay' element={<PlaceToStay/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
