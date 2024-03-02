import './LandingAmenities.css';
import doubleroom from './media/double-room.webp'
function LandingAmenities() {
  return (
      <div className='Amenities'>
        <h1>Amenities</h1>
        <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ornare elit, ut convallis metus. Phasellus consequat, mi eu porttitor facilisis</p>
        <div className="grid">
            <div className="card one">
                <img src={doubleroom} alt=''/>
                <h2>Spa</h2>
                <div className='front'/>
            </div>
            <div className="card two">
                <img src={doubleroom} alt=''/>
                <h2>Pool</h2>
                <div className='front'/>
            </div>
            <div className="card three">
                <img src={doubleroom} alt=''/>
                <h2>Restaurant</h2>
                <div className='front'/>
            </div>
            <div className="card four">
                <img src={doubleroom} alt=''/>
                <h2>Other</h2>
                <div className='front'/>
            </div>
        </div>
      </div>
  );
}

export default LandingAmenities;