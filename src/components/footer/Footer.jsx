import React from "react";
import "./style.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import Contentwrapper from "../contentwrapper/Contentwrapper";
const footer = () => {
  return (
    <div>
      <footer className="footer">
        <Contentwrapper>
          <ul className="menuItems">
            <li className="menuItem"> Terms of Use</li>
            <li className="menuItem">Privacy Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
          </ul>

          <div className="infoText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tenetur molestias quasi hic quisquam voluptatibus beatae amet numquam veniam nostrum voluptas quis laborum. Voluptatibus sed incidunt a, accusantium ut sapiente eos ipsum necessitatibus esse, suscipit numquam. Minus quam odio, aut nesciunt totam numquam qui quidem possimus nam ullam amet sed quasi in quaerat debitis quisquam sapiente ipsa exercitationem minima mollitia, corrupti explicabo vitae voluptatum ratione. A adipisci culpa provident? Repellat libero praesentium quod explicabo, pariatur unde et eveniet odio ex.
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </Contentwrapper>
      </footer>
    </div>
  );
};

export default footer;
