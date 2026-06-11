import {
  Code2,
  ExternalLink,
} from "lucide-react";
 
import {
  FaGithub
} from "react-icons/fa";
 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
 
const projects = [
  {
    id: "",
    title: "Academic Management Platform",
    description:
      "Full stack academic management system developed at UDES to optimize processes for students, professors and administrators. Built with scalable architecture, authentication and role-based access control.",
    image: "/screenshots/academic-platform.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: null,
    demo: null,
  },
 
  {
    id: "",
    title: "TokenShift",
    description:
      "Modern reservation management platform developed as a personal full stack project. Features authentication, responsive interfaces and scalable architecture using modern web technologies.",
    image: "/screenshots/tokenshift.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/wllmvg/TokenShift",
    demo: "https://wllmvg.github.io/TokenShift/",
  },
 
  {
    id: "",
    title: "Scheduly",
    description:
      "Academic productivity application that converts university schedules into Google Calendar events automatically, helping students save time and stay organized throughout the semester.",
    image: "/screenshots/scheduly.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Google Calendar API",
      "REST APIs",
    ],
    github: "https://github.com/wllmvg/Scheduly",
    demo: "https://wllmvg.github.io/Scheduly/",
  },
 
  {
    id: "",
    title: "Physics Calculator",
    description:
      "Desktop application built in Python for solving electrical and mechanical physics problems through intuitive calculation tools focused on accuracy and educational value.",
    image: "/screenshots/physics-calculator.jpg",
    technologies: [
      "Python",
      "Mathematical Algorithms",
    ],
    github:
      "https://github.com/wllmvg/Fisica-El-ctrica-y-Mec-nica-Proyecto",
    demo: null,
  },
];
 
const cubicBezierEase = [0.22, 1, 0.36, 1] as const;

// Animación de entrada para cada tarjeta de proyecto:
// fade in + slide up + scale + blur, con easing suave, una sola vez (whileInView + viewport once)
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: cubicBezierEase as any,
    },
  },
};
 
// Animación simple para el bloque final de "Más proyectos"
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezierEase as any,
    },
  },
};
 
export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
 
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
 
        {/* HEADER */}
 
        <motion.div
          className="mb-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
 
          <span
            className="
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-sm
              text-zinc-300
            "
          >
            Projects
          </span>
 
          <h1
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
            "
          >
            Selected Work
          </h1>
 
          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-zinc-400
            "
          >
            A collection of projects showcasing my
            experience in full stack development,
            software architecture and modern web
            technologies.
          </p>
 
        </motion.div>
 
        {/* PROJECTS */}
 
        <div className="space-y-40">
 
          {projects.map((project, index) => (
 
            <motion.section
              key={project.id || project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`
                group/card
                grid
                items-center
                gap-12
                lg:grid-cols-2
                rounded-[40px]
                p-6
                lg:p-10
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)]
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
 
              {/* IMAGE */}
 
              <div className="relative">
 
                <div
                  className="
                    absolute
                    -inset-10
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                    transition-opacity
                    duration-500
                    opacity-60
                    group-hover/card:opacity-100
                  "
                />
 
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    cursor-zoom-in
                  "
                  onClick={() => setSelectedImage(project.image)}
                >
                  <motion.img
                    layoutId={`project-image-${project.image}`}
                    src={project.image}
                    alt={project.title}
                    className="
                      h-[500px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>
 
              </div>
 
              {/* CONTENT */}
 
              <div>
 
                <h2
                  className="
                    text-8xl
                    font-black
                    leading-none
                    text-white/10
                  "
                >
                  {project.id}
                </h2>
 
                <h3
                  className="
                    mt-4
                    text-4xl
                    md:text-5xl
                    font-black
                  "
                >
                  {project.title}
                </h3>
 
                <p
                  className="
                    mt-6
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {project.description}
                </p>
 
                {/* TECH STACK */}
 
                <div className="mt-8 flex flex-wrap gap-3">
 
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        group/tag
                        relative
                        overflow-hidden
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-400/40
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-cyan-400/20
                          via-transparent
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover/tag:opacity-100
                        "
                      />
                      <span className="relative">{tech}</span>
                    </span>
                  ))}
 
                </div>
 
                {/* BUTTONS */}
 
                <div className="mt-10 flex flex-wrap gap-4">
 
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        px-6
                        py-3
                        transition
                        hover:bg-white/10
                      "
                    >
                      <Code2 size={18} />
                      GitHub
                    </a>
                  ) : (
                    <div
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-6
                        py-3
                        text-zinc-500
                      "
                    >
                      Private Repository
                    </div>
                  )}
 
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        px-6
                        py-3
                        font-medium
                        text-black
                        transition
                        hover:scale-105
                      "
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
 
                </div>
 
              </div>
 
            </motion.section>
 
          ))}
 
          {/* MORE PROJECTS */}
 
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-zinc-900
              via-slate-950
              to-zinc-900
              p-12
              text-center
              transition-all
              duration-500
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)]
            "
          >
 
            <FaGithub
              size={64}
              className="
                mx-auto
                text-zinc-400
              "
            />
 
            <h2
              className="
                mt-8
                text-3xl
                md:text-5xl
                font-black
              "
            >
              More Projects on GitHub
            </h2>
 
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-zinc-400
              "
            >
              Explore additional repositories,
              experiments, academic projects and
              personal developments available on
              my GitHub profile.
            </p>
 
            <a
              href="https://github.com/wllmvg"
              target="_blank"
              rel="noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              <FaGithub size={20} />
              Visit GitHub
            </a>
 
          </motion.section>
 
        </div>
 
      </div>
 
      {/* IMAGE LIGHTBOX */}
 
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/85
              backdrop-blur-sm
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: cubicBezierEase }}
            onClick={() => setSelectedImage(null)}
          >
 
            <motion.button
              className="
                absolute
                top-6
                right-6
                rounded-full
                border
                border-white/10
                bg-white/5
                p-3
                text-zinc-300
                transition
                hover:bg-white/10
                hover:text-white
              "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: cubicBezierEase, delay: 0.1 }}
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={20} />
            </motion.button>
 
            <motion.img
              layoutId={`project-image-${selectedImage}`}
              src={selectedImage}
              alt="Project preview"
              className="
                max-h-[85vh]
                max-w-[90vw]
                rounded-[24px]
                border
                border-white/10
                object-contain
                shadow-[0_0_80px_-20px_rgba(34,211,238,0.4)]
              "
              transition={{ duration: 0.5, ease: cubicBezierEase }}
              onClick={(e) => e.stopPropagation()}
            />
 
          </motion.div>
        )}
      </AnimatePresence>
 
    </div>
  );
}