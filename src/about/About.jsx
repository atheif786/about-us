import React, { useRef } from 'react';
import "./About.css";
import videobg from '../assets/853789-hd_1920_1080_25fps.mp4';
import visionIcon from '../assets/Screenshot 2024-09-02 135020.png';
import teamImage from '../assets/our-vision-banner-min.jpg';
import earthImage from '../assets/earth.jpg';
import workVideo from '../assets/3255275-uhd_3840_2160_25fps.mp4';
import engineer from '../assets/eng.png';
import second from '../assets/sec.png';
import dedication from '../assets/ded.png';

const About = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="about-eleks-section">
        <div className="about-eleks-content">
          <video autoPlay muted loop className="background-video">
            <source src={videobg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content-overlay">
            <h1>About ELEKS</h1>
            <p>ELEKS is the partner of choice for many of the world's leading enterprises, SMEs, and technology challengers. We help businesses elevate their value through custom software development, product design, QA, and consultancy services.</p>
            <div className="about-eleks-buttons">
              <button className="btn-expert">Get expert advice</button>
              <button className="btn-video">Watch video</button>
            </div>
          </div>
        </div>
        <div className="about-eleks-stats">
          <div className="stat">
            <h3>120+</h3>
            <p>Active client accounts</p>
          </div>
          <div className="stat">
            <h3>2000+</h3>
            <p>Specialists</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>End-to-end projects</p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Problems we’ll help you solve</h2>
        <div className="solutions">
          <div className="solution">
            <h3>01</h3>
            <h4>Build your perfect development team</h4>
            <p>
              Our team of more than 2000 software experts are able to tailor our core services to fit your business requirements. 
              And for those most complex of challenges, we’ll engage experts with a grounding in physics and mathematics – to guarantee success where software expertise alone might not be enough.
            </p>
          </div>
          <div className="solution">
            <h3>02</h3>
            <h4>Adopt digital transformations</h4>
            <p>
              Adapt to changing demands with agile, innovative technologies – like blockchain, Data Science, and Cloud. 
              We will translate your needs into transparent and scalable custom enterprise solutions tailored to your customers’ needs and your unique business environment and goals.
            </p>
          </div>
          <div className="solution">
            <h3>03</h3>
            <h4>Unify your enterprise's digital ecosystem</h4>
            <p>
              We build scalable software solutions that provide an integrated digital environment for the enterprise's dispersed IT systems, geo-diverse site locations, and fragmented remote teams. 
              Optimize and unify your digital ecosystem to enable your enterprise's continued growth and ensure its scalability for the future.
            </p>
          </div>
        </div>
      </div>
      <div className="vision-container">
        <div className="vision-content">
          <img src={visionIcon} alt="Vision Icon" className="vision-icon" />
          <h2>Our Vision</h2>
          <p>
            Our belief in creating tangible value for our customers is what we think is different about ELEKS. Our attention to detail and quality is unmatched in the industry. 
            We're not just a resource provider. We value our customers' success as much as our own – sharing development risk, so that they can be bold in their adoption of new technologies.
          </p>
        </div>
        <div className="vision-image">
          <img src={teamImage} alt="Team brainstorming" className="team-image" />
        </div>
      </div>
      <div className="nearshore-teams-container">
        <img src={earthImage} alt="earth" className="earth-image" />
        <h2 className="nearshore-teams-heading">Our nearshore teams</h2>
        <p className="nearshore-teams-description">
          With ELEKS nearshore software development team, you get access to a talent pool of 2000+ multiskilled specialists to plug any skill gaps within your in-house team. With our 20 offices distributed in key cities over three continents, our experts are positioned for a seamless working partnership.
        </p>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>←</button>
        <div className="country-section" ref={containerRef}>
          {/* Country boxes with partner and business details */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="country-box" key={index}>
              <div className="header">
                <div className="country">Country {index + 1}</div>
                <div className="partner">Partner {index + 1}</div>
              </div>
              <div className="business-details">
                <p>Business {index + 1}</p>
                <p>Number: {1000 + index}</p>
                <p>Street: Example Street {index + 1}</p>
                <p>Address: City, Country</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>→</button>
      </div>
      <div className="big-box">
        <div className="video-container">
          <video autoPlay muted loop className="ground-video">
            <source src={workVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-content">
          <h1>We offer flexible cooperation models that fit your goals, resources and timeline.</h1>
        </div>
      </div>
      <div className="eleks-wrapper">
            <h1 className="header-title">What’s different about ELEKS</h1>
            <div className="eleks-container">
                <div className="eleks-block">
                    <div className="icon">
                        <img src={engineer} alt="Engineering Icon"/>
                    </div>
                    <h2>Engineering with passion</h2>
                    <p>We’re a network of innovators. We devise bold solutions to the most intricate client challenges. It’s our ability to explore new technologies to design best-fit solutions that has 96% of our clients ready to recommend us.</p>
                </div>
                <div className="eleks-block">
                    <div className="icon">
                        <img src={second} alt="Performance Icon"/>
                    </div>
                    <h2>Performance focus</h2>
                    <p>We become your dedicated partner. Which means we won’t finish a project until both we, and you, are 100% happy. With a client satisfaction rate of over 97%, we’re considered a key strategic technology partner.</p>
                </div>
                <div className="eleks-block">
                    <div className="icon">
                        <img src={dedication} alt="Success Icon"/>
                    </div>
                    <h2>Dedication to success</h2>
                    <p>We drive innovations that help our clients stay ahead of the curve. We care about your immediate needs and your long-term goals. We believe that success is three-fold: for our clients, their customers, and the communities they influence.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
