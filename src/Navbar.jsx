import './Navbar.css';
import { HiMenu } from "react-icons/hi";
import { MdHotelClass } from "react-icons/md";
import React, {useState, useEffect} from 'react';


function Navbar() {
  const [onTop, setonTop] = useState(true);
  const [visibleNav, setvisibleNav] = useState('show');
  let prevScrollPos = window.scrollY;
    
  window.addEventListener('scroll', function() {
    // current scroll position
      let scrollPosition = window.scrollY;

      if (prevScrollPos > scrollPosition) {
        // user has scrolled up
        setvisibleNav('show');
      } else {
        // user has scrolled down
        setvisibleNav('');
      }
      if(scrollPosition === 0){
        setonTop(true)
      }
      else{
        setonTop(false)
      }
      // update previous scroll position
      prevScrollPos = scrollPosition;
  });

  return (
    <div className={"Navbar " + visibleNav + (onTop ? " top" : " ")} style={{backgroundColor: (!onTop) ? "#EEF5FF" : "transparent"}}>
      <div className='left'>
        <h1>Neptune Hotel</h1>
        <div className="bottom">
          <h4>IBIZA</h4>
          <div className="stars">
            <MdHotelClass />
            <MdHotelClass />
            <MdHotelClass />
            <MdHotelClass />
          </div>
      </div>
    </div>
      <div className="right">
        <button className='btn-xl'>BOOK NOW</button>
        <button className='navMenubtn'><HiMenu/></button>
      </div>
    </div>
  );
}

export default Navbar;