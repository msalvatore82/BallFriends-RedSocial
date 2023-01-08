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
                  La red social de los deportistas. Jugadores, entrenadores,
                  managers y directivos, todos en el mismo lugar.
                </p>
                <div class="hr"></div>
                <h6>TECNOLOGIAS UTILIZADAS</h6>
                <div class="contact-social">
                  <ul>
                    <li>
                      <a class="hover-target" href="">
                        <FaReact
                          title="React"
                          style={{
                            fontSize: 25,
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <FaNodeJs
                          title="NodeJs"
                          style={{
                            fontSize: 25,
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <SiSequelize
                          title="Sequelize"
                          style={{
                            fontSize: 25,
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <SiMongodb
                          title="MongoDB"
                          style={{
                            fontSize: 25,
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <SiRedux
                          title="Redux"
                          style={{
                            fontSize: 25,
                          }}
                        />
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
