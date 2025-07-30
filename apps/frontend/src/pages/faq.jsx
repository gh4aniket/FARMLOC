import React, { useState } from "react";
import "../index.css";
import faqImage from "../assets/images/faq.png"; // Replace with your actual path

const faqData = [
  {
    question: "What is FARMLOC and how does it work?",
    answer:
      "FARMLOC is a platform that connects farmers, buyers, and cold storage providers. It helps users find nearby cold storages and purchase fresh, locally sourced produce directly from farms, promoting smarter agriculture and efficient distribution.",
  },
  {
    question: "How does FARMLOC help reduce food spoilage?",
    answer:
      "By linking farmers to the nearest available cold storage facilities, FARMLOC ensures perishable produce is preserved properly, minimizing spoilage and post-harvest losses.",
  },
  {
    question: "Is FARMLOC available in all regions?",
    answer:
      "FARMLOC is being launched in phases. While it's not yet available everywhere, you can enter your location on the platform to check availability in your region.",
  },
  {
    question: "How does FARMLOC support sustainability?",
    answer:
      "FARMLOC supports sustainability by promoting local food systems, reducing the distance food travels, cutting down on waste, and encouraging responsible storage and consumption practices.",
  },
  {
    question: "Can FARMLOC be used by cooperatives or farmer groups?",
    answer:
      "Yes, FARMLOC is designed to support both individual farmers and organized groups or cooperatives. It allows bulk listing of produce and shared access to nearby cold storages for streamlined operations.",
  },
];

const faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-image">
        <img src={faqImage} alt="FAQ Illustration" />
      </div>
      <div className="faq-content">
        <h2>Most asked Questions?</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default faq;
