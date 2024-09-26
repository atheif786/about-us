import React from 'react';
import './Work.css';
import office from '../assets/lap.jpg';
import extension from '../assets/ext.png';
import design from '../assets/desi.png';
import reduce from '../assets/cec.png';
import tech from '../assets/tech.png';
import almost from '../assets/alm.png';
import flex from '../assets/flex.png';
import cooperation from '../assets/coop.jpg';

const Work = () => {
  return (
    <div className="how-we-work">
      {/* Section Header */}
      <div className="header-section">
        <h1>How We Work</h1>
        <p>We help you address complex business problems with technology solutions.</p>
        <hr className="divider" />
      </div>

      {/* Problem-Solving Section */}
      <div className="problem-solving-section">
        <div className="overlay-text">
          <h2>The problem-solving technology partnership</h2>
          <p>
            ELEKS has championed technological innovation since 1991. Now, with more than 2000
            experts across Europe, the US, and Canada, we help clients overcome business challenges
            with custom software engineering and consultancy services that add tangible value.
          </p>
          <p>
            We’re passionate about our cross-functional approach. We help you design, test, build
            and deliver products – faster and more cost-effectively. ELEKS’ cooperation models offer
            flexibility, so we can match our services to your goals, resources, and timeline. We’re
            proud to contribute to the success of the world’s leading brands.
          </p>
        </div>
        <img src={office} alt="Problem-solving technology" className="background-image" />
      </div>

      {/* What You Get With ELEKS Section */}
      <div className="what-you-get">
        <h2>What You Get With ELEKS</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <img src={extension} alt="Icon 1" />
            <p>Extensive technology consulting expertise</p>
          </div>
          <div className="benefit-item">
            <img src={design} alt="Icon 2" />
            <p>Design Thinking approach to transformational solutions</p>
          </div>
          <div className="benefit-item">
            <img src={reduce} alt="Icon 3" />
            <p>Reduced investment risk with MVP development</p>
          </div>
          <div className="benefit-item">
            <img src={tech} alt="Icon 4" />
            <p>Technological innovation via ELEKS’ in-house R&D lab</p>
          </div>
          <div className="benefit-item">
            <img src={almost} alt="Icon 5" />
            <p>Almost 3 decades of software development experience</p>
          </div>
          <div className="benefit-item">
            <img src={flex} alt="Icon 6" />
            <p>Flexible, cost-efficient cooperation models</p>
          </div>
        </div>
      </div>
      <div className="cooperation-section">
      <h2>How We Cooperate</h2>
      <img src={cooperation} alt="Product Oriented Delivery Icon" className="service-icon" />
      <div className="service">
        <div className="service-content">
          <h3>Product-oriented delivery</h3>
          <p>A guaranteed delivery of your software product within your timeline or budget constraints.</p>
          <p><strong>Our responsibility:</strong> the implementation roadmap, budget, quality metrics, risk management, delivery process setup, and all the team-related aspects.</p>
          <p><strong>Client responsibility:</strong> providing business context, time/budget constraints and the product vision.</p>
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" className="service-link">Explore the service</a>
        </div>
      </div>
      <div className="service">
        <div className="service-content">
        
          <h3>Custom software development</h3>
          <p>Includes PoC development, software engineering and reengineering services.</p>
          <p><strong>Our responsibility:</strong> Deliver product on time and within budget</p>
          <p><strong>Client responsibility:</strong> Provide product vision, scope and desired timeline</p>
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" className="service-link">Explore the service</a>
        </div>
      </div>
    </div>
    <div className="process-section">
      <h2>What We Do</h2>
      <h3>
        Consistency and transparency are key to our delivery process, so we follow the same framework regardless of the project.
      </h3>

      {/* Navigation Dots */}
      <div className="progress-indicator">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* Process Steps */}
      <div className="process-steps">
        <div className="step">
          <div className="step-header"> 
            <span className="step-number">01</span>
            <h4>Pre-discovery</h4>
          </div>
          <p>
            We visit our client to understand the challenges and goals of delivery. It gives us a holistic view of the project so we can brainstorm and co-create a solution. Working this way encourages a collaborative approach, so we know we’re working towards the same vision.
          </p>
        </div>

        <div className="step">
          <div className="step-header">
            <span className="step-number">02</span>
            <h4>Discovery</h4>
          </div>
          <p>
            We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.
          </p>
          <ul>
            <li><strong>Classic discovery:</strong> A cross-functional team works with stakeholders to identify gaps and build a project roadmap.</li>
            <li><strong>Product design:</strong> Develops a concept focusing on user needs, competitors, and the market.</li>
          </ul>
        </div>

        <div className="step">
          <div className="step-header">
            <span className="step-number">03</span>
            <h4>Development and solution implementation</h4>
          </div>
          <p>
            Our custom application development services encompass architecture, development, testing, and deployment. We use tried and tested processes and automation for fast delivery.
          </p>
          <ul>
            <li><strong>Solution implementation:</strong> End-to-end delivery.</li>
            <li><strong>Process and metrics:</strong> Implementing requirements with metrics for transparency.</li>
            <li><strong>Infrastructure setup:</strong> Budgeting, management, and deployment.</li>
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="nav-btn prev">&larr;</button>
        <button className="nav-btn next">&rarr;</button>
      </div>
      </div>
    </div>
  );
};

export default Work;
