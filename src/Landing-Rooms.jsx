import './LandingRooms.css';
import { MdKeyboardArrowRight,  MdKeyboardArrowLeft } from "react-icons/md";
import doubleroom from './media/double-room.webp'
import executivesuite from './media/executive-suite.webp'
import familysuite from './media/family-suite.webp'
import oneroomvilla from './media/one-room-villa.webp'
import superiorroom from './media/superior-room.webp'
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
function LandingRooms() {
    const [carImg, setcarImg] = useState(doubleroom)
    const [selected, setselected] = useState(0)

    useEffect(() => {
        switch (selected) {
            case 0: 
                setcarImg(doubleroom);
                break;
            case 1:
                setcarImg(superiorroom)
                break;
            case 2:
                setcarImg(executivesuite)
                break;
            case 3:
                setcarImg(familysuite)
                break;
            case 4:
                setcarImg(oneroomvilla)
                break;
            default:
        }
    }, [selected]);

    function handleDouble(){
        setselected(0)
    }
    function handleExecutive(){
        setselected(2)
    }
    function handleFamily(){
        setselected(3)
    }
    function handleVilla(){
        setselected(4)
    }
    function handleSuperior(){
        setselected(1)
    }
    function handleleft(){
        if(selected !== 0){
            setselected(selected - 1)
        }
        else{
            setselected(4)
        }
    }
    function handleright(){
        if(selected !== 4){
            setselected(selected + 1)
        }
        else{
            setselected(0)
        }
    }

  return (
      <div className='Rooms'>
        <h1 className='title'>Accomodation</h1>
        <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu lorem pellentesque, vulputate est eget, tincidunt elit. Nullam vel justo et urna ultricies condimentum nec ac enim.</p>
        <div className='carousel'>
            <img src={carImg} alt=''/>
            <div className="directions">
                <span className='left' onClick={handleleft}><MdKeyboardArrowLeft /></span>
                <span className='right' onClick={handleright}><MdKeyboardArrowRight /></span>
            </div>
            <div className="links">
                <Link className={selected === 0 ? 'active' : ''} to='/room/0' onMouseEnter={handleDouble}>Double Room</Link>
                <Link className={selected === 1 ? 'active' : ''} to='/room/1' onMouseEnter={handleSuperior}>Superior Room</Link>
                <Link className={selected === 2 ? 'active' : ''} to='/room/2' onMouseEnter={handleExecutive}>Excutive Suite</Link>
                <Link className={selected === 3 ? 'active' : ''} to='/room/3' onMouseEnter={handleFamily}>Family Suite</Link>
                <Link className={selected === 4 ? 'active' : ''} to='/room/4' onMouseEnter={handleVilla}>One Room Villa</Link>  
            </div>                      
        </div>
      </div>
  );
}

export default LandingRooms;