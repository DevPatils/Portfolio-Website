import React from "react";
import "./CSS/Projects.css";
import ecom1 from "../Assets/ecom1.jpg";
import ecom2 from "../Assets/Ecom2.jpg";
import ecom3 from "../Assets/Ecom.jpg";
import ecom4 from "../Assets/Ecom.jpg";
import footer from "../Assets/Ecom_Footer.jpg";
const Projects_Page = () => {
  return (
    <div>
      <div className="projects">
        <div className="project_heading">
          <h1 id="heading">Projects</h1>
        </div>
        <div className="project1">
          <div id="screenshots">
            <h2>E-Commerce Web App</h2>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={ecom1}
                    class="d-block w-100"
                    alt="E-Commerce Web App"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={ecom2}
                    class="d-block w-100"
                    alt="E-Commerce Web App"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={ecom3}
                    class="d-block w-100"
                    alt="E-Commerce Web App"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={ecom4}
                    class="d-block w-100"
                    alt="E-Commerce Web App"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={footer}
                    class="d-block w-100"
                    alt="E-Commerce Web App"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div id="description_1">
            <h3><u>Description</u></h3>
            <p>This is an E-Commerce Web App with features like product search, product filter, add to cart, payment gateway, etc. This project is built using React, Node.js, Express.js, MongoDB, and Stripe API.</p>
            <h3><u>Tech Stack Used : </u></h3>
            <div id="tech-stack">
            <i class="fab fa-react"></i>
            <i class="fab fa-node-js"></i>
            <i class="fab fa-js"></i>
            <i class="fas fa-database"></i>
            <i class="fab fa-stripe"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects_Page;
