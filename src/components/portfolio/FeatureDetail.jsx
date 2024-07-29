import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// ...

function FeatureDetail({ projects }) {
  const { id } = useParams();
  const feature = projects.find(project => project.id === id);

  // Destructure properties from the `feature` object
  const { feature: type, banner, title, description, tech } = feature;

  // const markdown = fetch(`/markdown/${feature.markdown}`).then(response => response.text());

  return (
    <div className="feature-detail fluid-container">
      <div className="row">
        <div className={`col-lg-6`}>
          <div className={`feature ${type}`}>
            <div className={`frame ${type}`}>
                <img src={`/img/${banner}`} alt={title} />
            </div>
          </div>
        </div>
        <div className={`col-lg-6`}>
          <h1>{title}</h1>
          <div>
            {tech.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </div>
          <div>{description}</div>      
        </div>
      </div>
      {/* <ReactMarkdown remarkPlugins={[gfm]} children={markdown} /> */}
    </div>
  );
}

export default FeatureDetail;
