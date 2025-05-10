import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const projects = [
  { id: 1, title: 'Clean Water for Village', fullDescription: 'Full details about water campaign...' },
  { id: 2, title: 'School Supplies for Kids', fullDescription: 'Full details about education support...' },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  const handleDonate = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/donate'); // ✅ you can change to `/donate/${id}` if needed
    } else {
      navigate('/login');
    }
  };

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="container mt-4">
      <h2>{project.title}</h2>
      <p>{project.fullDescription}</p>
      <Button variant="success" onClick={handleDonate}>Donate</Button>
    </div>
  );
};

export default ProjectDetails;
