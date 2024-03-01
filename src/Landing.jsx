import './Landing.css';
import bgvideo from './media/bgvideo.mp4'

function Landing() {
  return (
    <div className="Landing">
      <div className='hero'>
        <video src={bgvideo} width="750" height="500" autoPlay muted loop />
        <div className="heroinfo">
          <div className='slogan'>
            <div className="topside">
              <span className='line'/>
              <h4>Experience the</h4>
              <span className='line'/>
            </div>
            <h2>Magic</h2>
            <h4 className='of'>of</h4>
            <h2>Mediterranean Waters</h2>
          </div>
          <button className='btn-xl'>BOOK NOW</button>
        </div>
      </div>
      <div className="rooms">

      </div>
      <div className='parallax'>
        
      </div>
      <div className="amenities">

      </div>
    </div>
  );
}

export default Landing;