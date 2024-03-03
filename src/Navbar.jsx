import './Navbar.css';
import { HiMenu } from "react-icons/hi";
import { MdHotelClass } from "react-icons/md";
import React, {useState} from 'react';
import { IoCloseOutline } from "react-icons/io5";


function Navbar() {
  const [onTop, setonTop] = useState(true);
  const [visibleNav, setvisibleNav] = useState('show');
  const [menuOpen, setOpen] = useState('');
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

  function handleopen(){
    setOpen('active')
  }
  function handleclose(){
    setOpen('')
  }

  return (
    <>
    <div className={'Menu ' + menuOpen}>
      <div className="list">
        <a href='/'>Home</a>
        <a href='/'>Book now</a>
        <a href='/'>Rooms & Suites</a>
        <a href='/'>Spa & Wellness</a>
        <a href='/'>Pool & Beach club</a>
        <a href='/'>Restaurants & Bars</a>
        <a href='/'>Experiences</a>
        <a href='/'>FAQ</a>
        <a href='/'>Gallery</a>
        <a href='/'>Contact Us</a>
      </div>
    </div>
    <div className={"Navbar " + visibleNav + (onTop ? " top" : " ") + menuOpen} style={{backgroundColor: (!onTop) ? "#EEF5FF" : "transparent"}}>
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
        <button className={'navMenubtn ' + menuOpen} onClick={handleopen}><HiMenu/></button>
      </div>
      <button className={'close ' + menuOpen} onClick={handleclose}><IoCloseOutline/></button>
    </div>
    </>
  );
}

export default Navbar;