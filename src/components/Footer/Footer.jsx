import { FaChrome, FaNodeJs, FaReact } from "react-icons/fa";
import { IconName, SiMongodb, SiSequelize } from "react-icons/si";
import React from "react";
import logo from "../../Asset/logoconletras.png";
import logosmall from "../../Asset/logo2.jpg"

import "./Footer.scss"

const Footer = () => {
  return (
    <div>
      <section class="contact-area" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <a href="#">
                  <img src={logo} alt="logo" /> 
                </a>
                <p>
                  La red social de los deportitas, jugaodres, entrenadores, managers y directivos
                </p>
                <div class="hr"></div>
                <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                <h6>
                  +01 2345 6789 12<span>|</span>+01 2345 6789 12
                </h6>
                <div class="contact-social">
                  <ul>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-facebook-f"> <FaReact /></i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-linkedin-in"> <FaNodeJs/></i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-github"> <SiSequelize /> </i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-behance"> < SiMongodb /> </i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-pinterest-p"> <FaChrome/> </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Copyright &copy; 2022{" "}
          <img src={logosmall} alt="logo" style={{
            marginBottom: -3
          }
            
          }
           />  All
          Rights Reserved. 
        </p>
      </footer>
    </div>
  );
};

export default Footer;
