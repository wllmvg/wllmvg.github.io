import {
  Briefcase,
  Palette,
  MonitorCog,
  Calendar,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          className="mb-20 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.07]
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
                    duration-500
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* CONTENT */}

              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">
                  {experience.icon}

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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={24} />

              <h2 className="text-2xl font-bold">
                Looking Forward
              </h2>
            </div>

            <p
              className="
                max-w-4xl
                leading-relaxed
                text-zinc-400
              "
            >
              My background in technical support and digital
              design strengthened my ability to solve problems,
              communicate effectively and understand user needs.
              Today, I am focused on Full Stack Development and
              actively seeking opportunities where I can build
              impactful products using React, TypeScript,
              Node.js and modern web technologies.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}