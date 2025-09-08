
// src/pages/Home.jsx
import React from "react";
import mainImage from "../assets/images/home1.png";
import sideImage1 from "../assets/images/home2.png";
import sideImage2 from "../assets/images/home3.png";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="hero-text">
          <h1>Connecting Cold Storages.<br /> Empowering Farmers. 🌾 🧊</h1>
          <p>
            FARMLOC bridges the gap between rural producers and cold storage facilities. 
            Shop fresh groceries and support local farming.
          </p>

          <Link to = "/explore">
            <button className="explore-btn">Explore More</button>
          </Link>
          
          

          <div className="stats">
            <div>
              <h2>150+</h2>
              <p>Cold Storage Units</p>
            </div>
            <div>
              <h2>3000+</h2>
              <p>Farmers Connected</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Marketplace Products</p>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="main-img">
            <img src={mainImage} alt="Main" />
          </div>
          <div className="side-images">
            <img src={sideImage1} alt="Side 1" />
            <img src={sideImage2} alt="Side 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
