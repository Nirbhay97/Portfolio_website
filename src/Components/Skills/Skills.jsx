import React from "react";
import "./Skills.css";
import Resume from './resume.pdf';

const Card = (props) => {
    return (
      <div className="card">
        <img src={props.image} alt={props.title} />
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      </div>
    );
  };

const Services = () => {
    const cards = [
        {
          title: "Programming",
          description: "This is the first card.",
          image: "https://via.placeholder.com/150",
          link: "https://example.com"
        },
        {
          title: "Web Development",
          description: "This is the second card.",
          image: "https://via.placeholder.com/150",
          link: "https://example.com"
        },
        {
          title: "Data Science",
          description: "This is the third card.",
          image: "https://via.placeholder.com/150",
          link: "https://example.com"
        }
      ];
  // context
  return (
    <div className="glass-effect skills-section">
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span >My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        <div className="card-list">
        {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} image={card.image} link={card.link} />
        ))}
    </div>
      </div>
    </div>
    </div>
  );
};

export default Services