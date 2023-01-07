import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiRedux, SiSequelize } from "react-icons/si";
import React from "react";
import logo from "../../Asset/logoconletras.png";
import logosmall from "../../Asset/logo2.jpg";

import "./Footer.scss";

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
                La red social de los deportistas. Jugadores, entrenadores, managers y directivos, todos en el mismo lugar.
                </p>
                <div class="hr"></div>
                <h6>TECNOLOGIAS UTILIZADAS</h6>
                <div class="contact-social">
                  <ul>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-facebook-f">
                          <FaReact
                            style={{
                              fontSize: 25,
                            }}
                          />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-linkedin-in">
                          <FaNodeJs
                            style={{
                              fontSize: 25,
                            }}
                          />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-github">
                          <SiSequelize
                            style={{
                              fontSize: 25,
                            }}
                          />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-behance">
                          <SiMongodb
                            style={{
                              fontSize: 25,
                            }}
                          />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-pinterest-p">
                          <SiRedux
                            style={{
                              fontSize: 25,
                            }}
                          />
                        </i>
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
          Copyright &copy; 2022 {" "}
          <img
            src={logosmall}
            alt="logo"
            style={{
              marginBottom: -3,
            }}
          />
           {"  "}All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
