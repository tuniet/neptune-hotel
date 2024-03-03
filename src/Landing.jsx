import './Landing.css';
import LandingHero from './Landing-Hero.jsx';
import LandingRooms from './Landing-Rooms.jsx';
import LandingAmenities from './Landing-Amenities.jsx';

function Landing() {
  return (
    <div className="Landing">
      <LandingHero />
      <LandingRooms />
      <div className="parallax" />
      <LandingAmenities />
      <div className="parallax ctd">
        <h1>Make a reservation</h1>
        <button className='btn-xl'>BOOK NOW</button>
      </div>
    </div>
  );
}

export default Landing;