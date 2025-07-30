/// src/pages/About.jsx
import React from 'react';
import aboutImg from '../assets/images/about1.png';
import aboutCardImg from "../assets/images/about2..png";
import { Link } from 'react-router-dom';
import '../index.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-content">

                    {/* About Images */}
                    <div className="about-images">
                        <img src={aboutImg} alt="Main" className="main-about-img" />
                        <div className="card-img-container">
                            <img src={aboutCardImg} alt="Card" className="about-card-img" />
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="about-text">
                        <h2>About Us 🥦</h2>
                        <p>
                            Welcome to <strong>FARMLOC</strong> — your trusted companion in connecting with nearby cold storages and accessing fresh groceries directly from farms. Whether you're a farmer, a health-conscious buyer, or just someone who loves supporting local produce, FARMLOC has something for you.
                        </p>
                        <p>
                            We believe in smarter agriculture and better food distribution. With FARMLOC, you can locate the nearest cold storage, reduce food spoilage, and shop organic and seasonal goods at fair prices — all while supporting sustainability and rural livelihoods.
                        </p>
                        <Link to="/learn-more">
                            <button className="about-btn">Learn More</button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
