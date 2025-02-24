"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

// Lazy load Threads component to improve performance
const Threads = dynamic(() => import('@/components/Threads'), { ssr: false });

const HomePage: React.FC = () => {
  // State to check if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Projects Data
  const projects = [
    {
      title: "BSO Space Blog",
      description: "A collaborative blog platform targeting Software Engineering students.",
      imgSrc: "/images/projects/BSOSpace-Blog.png",
      repoLink: "https://github.com/bsospace/BSOSpace-Blog-Frontend",
      projectLink: "https://blog.bsospace.com",
    },
    {
      title: "Share Bill",
      description: "An application designed to simplify bill splitting among groups.",
      imgSrc: "/images/projects/Share-Bill.png",
      repoLink: "https://github.com/bsospace/share-bill",
      projectLink: "https://sharebill.bsospace.com",
    },
    {
      title: "Simple Poll (Coming Soon...)",
      description: "A simple polling application for quick decision-making.",
      repoLink: "https://github.com/bsospace/poll",
      imgSrc: "/images/projects/soon.png",
    },
    {
      title: "Attendify (Coming Soon...)",
      description: "An event management platform for creating and managing events.",
      imgSrc: "/images/projects/soon.png",
    },
  ];

  // Founders Data
  const founders = [
    { name: 'Juné | Thidarat Onsanit', title: 'CEO', bio: 'Focuses on innovation and growth.', contact: 'about/thidarat', imgSrc: '/images/founders/JUNE.png' },
    { name: 'Bom | Piyawat Wongyat', title: 'Full-Stack Developer', bio: 'Driven to build impactful SaaS solutions.', contact: 'about/piyawat', imgSrc: '/images/founders/BOM.png' },
    { name: 'Smart | Natnawat Panisarasirikul', title: 'Dev & Product Strategist', bio: 'Passionate about creating efficient project tools.', contact: 'about/natnawat', imgSrc: '/images/founders/SMART.png' },
    { name: 'Ohm | Jessada Naka', title: 'Developer', bio: 'Loves building user-friendly solutions.', contact: 'about/jessada', imgSrc: '/images/founders/OHM.png' },
  ];

  // Scroll to Project Section
  const scrollToProjects = () => {
    requestAnimationFrame(() => {
      document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 py-10">
        {!isMobile && (
          <div style={{ width: '100%', height: '100%', position: 'fixed' }} className='-z-20 top-48'>
            <Threads amplitude={0.5} distance={0.2} enableMouseInteraction={true} />
          </div>
        )}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-gray-800 will-change-transform"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BSO Space
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be Simple but Outstanding.
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          More About Us
        </motion.button>
      </section>

      {/* Project Section */}
      <section id="projects-section" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto space-y-12 px-4">
          <h2 className="text-4xl font-semibold text-center mb-8 fade-in visible">Projects</h2>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-full md:w-1/2 order-${index % 2 === 0 ? '1' : '2'}`}>
                <Image src={project.imgSrc} alt={project.title} className="rounded-lg shadow-lg" width={500} height={300} layout="intrinsic" loading="lazy" />
              </div>
              <div className="w-full md:w-1/2 space-y-2">
                <h3 className="text-3xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  {project.projectLink && <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>}
                  {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub Repo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Co-Founder Section */}
        <div className='flex justify-center space-x-4 my-8'>
          <a href="https://github.com/bsospace" target="_blank" rel="noopener noreferrer">
            <Button className="text-white hover:bg-gray-700 transition duration-300">
              <FaGithub className="w-6 h-6 text-white" />
              GitHub
            </Button>
          </a>
          <a href="https://www.instagram.com/bsospace/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text transition duration-300">
              <FaInstagram className="w-6 h-6 text-black" />
              Instagram
            </Button>
          </a>
          <a href="https://www.buymeacoffee.com/bsospace" target="_blank" rel="noopener noreferrer">
            <Button className="hover:bg-pink-200 hover:text-pink-600 transition duration-300">
              <FaHeart className="w-6 h-6 text-pink-400" />
              Support Us
            </Button>
          </a>
        </div>
      <section className="pb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">Meet the Co-Founders</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full h-[350px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image src={founder.imgSrc} alt={founder.name} className="w-full h-full object-cover" width={400} height={350} loading="lazy" />
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl font-semibold">{founder.name}</h3>
                <p className="text-sm text-gray-200">{founder.title}</p>
                <p className="mt-1 text-gray-300">{founder.bio}</p>
                <a href={`/${founder.contact}`} className="text-black-400 underline mt-2 inline-block">More</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
