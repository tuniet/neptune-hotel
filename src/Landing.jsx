import './Landing.css';
import LandingHero from './Landing-Hero.jsx';
import LandingRooms from './Landing-Rooms.jsx';
import LandingAmenities from './Landing-Amenities.jsx';

function Landing() {
  return (
    <div className="Landing">
      <LandingHero />
      <LandingRooms />
      <LandingAmenities />
      <div className='parallax'>
        
      </div>
      <div className="amenities">

      </div>
    </div>
  );
}

export default Landing;