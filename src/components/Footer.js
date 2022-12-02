import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk,FaFacebook ,FaTwitter,FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Main road, Shanti Nagar</p>
              <p>India</p>
              </div>
              </div>
              <div className="phone">
                <h4>
                  <FaPhone
                    size={20}
                    style={{ color: "white", marginRight: "2rem" }}
                  />
                  +91-8979407144
                </h4>
              </div>
              <div className="Gmail">
                <h4>
                  <FaMailBulk
                    size={20}
                    style={{ color: "white", marginRight: "2rem" }}
                  />
                  Apoorvankit10032@gmail.com
                </h4>
           
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>A trained web-developer</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
