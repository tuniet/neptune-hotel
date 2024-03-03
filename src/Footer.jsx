import './Footer.css';
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";

function Footer() {
  return (
    <div className="Footer">
        <div className="contact">
            <h1>Contact us</h1>
            <div className="separator" />
            <h2>Neptune Hotel</h2>
            <span><IoLocationSharp /> C/Neptune 12, 281228, Ibiza, Balearic Islands, Spain</span>
            <span><BsTelephoneFill /> +34-971121212</span>
            <span>< FaCalendarAlt /> Open 1/04 - 31/10</span>
            <span>< FaClock /> Check-in 15:00 Check-out 11:00 </span>
            <span><IoMdMail /> info@neptune.es</span>
        </div>
        <div className="socials">
            <h1>Follow us</h1>
            <div className="separator" />
            <div className="links">
                <span><RiInstagramFill/></span>
                <span><BsFacebook/></span>
                <span><FaTripadvisor /></span>
                <span><GrTwitter /></span>
            </div>
        </div>
    </div>
  );
}

export default Footer;