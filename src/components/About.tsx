import React, { useEffect, useRef } from 'react';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-sky-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-500 dark:bg-sky-400 transform scale-x-50 origin-center"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Get to know me professionally and personally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-full text-sky-600 dark:text-sky-400 mr-4">
                <User size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold">My Story</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Swapnil Keshari, a dedicated software developer with a knack for turning ideas into reality. With a strong foundation in both front-end and back-end technologies, I enjoy crafting applications that are not only functional but also aesthetically pleasing. I'm a lifelong learner, always eager to explore new technologies and methodologies to enhance my skill set. My collaborative spirit and problem-solving abilities make me a valuable asset to any team.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold">Career Goals</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is to continue growing as a versatile developer, taking on challenging projects that push the boundaries of technology. I aspire to lead innovative teams and contribute to impactful products that make a difference. I'm particularly interested in leveraging AI and machine learning to create smarter, more intuitive user experiences.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-full text-amber-600 dark:text-amber-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Experience</h3>
            </div>
            <ul className="space-y-4">
              <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 hover:border-sky-500 dark:hover:border-sky-400 transition-colors duration-300">
                <p className="font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Software Development Engineer Intern</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bluestock Fintech IT Solutions inc. | 01-02-2025 - 01-03-2025</p>
                <ul className="text-gray-700 dark:text-gray-300 mt-1 list-disc ml-4 text-sm">
                  <li>Assisted senior developers with software development tasks</li>
                  <li>Participated in team meetings and contributed to project discussions</li>
                  <li>Learned and applied new technologies and development practices</li>
                </ul>
              </li>
              <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 hover:border-sky-500 dark:hover:border-sky-400 transition-colors duration-300">
                <p className="font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Cloud Computing and Big Data Internship</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ybi Foundation | 05/2024 – 06/2024</p>
                <ul className="text-gray-700 dark:text-gray-300 mt-1 list-disc ml-4 text-sm">
                  <li>Gained hands-on experience with cloud platforms (AWS, Azure, GCP)</li>
                  <li>Worked on projects involving big data processing and analysis</li>
                  <li>Learned about data storage solutions and data pipeline development</li>
                </ul>
              </li>
              <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 hover:border-sky-500 dark:hover:border-sky-400 transition-colors duration-300">
                <p className="font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Web Developer Intern</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tech alpha Pvt.Ltd | 10/05/2024 - 10/06/2024</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Designed, developed, and deployed responsive web applications using React.js and HTML.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Education</h3>
            </div>
            <ul className="space-y-4">
              <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 hover:border-sky-500 dark:hover:border-sky-400 transition-colors duration-300">
                <p className="font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">B.Tech in Information Technology</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2025</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">UNS Institute of Engineering and Technology (VBSPU), Jaunpur, Uttar Pradesh</p>
              </li>
              <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 hover:border-sky-500 dark:hover:border-sky-400 transition-colors duration-300">
                <p className="font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Senior Secondary (XII)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2019 - 2020</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">KVN Public School, Varanasi, Uttar Pradesh</p>
              </li>
              <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 hover:border-sky-500 dark:hover:border-sky-400 transition-colors duration-300">
                <p className="font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">Secondary (X)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2017 - 2018</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">KVN Public School, Varanasi, Uttar Pradesh</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;