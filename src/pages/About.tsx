import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import profilePhoto from "../../assets/foto_perfil_william.png";

import {
  Code2,
  Briefcase,
  GraduationCap,
  Globe,
  MapPin,
  Calendar,
  Languages,
} from "lucide-react";

const achievements = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "200+ Students",
    description:
      "Academic platform developed and led during university.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Multi-Disciplinary",
    description:
      "Experience in software development, technical support and digital design.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "4.07 GPA",
    description:
      "Strong academic performance in Software Engineering.",
  },
];

const interests = [
  "Full Stack Development",
  "Frontend Architecture",
  "Backend APIs",
  "Authentication & Security",
  "Database Design",
  "React & TypeScript",
];

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "Vercel",
];

const quickFacts = [
  {
    icon: <MapPin size={18} />,
    text: "Based in Bucaramanga, Colombia",
  },
  {
    icon: <Calendar size={18} />,
    text: "23 Years Old",
  },
  {
    icon: <GraduationCap size={18} />,
    text: "Expected Graduation: 2027",
  },
  {
    icon: <Languages size={18} />,
    text: "English Level: B2",
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

const simpleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">

        {/* HEADER */}

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            About Me
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
            Building software with
            <br />
            purpose and impact.
          </h1>
        </motion.div>

        {/* PROFILE */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* PHOTO */}

          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div
              className="
                aspect-square
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-900/80
              "
            >
              <img
                src={profilePhoto}
                alt="William Felipe Melgarejo Vega"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >

            <div className="space-y-5 text-zinc-300 leading-relaxed">

              <p>
                Hi, I'm William Felipe Melgarejo Vega,
                a Junior Full Stack Developer and
                Software Engineering student passionate
                about building scalable web applications
                and solving real-world problems through
                technology.
              </p>

              <p>
                My professional journey started in
                technical support and digital design,
                giving me a unique perspective on
                software development. Understanding
                both technology and user needs helps
                me create solutions that are reliable,
                efficient and user-focused.
              </p>

              <p>
                Throughout my academic career, I have
                led the development of an academic
                management platform designed for more
                than 200 students while also building
                personal projects such as TokenShift,
                a full stack reservation system powered
                by modern technologies.
              </p>

              <p>
                I specialize in React, TypeScript,
                Node.js and modern web technologies.
                My goal is to continue growing as a
                Full Stack Developer and contribute to
                impactful software products and
                engineering teams.
              </p>

            </div>

            {/* QUICK FACTS */}

            <div>
              <h3 className="mb-5 text-xl font-semibold">
                Quick Facts
              </h3>

              <div className="space-y-4">

                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.4 + index * 0.08,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      text-zinc-400
                    "
                  >
                    {fact.icon}
                    <span>{fact.text}</span>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* BUTTONS */}


            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            >

              <a
                href="/cv/cv_william_vega.pdf"
                download
                className="
                  rounded-full
                  bg-white
                  px-7
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Download CV
              </a>

              <Link
                to="/skills"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-zinc-900/80
                  px-6
                  py-3
                  font-semibold
                  transition
                  hover:bg-white/10
                "
              >
                My Skills
              </Link>

            </motion.div>

          </motion.div>
        </div>

        {/* ACHIEVEMENTS */}

        <section className="mt-24">
          <motion.h2
            className="mb-10 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          >
            Highlights
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">

            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={cardTransition}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-zinc-900/80
                  p-6
                  transition-all
                  duration-500
                  hover:border-cyan-500/30
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]
                "
              >
                <div className="mb-4 text-cyan-300">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* INTERESTS */}

        <section className="mt-24">

          <motion.h2
            className="mb-10 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Focus Areas
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {interests.map((interest) => (
              <motion.div
                key={interest}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={cardTransition}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-zinc-900/80
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/50
                  hover:bg-white/[0.08]
                "
              >
                <Globe size={18} className="text-cyan-300 shrink-0" />

                <span className="text-zinc-300">
                  {interest}
                </span>
              </motion.div>
            ))}

          </div>

        </section>

      </div>
    </div>
  );
}