import React from 'react';
import { useState } from 'react';

import './Experience.css';

const Experience = () => {

  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  

  const professional_experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'ABC Company',
      location: 'New York, NY',
      startDate: 'Jan 2019',
      endDate: 'Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'XYZ Inc',
      location: 'Los Angeles, CA',
      startDate: 'Jun 2016',
      endDate: 'Dec 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    },
    {
      id: 3,
      title: 'Volunteer',
      company: 'Community Service Organization',
      location: 'San Francisco, CA',
      startDate: 'Jan 2015',
      endDate: 'May 2016',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    }
  ];

  const volunteer_experiences = [
    {
      id: 1,
      title: 'ngo',
      company: 'ABC Company',
      location: 'New York, NY',
      startDate: 'Jan 2019',
      endDate: 'Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    },
    {
      id: 2,
      title: 'ngo',
      company: 'XYZ Inc',
      location: 'Los Angeles, CA',
      startDate: 'Jun 2016',
      endDate: 'Dec 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    },
    {
      id: 3,
      title: 'Volunteer',
      company: 'Community Service Organization',
      location: 'San Francisco, CA',
      startDate: 'Jan 2015',
      endDate: 'May 2016',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    }

  ];

  // for (let i = 0; i < professional_experiences.length; i++) {
  //   const div = document.createElement("div");
  //   const parentdiv = document.getElementsByClassName("vertical-line")
  //   parentdiv.appendChild(div);
  // }
  
  return (
    <section className='home-section glass-effect'>
        <div className="experience-container">
        
        <div className='btn-exp'>
            <h2 className='heading'>Experience</h2>
            <button className = 'button i-button btn-exp' onClick={toggleContent}>Toggle Content</button>
        </div>
        <div className='seperate-section'>
        {showContent &&
            
            <div className='professional'>
                <div className="vertical-line">
                    <div class="point p-1"></div>
                    <div class="point p-2"></div>
                    <div class="point p-3"></div>
                </div>
                
                {professional_experiences.map((experience, index) => (
                    <div className="timeline-items" key={index}>
                        {}
                        <div className="timeline-item-content">
                            <h3>{experience.title}</h3>
                            <p className="company">{experience.company}</p>
                            <p className="location">{experience.location}</p>
                            <p className="date">{ experience.startDate} - {experience.endDate}</p>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                    ))}
            </div>
           
        }

        {!showContent &&

            
            <div className='volunteer'>
                <div className="vertical-line">
                    <div class="point p-1"></div>
                    <div class="point p-2"></div>
                    <div class="point p-3"></div>
                </div>

                {volunteer_experiences.map((experience, index) => (
                    <div className="timeline-items" key={index}>
                        <div className="timeline-item-content">
                            <h3>{experience.title}</h3>
                            <p className="company">{experience.company}</p>
                            <p className="location">{experience.location}</p>
                            <p className="date">{experience.startDate} - {experience.endDate}</p>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                    ))}
            </div>
        }
        </div>
        </div>
    </section>
  );
};

export default Experience;
