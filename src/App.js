import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from "./Landing.jsx";
import Room from './Room.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/room/:roomid" element={<Room />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
