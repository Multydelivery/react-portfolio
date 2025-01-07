import React from 'react';

const Projects = () => {
  // Array of project details with image paths, GitHub links, live website links, and descriptions
  const projects = [
    {
      image: '/react-portfolio/images/APOD Nasa.png',
      title: 'NASA APOD Viewer',
      description: 'An app that fetches and displays NASA’s Astronomy Picture of the Day with details and explanations.',
      github: 'https://github.com/yourusername/nasa-apod',
      website: 'https://nasa-apod-viewer.com',
    },
    {
      image: '/react-portfolio/images/hvacsolutionsscreenshot.png',
      title: 'HVAC Solutions',
      description: 'A modern HVAC management platform for technicians and customers to streamline service workflows.',
      github: 'https://github.com/yourusername/hvac-solutions',
      website: 'https://hvac-solutions.com',
    },
    {
      image: '/react-portfolio/images/pixel-plate-screenshot.png',
      title: 'Pixel Plate',
      description: 'A creative platform for pixel art and design enthusiasts to showcase and collaborate on projects.',
      github: 'https://github.com/yourusername/pixel-plate',
      website: 'https://pixel-plate.com',
    },
    {
      image: '/react-portfolio/images/Screenshot 2024-09-17 160152.png',
      title: 'Next Project',
      description: 'A cutting-edge project leveraging the latest in technology to deliver impactful solutions.',
      github: 'https://github.com/Multydelivery/gym-workouts',
      website: 'https://gym-workouts-time.netlify.app/',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
      {/* Heading Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          My <span className="text-pink-500">Projects</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl">
          Explore some of the groundbreaking work I've done. Each project showcases creativity, innovation, and futuristic solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Render Project Cards Dynamically */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-500 to-blue-500 opacity-50 blur-xl rounded-lg"></div>

              <div className="relative z-10">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center"
                />

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-400">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white bg-pink-500 rounded-md shadow-md hover:bg-pink-600 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;



