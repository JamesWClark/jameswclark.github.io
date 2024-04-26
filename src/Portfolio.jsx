import { useState } from 'react';
import './Portfolio.css';
import projects from './assets/data/projects.json';

function Portfolio() {

  
  return (
    <div className="portfolio-feed fluid-container">
      {projects.map((project, index) => (
        <div className="row" key={index}>
          <div className="primary col-lg-12">
            <img src={`/img/${project.banner}`} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
