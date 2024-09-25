import ProjectCard from "./card/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-4 relative">
      <h2 className="text-3xl font-semibold text-gray-700">Projects</h2>
      <div className="flex flex-wrap gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
