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
        </div>
      </div>
    );
  };

const Services = () => {
    const cards = [
        {
          title: "Programming",
          description: "This is the first card.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteWLUF5Ai-EFZYbSGXpsLxsAiY5mqHKHcUQ&usqp=CAU",
          link: "https://example.com"
        },
        {
          title: "Web Development",
          description: "This is the second card.",
          image: "https://aislabs.com/wp-content/uploads/2014/08/ais-web-development.png",
          link: "https://example.com"
        },
        {
          title: "Data Science",
          description: "This is the third card.",
          image: "https://cdn-icons-png.flaticon.com/512/8649/8649635.png",
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
        <span>Competencies</span>
        <spane>
         I strongly believe that we should be comfortable playing with any technology !
          <br />
         I am tinckering around with many tech stacks, and trying to master Web Dev ! 
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