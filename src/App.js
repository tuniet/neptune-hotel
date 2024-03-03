import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />  
    </Routes>
       
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
