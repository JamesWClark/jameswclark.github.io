import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// ...

function FeatureDetail() {
  const { id } = useParams();
  const feature = projects.find(project => project.id === id);
  const markdown = fetch(`/markdown/${feature.markdown}`).then(response => response.text());

  return (
    <div>
      <h1>{feature.title}</h1>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
    </div>
  );
}

export default FeatureDetail;