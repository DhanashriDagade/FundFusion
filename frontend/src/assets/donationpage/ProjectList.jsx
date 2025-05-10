import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Clean Water for Village', shortDescription: 'Help us bring water to rural areas' },
  { id: 2, title: 'School Supplies for Kids', shortDescription: 'Donate for underprivileged children’s education' },
  // Add more
];

const ProjectList = () => {
  return (
    <div className="container mt-4">
      <h2>Active Campaigns</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
