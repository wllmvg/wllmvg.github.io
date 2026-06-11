import {
  Code2,
  ExternalLink,
} from "lucide-react";

import {
  FaGithub
} from "react-icons/fa";

const projects = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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
    id: "04",
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

export default function Projects() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-24 text-center">

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

        </div>

        {/* PROJECTS */}

        <div className="space-y-40">

          {projects.map((project, index) => (

            <section
              key={project.id}
              className={`
                grid
                items-center
                gap-12
                lg:grid-cols-2
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
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                  "
                >
                  <img
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
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                      "
                    >
                      {tech}
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

            </section>

          ))}

          {/* MORE PROJECTS */}

          <section
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

          </section>

        </div>

      </div>
    </div>
  );
}