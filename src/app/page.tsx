"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  // Projects Data
  const projects = [
    {
      title: "BSO Space Blog",
      description: "A collaborative blog platform targeting Software Engineering students.",
      imgSrc: "/images/projects/BSOSpace-Blog.png",
      repoLink: "https://github.com/BSO-Space/BSOSpace-Blog-Frontend",
      projectLink: "https://blog.bsospace.com",
    },
    {
      title: "Share Bill",
      description: "An application designed to simplify bill splitting among groups.",
      imgSrc: "/images/projects/Share-Bill.png",
      repoLink: "https://github.com/BSO-Space/share-bill",
      projectLink: "https://sharebill.bsospace.com",
    },
    {
      title: "[In future] JustProj",
      description: "Project Tracking Tool | A scalable, customizable task management system.",
      imgSrc: "/images/projects/Just-Proj.jpg",
    },
  ];

  // Founders Data
  const founders = [
    { name: 'Bom | Piyawat Wongyat', title: 'Full-Stack Developer', bio: 'Driven to build impactful SaaS solutions.', contact: 'about/piyawat', imgSrc: '/images/founders/BOM.png' },
    { name: 'Smart | Natnawat Panisarasirikul', title: 'Dev & Product Strategist', bio: 'Passionate about creating efficient project tools.', contact: 'about/founders/natnawat', imgSrc: '/images/founders/SMART.png' },
    { name: 'Ohm | Jessada Naka', title: 'Developer', bio: 'Loves building user-friendly solutions.', contact: 'about/jessada', imgSrc: '/images/founders/OHM.png' },
    { name: 'Juné | Thidarat Onsanit', title: 'CEO', bio: 'Focuses on innovation and growth.', contact: 'about/thidarat', imgSrc: '/images/founders/JUNE.png' },
  ]


  // Scroll to Project Section
  const scrollToProjects = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 py-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BSO Space
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be Simple but Outstanding.
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          More About Us
        </motion.button>
      </section>

      {/* Project Section */}
      <section id="projects-section" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto space-y-12 px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-full md:w-1/2 order-${index % 2 === 0 ? '1' : '2'}`}>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-2">
                <h3 className="text-3xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  {/* Conditionally Render Links */}
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Project
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-8">Meet the Co-Founders</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full h-[350px]"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={founder.imgSrc}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl font-semibold">{founder.name}</h3>
                <p className="text-sm text-gray-200">{founder.title}</p>
                <p className="mt-1 text-gray-300">{founder.bio}</p>
                <a href={`/${founder.contact}`} className="text-black-400 underline mt-2 inline-block">
                  More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;