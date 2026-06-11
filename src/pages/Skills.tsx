import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    percentage: 92,
    icon: <Code2 size={26} />,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    percentage: 85,
    icon: <Server size={26} />,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Databases",
    percentage: 82,
    icon: <Database size={26} />,
    technologies: [
      "MongoDB",
      "SQL",
      "Supabase",
    ],
  },
  {
    title: "Tools & Workflow",
    percentage: 90,
    icon: <Wrench size={26} />,
    technologies: [
      "Git",
      "GitHub",
      "Java",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-14 text-center">

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
            Skills
          </span>

          <h1
            className="
              mt-8
              text-3xl
              sm:text-4xl
              md:text-4xl
              font-black
            "
          >
            Technical Expertise
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-zinc-400
            "
          >
            Technologies and tools that I use to build
            scalable, maintainable and user-focused
            software solutions.
          </p>

        </div>

        {/* GRID */}

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (

            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6 md:p-7
              backdrop-blur
              transition-all
              duration-500
              hover:border-cyan-500/30
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]
            "
            >

              {/* TOP */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-500/20
                      bg-gradient-to-br
                      from-cyan-500/10
                      to-purple-500/10
                      text-cyan-300
                    "
                  >
                    {skill.icon}
                  </div>

                  <h2
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {skill.title}
                  </h2>

                </div>

                <div className="text-right">
                  <div
                    className="
                      text-3xl md:text-4xl
                      font-black
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-purple-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {skill.percentage}%
                  </div>

                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    proficiency
                  </p>
                </div>

              </div>

              {/* PROGRESS BAR */}

              <div
                className="
                  mt-8
                  h-4
                  overflow-hidden
                  rounded-full
                  bg-white/10
                "
              >

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-purple-500
                  "
                />

              </div>

              {/* TECH TAGS */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >

                {skill.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="
                      group/tech
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-4
                      text-center
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-500/50
                      hover:bg-white/[0.08]
                    "
                  >

                    {/* Glow */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover/tech:opacity-100
                        bg-gradient-to-r
                        from-cyan-500/10
                        via-blue-500/10
                        to-purple-500/10
                      "
                    />

                    <span
                      className="
                        relative
                        z-10
                        text-sm
                        font-semibold
                        tracking-wide
                        text-white
                      "
                    >
                      {tech}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM STATS */}

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-3
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
            "
          >
            <h2 className="text-4xl font-black">
              10+
            </h2>

            <p className="mt-2 text-zinc-400">
              Technologies
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
            "
          >
            <h2 className="text-4xl font-black">
              Full Stack
            </h2>

            <p className="mt-2 text-zinc-400">
              Development Focus
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
            "
          >
            <h2 className="text-4xl font-black">
              4+
            </h2>

            <p className="mt-2 text-zinc-400">
              Years Learning
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}