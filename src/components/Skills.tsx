import React, { useEffect, useRef, useState } from 'react';
import { Code, Layout, Database, Terminal, LineChart, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Software' },
  ];

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend', icon: <Layout size={20} /> },
    { name: 'Next.js', level: 85, category: 'frontend', icon: <Code size={20} /> },
    { name: 'JavaScript', level: 85, category: 'frontend', icon: <Code size={20} /> },
    { name: 'HTML/CSS', level: 95, category: 'frontend', icon: <Layout size={20} /> },
    { name: 'Node.js', level: 75, category: 'backend', icon: <Terminal size={20} /> },
    { name: 'MongoDB', level: 70, category: 'backend', icon: <Database size={20} /> },
    { name: 'SQL', level: 65, category: 'backend', icon: <Database size={20} /> },
    { name: 'Git & GitHub', level: 85, category: 'tools', icon: <Cpu size={20} /> },
    { name: 'UI/UX Design', level: 80, category: 'tools', icon: <Layout size={20} /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (skillsRef.current) {
            const skills = skillsRef.current.querySelectorAll('.skill-bar');
            skills.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add('skill-animate');
              }, 300 + index * 100);
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
  }, [activeCategory]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 relative inline-block">
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 dark:bg-teal-400 transform scale-x-50 origin-center"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="mr-3 text-teal-600 dark:text-teal-400">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="skill-bar h-full bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 rounded-full" 
                  style={{ width: '0%' }}
                  data-width={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;