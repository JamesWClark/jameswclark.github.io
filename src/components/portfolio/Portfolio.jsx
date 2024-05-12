import { useState } from 'react';
import './Portfolio.css';
import projects from '../../assets/data/projects.json';
import { Link } from 'react-router-dom';

function Portfolio() {

  const renderFeature = (feature, type, key) => {
    let colSize;
    switch (type) {
      case 'primary':   colSize = 12; break;
      case 'secondary': colSize = 6;  break;
      case 'tertiary':  colSize = 3;  break;
      default: return 3; // default to tertiary
    }

    return (
      <div className={`col-lg-${colSize}`} key={key}>
        <div className={`feature ${type}`}>
          <div className={`frame ${type}`}>
            <Link to={`/feature/${feature.id}`}>
              <img src={`/img/${feature.banner}`} alt={feature.title} />
            </Link>
          </div>
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
          {group.map((project, i) => renderFeature(project, project.feature, i))}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
