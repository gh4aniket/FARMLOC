import React, { useState } from "react";
import "../index.css";
import shreya from "../assets/images/review1.png";
import john from "../assets/images/review2.png";
import michael from "../assets/images/review3.png";
import aarti from "../assets/images/review4.png";
import ravi from "../assets/images/review5.png";

const reviews = [
  {
    name: "Shreya Mehta",
    image: shreya,
    stars: 5,
    text: "FARMLOC has made it incredibly easy for me to store my produce safely. I can now locate cold storage near my farm instantly, reducing spoilage and increasing profits!",
  },
  {
    name: "John Doe",
    image: john,
    stars: 5,
    text: "As a health-conscious buyer, I love that FARMLOC connects me directly with local farmers. The groceries are fresh, organic, and fairly priced — plus I’m supporting rural livelihoods!",
  },
  {
    name: "Michael Johnson",
    image: michael,
    stars: 5,
    text: "Managing our farmers' cooperative has become so efficient with FARMLOC. We can find shared storage and coordinate fresh deliveries with just a few clicks. Brilliant initiative!",
  },
  {
    name: "Aarti Sharma",
    image: aarti,
    stars: 5,
    text: "I’ve started recommending FARMLOC to all the women in our self-help group. It makes cold storage and market access easier and safer for all of us!",
  },
  {
    name: "Ravi Patel",
    image: ravi,
    stars: 5,
    text: "With FARMLOC, I’ve been able to sell directly to customers and save money on transport. It’s empowering for small farmers like me!",
  },
];

const FARMLocReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleCardClick = (index) => {
    setHighlightedIndex(index);
  };

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);
  const slideStartIndex = currentSlide * cardsPerSlide;
  const visibleCards = reviews.slice(slideStartIndex, slideStartIndex + cardsPerSlide);

  return (
    <div id="review" className="review-section">
      <h2 className="review-heading">What do our users say?</h2>
      <p className="review-subtext">
        Trusted by farmers, buyers, and cooperatives alike — FARMLOC makes local sourcing,
        storage, and food access simpler, smarter, and more sustainable.
      </p>

      <div className="review-cards">
        {visibleCards.map((review, index) => {
          const globalIndex = slideStartIndex + index;
          return (
            <div
              key={globalIndex}
              className={`review-card ${
                highlightedIndex === globalIndex ? "highlighted" : ""
              }`}
              onClick={() => handleCardClick(globalIndex)}
            >
              <div className="reviewer">
                <img src={review.image} alt={review.name} />
                <div>
                  <h4>{review.name}</h4>
                  <div className="stars">{"★".repeat(review.stars)}</div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          );
        })}
      </div>

      <div className="slider-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FARMLocReviewSection;
