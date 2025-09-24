import { projects } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";

export default function ProjectsSection() {
  const handleProjectClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏗️ Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <div 
                className="relative overflow-hidden rounded-xl shadow-md group w-full cursor-pointer"
                onClick={() => handleProjectClick(project.url)}> 
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3 left-3 bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg shadow">
                  {project.title}
                </div>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm leading-relaxed">{project.description}</p>
              
                    {project.technologies && (
                      <div className="mt-3 flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((tech, techIndex) => (
                          <button 
                            key={techIndex}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded transition-colors duration-200"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )}