import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from './Navbar.jsx'
function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />  
    </Routes>
       
    </BrowserRouter>
    </div>
  );
}

export default App;
