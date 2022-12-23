import React from 'react';
import "./pagescss/FooterStyles.css";
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa"

export default function Footer() {
  return (
    <div className="footer">
            <p className='copyright'>© Copyright - Cantam Group Ltd. 2016</p>
    
            <div>
                <div className="social">
                <a href="https://www.youtube.com/channel/UCEfMAqNfa5aUBneofID3OGA" target="_blank">
                <FaYoutube size={30} style={{ color: "rgb(165, 204, 165)", marginRight: "1rem" }} />
                </a>
                <a href="https://twitter.com/cantam_group" target="_blank">
                <FaTwitter size={30} style={{ color: "rgb(165, 204, 165)", marginRight: "1rem" }} />
                </a>
                <a href="https://www.instagram.com/cantamgroup/" target="_blank">
                <FaInstagram size={30} style={{ color: "rgb(165, 204, 165)", marginRight: "1rem" }} />
                </a>
                <a href="https://www.facebook.com/cantamgroup/" target="_blank">
                <FaFacebook size={30} style={{ color: "rgb(165, 204, 165)", marginRight: "1rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/yaso-somalingam-884b1146/?originalSubdomain=ca" target="_blank">
                <FaLinkedin size={30} style={{ color: "rgb(165, 204, 165)", marginRight: "1rem" }} />
                </a>
                </div>
            </div>

    </div>
  )
}
