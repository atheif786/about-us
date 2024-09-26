import React, { useState } from 'react';
import './Award.css';
import office from '../assets/lap.jpg';
import teamImage from '../assets/our-vision-banner-min.jpg';

const Section = ({ title, image, description, isActive, onHover, onLeave }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`section ${isActive || hover ? 'expanded' : 'minimized'}`}
            onMouseEnter={() => {
                setHover(true);
                onHover();
            }}
            onMouseLeave={() => {
                setHover(false);
                onLeave();
            }}
        >
            <img src={teamImage} alt={title} />
            <div className="content">
                <h1>{title}</h1>
                <p>{description}</p>
                {(isActive || hover) && <button className="book-now">Book Now</button>}
            </div>
        </div>
    );
};

const App = () => {
    const sections = [
        { title: "Energy Solutions", image: office, description: "Innovative energy solutions for tomorrow." },
        { title: "Advanced Analytics", image: office, description: "Harness the power of data with advanced analytics." },
        { title: "Sustainability Initiatives", image: office, description: "Commit to sustainability in your operations." },
        { title: "Automation Systems", image: office, description: "Automate processes and increase efficiency." },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
    };

    const handleHover = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="container">s
            {sections.map((section, index) => (
                <Section
                    key={section.title}
                    {...section}
                    isActive={index === activeIndex}
                    onHover={() => handleHover(index)}
                    onLeave={() => setActiveIndex(activeIndex)}
                />
            ))}
            <div className="buttons">
                <button className="arrow-button" onClick={handlePrevious}>Previous</button>
                <button className="arrow-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default App;