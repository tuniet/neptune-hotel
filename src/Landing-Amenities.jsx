import './LandingAmenities.css';
import rest from './media/rest1.webp'
import pool from './media/pool1.webp'
import spa from './media/spa.webp'
import experience from './media/experience.webp'

function LandingAmenities() {
  return (
      <div className='Amenities'>
        <h1>Facilities</h1>
        <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ornare elit, ut convallis metus. Phasellus consequat, mi eu porttitor facilisis</p>
        <div className="grid">
            <div className="card one">
                <img src={spa} alt=''/>
                <h2>Spa & Wellness</h2>
                <div className='front'/>
            </div>
            <div className="card two">
                <img src={pool} alt=''/>
                <h2>Pool & Beach club</h2>
                <div className='front'/>
            </div>
            <div className="card three">
                <img src={rest} alt=''/>
                <h2>Restaurant & Bar</h2>
                <div className='front'/>
            </div>
            <div className="card four">
                <img src={experience} alt=''/>
                <h2>Experiences</h2>
                {// Boat trip, wine, massage
                }
                <div className='front'/>
            </div>
        </div>
      </div>
  );
}

export default LandingAmenities;