import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.shortDescription}</Card.Text>
        <Button variant="primary" onClick={handleSeeMore}>
          See More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
