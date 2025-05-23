import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ArrowDownCircle, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#14b8a6" />
      </mesh>
    </>
  );
};

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const scrollValue = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollValue * 0.1}px)`;
        textRef.current.style.transform = `translateY(${scrollValue * 0.05}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50 dark:from-sky-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-sky-300/10 dark:bg-sky-600/10 blur-3xl"></div>
        <div className="absolute rounded-full bottom-20 left-20 w-80 h-80 bg-blue-300/10 dark:bg-blue-600/10 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto sm:px-6">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div 
            ref={textRef}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400">
                Swapnil Keshari
              </span>
            </h1>
            
            <p className="mb-8 text-xl leading-relaxed text-gray-700 sm:text-2xl dark:text-gray-300">
              Full-Stack Developer & UI/UX Enthusiast. I build modern, responsive, and user-friendly web applications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 lg:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 font-medium text-white transition-colors duration-300 rounded-full shadow-lg bg-sky-600 dark:bg-sky-500 hover:bg-sky-700 dark:hover:bg-sky-600 hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Get in Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1OUtPGZfUzIzMe6LDhbdQDl-4kEC3-H3W/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center px-6 py-3 font-medium text-gray-900 transition-colors duration-300 bg-white border border-gray-300 rounded-full shadow-md dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 hover:shadow-lg"
              >
                <FileText size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
            
            <div className="flex justify-center space-x-6 lg:justify-start">
              <a 
                href="https://github.com/Swapnil-keshari-vns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/swapnil-keshari-7a149b307/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:swapnilkeshari2001@gmail.com" 
                className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-sky-500/20 to-blue-500/20 dark:from-sky-400/20 dark:to-blue-400/20 blur-xl"></div>
              <div className="relative w-full h-full">
                <Canvas className="w-full h-full">
                  <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <Scene />
                    <OrbitControls enableZoom={false} autoRotate />
                  </Suspense>
                </Canvas>
                <img 
                  ref={imageRef}
                  src="https://i.ibb.co/Jk6Bx7t/swapnil-photo.jpg"
                  alt="Swapnil Keshari"
                  className="absolute inset-0 object-cover w-full h-full border-4 border-white shadow-2xl rounded-2xl dark:border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className="text-gray-600 transition-colors dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400"
            aria-label="Scroll to next section"
          >
            <ArrowDownCircle size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;