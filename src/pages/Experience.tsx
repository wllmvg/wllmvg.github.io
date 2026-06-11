import {
  Briefcase,
  Palette,
  MonitorCog,
  Calendar,
} from "lucide-react";

import { motion } from "framer-motion";

import movilcomImg from "../../assets/movilcom_bg.jpg";
import litoarteImg from "../../assets/litoarte_bg.jpg";

const experiences = [
  {
    icon: <Palette size={22} />,
    image: movilcomImg,
    company: "Movilcom Colombia",
    role: "Digital Designer",
    period: "Feb 2018 - Nov 2022",
    description:
      "Created digital content, branding assets and social media materials. Collaborated on marketing initiatives while strengthening visual communication, branding and creative problem-solving skills.",
  },
  {
    icon: <MonitorCog size={22} />,
    image: litoarteImg,
    company: "LitoArte",
    role: "Technical Support",
    period: "Jan 2020 - Dec 2021",
    description:
      "Provided hardware maintenance, software installation and troubleshooting support. Assisted users in resolving technical issues and maintaining reliable computer systems.",
  },
];

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
  },
};

const cardTransition: any = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as any,
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        >
          <span
            className="
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-sm
              text-zinc-300
              backdrop-blur
            "
          >
            Experience
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
            Professional Journey
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-zinc-400
            "
          >
            Experiences that helped shape my technical,
            creative and problem-solving mindset before
            focusing entirely on software engineering.
          </p>
        </motion.div>

        {/* EXPERIENCE GRID */}

        <div className="grid gap-8 lg:grid-cols-2">

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ...cardTransition,
                delay: index * 0.15,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur
                transition-all
                duration-500
                hover:border-cyan-500/30
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]
              "
            >

              {/* IMAGE */}

              <div className="relative h-60 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* CONTENT */}

              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-cyan-300">
                    {experience.icon}
                  </span>

                  <h2 className="text-2xl font-bold">
                    {experience.company}
                  </h2>
                </div>

                <p className="text-zinc-300">
                  {experience.role}
                </p>

                <div
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/10
                    px-4
                    py-2
                    text-sm
                    text-zinc-400
                  "
                >
                  <Calendar size={16} />
                  {experience.period}
                </div>

                <p
                  className="
                    mt-6
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {experience.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* LOOKING FORWARD */}

        <motion.section
          className="mt-24"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={cardTransition}
        >
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur
              transition-all
              duration-500
              hover:border-cyan-500/30
              hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]
            "
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 }}
            >
              <Briefcase size={24} className="text-cyan-300" />

              <h2 className="text-2xl font-bold">
                Looking Forward
              </h2>
            </motion.div>

            <motion.p
              className="
                max-w-4xl
                leading-relaxed
                text-zinc-400
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: 0.35 }}
            >
              My background in technical support and digital
              design strengthened my ability to solve problems,
              communicate effectively and understand user needs.
              Today, I am focused on Full Stack Development and
              actively seeking opportunities where I can build
              impactful products using React, TypeScript,
              Node.js and modern web technologies.
            </motion.p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}