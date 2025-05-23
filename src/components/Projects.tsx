import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Beverage Order',
      description: 'A full-featured e-commerce website with product listings, shopping cart, user authentication, and payment integration. Built with Next.js, Stripe, and PostgreSQL.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['web', 'frontend', 'react', 'tailwind'],
      demoLink: 'https://musical-alpaca-7e88d0.netlify.app/',
      codeLink: 'https://github.com/Swapnil-keshari-vns/-Beverage-Order-Website'
    },
    {
      id: 'project2',
      title: 'Earthquake Prediction System',
      description: 'A system that predicts earthquakes using machine learning techniques. Developed using Python and various ML libraries.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['python', 'machine-learning', 'data'],
      demoLink: 'https://teal-pasca-2d18c0.netlify.app/',
      codeLink: 'https://github.com/Swapnil-keshari-vns/-Beverage-Order-Website'
    },
    {
      id: 'project3',
      title: 'Landslide Risk Assessment System',
      description: 'A system to assess landslide risk using Python, AI & ML.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['python', 'ai', 'machine-learning'],
      demoLink: 'https://inspiring-phoenix-ccfbfd.netlify.app/',
      codeLink: 'https://github.com/Swapnil-keshari-vns/-Beverage-Order-Website'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'python', label: 'Python' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'ai', label: 'AI' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (projectsRef.current) {
            const projects = projectsRef.current.querySelectorAll('.project-card');
            projects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add('project-animate');
              }, 300 + index * 150);
            });
          }
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 transition-opacity duration-1000 opacity-0 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container px-4 mx-auto sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="relative inline-block mb-4 font-serif text-3xl font-bold md:text-4xl">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 origin-center transform scale-x-50 bg-teal-500 dark:bg-teal-400"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Showcasing my recent work and contributions
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-md'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={projectsRef}
          className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="overflow-hidden transition-all duration-500 translate-y-8 bg-white shadow-lg opacity-0 project-card dark:bg-gray-900 rounded-xl"
            >
              <div className="relative overflow-hidden group h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end justify-start p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      aria-label="View code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className="px-3 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;