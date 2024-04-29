import { useState } from 'react';
import './Portfolio.css';
import projects from './assets/data/projects.json';

function Portfolio() {

  const renderFeature = (feature, type) => {
    let colSize;
    switch (type) {
      case 'primary':   colSize = 12; break;
      case 'secondary': colSize = 6;  break;
      case 'tertiary':  colSize = 3;  break;
      default: return 3; // default to tertiary
    }

    return (
      <div className={`col-lg-${colSize}`}>
        <div className={`feature ${type}`}>
          <img src={`/img/${feature.banner}`} alt={feature.title} />
        </div>
      </div>
    );
  };

  const groupedProjects = projects.reduce((acc, project) => {
    const colSize = project.feature === 'primary' ? 12 : project.feature === 'secondary' ? 6 : 3;
    if (!acc.length || acc[acc.length - 1].reduce((sum, p) => sum + (p.feature === 'primary' ? 12 : p.feature === 'secondary' ? 6 : 2), 0) + colSize > 12) {
      acc.push([project]);
    } else {
      acc[acc.length - 1].push(project);
    }
    return acc;
  }, []);

  return (
    <div className="portfolio-feed fluid-container">
      {groupedProjects.map((group, index) => (
        <div className="row" key={index}>
          {group.map((project, i) => renderFeature(project, project.feature))}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
