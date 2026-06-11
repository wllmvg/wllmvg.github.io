import { motion } from "framer-motion";

import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  FileText,
} from "lucide-react";

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

const relevantAreas = [
  "Software Engineering",
  "Web Development",
  "Databases",
  "Software Architecture",
  "Requirements Analysis",
  "Project Management",
  "Algorithms",
  "Object-Oriented Programming",
];

export default function Education() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        >
          <span
            className="
              rounded-full
              border border-white/10
              bg-zinc-900/80
              px-4 py-2
              text-sm
              text-zinc-300
            "
          >
            Education
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
            Academic Background
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-zinc-400
            "
          >
            My academic journey in Software Engineering,
            focused on building strong foundations in
            software development, systems design and
            modern web technologies.
          </p>
        </motion.div>

        {/* EDUCATION CARD */}

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={cardTransition}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-zinc-900/80
          "
        >
          <div className="grid lg:grid-cols-[380px,1fr]">

            {/* UNIVERSITY IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.15 }}
              className="
                relative
                h-56
                md:h-72
                overflow-hidden
                rounded-3xl
                border border-white/10
              "
            >
              <img
                src="../../assets/udes_bg.jpg"
                alt="Universidad de Santander"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold">
                  Universidad de Santander
                </h2>

                <p className="text-zinc-300">
                  Software Engineering
                </p>
              </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              className="p-8 md:p-10 space-y-6"
              initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.25 }}
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  text-zinc-300
                "
              >
                <Calendar size={16} />
                2022 — 2027 (Expected)
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                Software Engineering
              </h2>

              <div className="mt-4 flex flex-wrap gap-6 text-zinc-400">

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  Bucaramanga, Colombia
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  Universidad de Santander (UDES)
                </div>

              </div>

              {/* GPA */}

              <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any, delay: 0.4 }}
              >
                <Award className="text-zinc-300" />
                <div>
                  <h3 className="font-semibold">GPA</h3>
                  <p className="text-zinc-400">4.07 / 5.00</p>
                </div>
              </motion.div>

              {/* OVERVIEW */}

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any, delay: 0.5 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <BookOpen />
                  <h3 className="text-xl font-semibold">Overview</h3>
                </div>

                <p className="leading-relaxed text-zinc-300">
                  Currently pursuing a degree in Software
                  Engineering at Universidad de Santander
                  (UDES). Throughout my studies I have
                  developed strong knowledge in software
                  development, web technologies, databases,
                  software architecture and project
                  management while actively participating
                  in academic and real-world projects.
                </p>
              </motion.div>

              {/* RELEVANT AREAS */}

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: 0.6 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <FileText />
                  <h3 className="text-xl font-semibold">Relevant Areas</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {relevantAreas.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1] as any,
                        delay: 0.65 + index * 0.06,
                      }}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-zinc-900/80
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-500/50
                        hover:bg-white/[0.08]
                      "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}