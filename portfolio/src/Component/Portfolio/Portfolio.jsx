import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import soc1 from "../../assets/soc1.png";
import bank1 from "../../assets/bank1.png";
import dj1 from "../../assets/dj1.png";
import fam1 from "../../assets/fam1.png";
import native1 from "../../assets/native1.png";
import food1 from "../../assets/food1.png";
import car1 from "../../assets/car1.png";
import just1 from "../../assets/just1.png";
import player1 from "../../assets/player1.png";

const projects = [
  {
    title: "Social Media Platform",
    description:
      "Instagram, TikTok, and WhatsApp-inspired platform with messaging, stories, media sharing, authentication, and notifications.",
    image: soc1,
    github: "https://github.com/omolisa1245/ChatAt.git",
    website: "https://chat-at-a1y9.vercel.app/",
    tech: ["React", "Node.js", "Firebase"],
    featured: true,
  },

  {
    title: "Christian Empowerment Platform",
    description:
      "Faith-based platform focused on leadership development, mentorship, youth empowerment, and community growth.",
    image: fam1,
    github: "https://github.com/Fameuntold/Fameuntold.git",
    website: "https://fameuntold-v6c3.vercel.app/",
    tech: ["React", "Tailwind"],
    featured: true,
  },

  {
    title: "Online Banking App",
    description:
      "Modern banking application with secure transfers, transaction history, account management, and notifications.",
    image: bank1,
    github: "https://github.com/omolisa1245/Tal-Bank.git",
    website: "https://tal-bank-j87e.vercel.app/",
    tech: ["React", "Tailwind", "API"],
    featured: true,
  },

  {
    title: "Virtual DJ App",
    description:
      "Browser-based DJ application with audio controls, effects, mixing tools, and responsive performance.",
    image: dj1,
    github: "https://github.com/omolisa1245/virtual.git",
    website: "https://virtual-seven-kappa.vercel.app/",
    tech: ["React", "Web Audio API"],
  },

  {
    title: "Music Player",
    description:
      "Interactive music player with playlist support, playback controls, and responsive UI.",
    image: player1,
    github: "https://github.com/omolisa1245/Goplay.git",
    website: "https://goplay-raj7.vercel.app/",
    tech: ["React", "CSS"],
  },

  {
    title: "Kiddies Store",
    description:
      "E-commerce platform for newborn, baby, and toddler products with smooth shopping experience.",
    image: native1,
    github: "https://github.com/omolisa1245/kiddiesplace.git",
    website: "https://kiddiesplace-tdse.vercel.app/",
    tech: ["React", "Tailwind"],
  },

  {
    title: "Food E-commerce",
    description:
      "Online food ordering platform showcasing authentic Nigerian dishes and cultural experiences.",
    image: food1,
    github: "https://github.com/omolisa1245/nativepot.git",
    website: "https://nativepot-ten.vercel.app/",
    tech: ["React", "Tailwind"],
  },

  {
    title: "Car Services Website",
    description:
      "Vehicle transportation and logistics platform focused on reliability and customer satisfaction.",
    image: car1,
    github: "https://github.com/omolisa1245/ride-along.git",
    website: "https://ride-along-l49g.vercel.app/",
    tech: ["React", "Tailwind"],
  },

  {
    title: "Music Instrument Platform",
    description:
      "Virtual music lesson platform connecting students with instructors for online learning.",
    image: just1,
    github: "https://github.com/omolisa1245/justring.git",
    website: "https://justring-c62t.vercel.app/",
    tech: ["React", "Node.js"],
  },
];

const ProjectCard = ({ project, onPreview }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-stone-700 bg-stone-800/70 backdrop-blur-lg transition-all duration-300 hover:border-amber-500 hover:-translate-y-2">

      {project.featured && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-black">
          Featured
        </span>
      )}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          onClick={() => onPreview(project.image)}
          className="h-64 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black transition hover:bg-amber-500"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white px-4 py-3 text-white transition hover:bg-white hover:text-black"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="Portfolio"
      className="bg-stone-950 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-[6px] text-amber-500">
            Portfolio
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Featured Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            A collection of web applications, SaaS products,
            e-commerce solutions, and business platforms
            designed with scalability, performance, and
            exceptional user experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-3 gap-6 rounded-3xl border border-stone-800 bg-stone-900 p-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-amber-500">
              10+
            </h2>
            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-amber-500">
              100%
            </h2>
            <p className="text-gray-400">Responsive</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-amber-500">
              24/7
            </h2>
            <p className="text-gray-400">Support</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onPreview={setSelectedImage}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <img
              src={selectedImage}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;