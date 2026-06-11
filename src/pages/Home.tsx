import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  GraduationCap,
  Languages,
  Award,
  Copy,
  Check,
  Mail,
  ArrowDown,
} from "lucide-react";

const cubicBezierEase: any = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: cubicBezierEase },
  },
};

const titleLineVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: cubicBezierEase },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: cubicBezierEase },
  },
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("work.wllmvg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative overflow-hidden">
      {/* SUBTLE GRID PATTERN */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]
        "
      />

      {/* AMBIENT BACKGROUND GLOW */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-10%]
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[90px]
          sm:h-[400px]
          sm:w-[550px]
          sm:blur-[110px]
          lg:h-[500px]
          lg:w-[700px]
          lg:blur-[120px]
        "
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          bottom-[5%]
          hidden
          h-[300px]
          w-[300px]
          rounded-full
          bg-indigo-500/10
          blur-[100px]
          sm:block
          lg:h-[400px]
          lg:w-[400px]
          lg:blur-[120px]
        "
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="
          relative z-10
          flex flex-col
          items-center
          min-h-[80vh]
          px-6
          pt-24
          pb-4
          sm:pb-12
          text-center
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.span
          variants={fadeUpVariants}
          className="
            mb-4
            max-w-[90vw]
            rounded-full
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            px-4 py-2
            text-[11px]
            sm:text-xs
            font-medium
            tracking-wide
            text-zinc-300
          "
          animate={{
            boxShadow: [
              "0 0 0px rgba(34,211,238,0)",
              "0 0 18px rgba(34,211,238,0.25)",
              "0 0 0px rgba(34,211,238,0)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          <span className="relative inline-flex items-center justify-center gap-2 text-center leading-snug">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="break-words">
              Open to Opportunities · Full Stack Developer · React · TypeScript
            </span>
          </span>
        </motion.span>

        {/* Eyebrow */}
        <motion.p
          variants={fadeUpVariants}
          className="
            mb-3
            text-xs
            sm:text-sm
            font-medium
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          Software Engineer
        </motion.p>

        <h1
          className="
            text-3xl
            xs:text-4xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-black
            tracking-tight
            leading-[1.25]
          "
        >
          <motion.span variants={titleLineVariants} className="block pb-1">
            William Felipe
          </motion.span>
          <motion.span
            variants={titleLineVariants}
            className="
              block
              pb-2
              bg-gradient-to-r
              from-white
              via-cyan-200
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Melgarejo Vega
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          className="
            mt-2
            max-w-2xl
            text-base
            md:text-lg
            leading-relaxed
            text-zinc-400
          "
        >
          Junior Full Stack Developer focused on{" "}
          <span className="text-zinc-200">React</span>,{" "}
          <span className="text-zinc-200">TypeScript</span> and{" "}
          <span className="text-zinc-200">Node.js</span>. Currently completing
          a Software Engineering degree while building modern, scalable web
          applications and delivering intuitive user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/cv/cv_william_vega.pdf"
            download
            className="
              relative
              overflow-hidden
              rounded-full
              bg-white
              px-8
              py-3.5
              text-sm
              font-semibold
              text-black
              shadow-[0_0_24px_rgba(255,255,255,0.15)]
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: cubicBezierEase }}
          >
            <span className="relative z-10">Download CV</span>
            <motion.span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-cyan-200/60
                to-transparent
              "
              whileHover={{ translateX: "100%" }}
              transition={{ duration: 0.7, ease: cubicBezierEase }}
            />
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: cubicBezierEase }}
          >
            <Link
              to="/about"
              className="
                block
                rounded-full
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-sm
                px-8
                py-3.5
                text-sm
                font-semibold
                transition-colors
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/5
              "
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Email */}
        <motion.button
          variants={fadeUpVariants}
          onClick={copyEmail}
          aria-label="Copy email"
          className="
            group
            mt-6
            flex
            items-center
            justify-center
            gap-3
            rounded-full
            border border-transparent
            px-4
            py-2
            transition-colors
            duration-300
            hover:border-white/5
            hover:bg-white/[0.02]
          "
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: cubicBezierEase }}
        >
          <Mail
            size={18}
            className="
              text-zinc-500
              transition-colors
              duration-300
              group-hover:text-cyan-400
            "
          />
          <span
            className="
              text-sm
              md:text-base
              text-zinc-400
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            work.wllmvg@gmail.com
          </span>
          <div className="relative h-4 w-4 flex items-center justify-center">
            <Copy
              size={16}
              className={`
                absolute
                transition-all
                duration-300
                ${
                  copied
                    ? "opacity-0 scale-75"
                    : "opacity-100 scale-100 text-zinc-400 group-hover:text-cyan-400"
                }
              `}
            />
            <Check
              size={16}
              className={`
                absolute
                transition-all
                duration-300
                ${
                  copied
                    ? "opacity-100 scale-100 text-green-400"
                    : "opacity-0 scale-75"
                }
              `}
            />
          </div>
        </motion.button>

        {/* Stats */}
        <motion.div
          variants={fadeUpVariants}
          className="
            mt-4
            flex
            items-stretch
            justify-center
            divide-x
            divide-white/10
            rounded-2xl
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-sm
            w-full
            max-w-2xl
          "
        >
          <motion.div
            variants={statVariants}
            className="
              group
              flex-1
              flex flex-col items-center
              gap-2
              px-4
              py-6
              transition-colors
              duration-300
              hover:bg-white/[0.03]
            "
          >
            <Award
              size={22}
              className="
                text-zinc-500
                transition-colors duration-300
                group-hover:text-cyan-400
              "
            />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              4.07
            </h3>
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500">
              GPA
            </p>
          </motion.div>

          <motion.div
            variants={statVariants}
            className="
              group
              flex-1
              flex flex-col items-center
              gap-2
              px-4
              py-6
              transition-colors
              duration-300
              hover:bg-white/[0.03]
            "
          >
            <Languages
              size={22}
              className="
                text-zinc-500
                transition-colors duration-300
                group-hover:text-cyan-400
              "
            />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              B2
            </h3>
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500">
              English
            </p>
          </motion.div>

          <motion.div
            variants={statVariants}
            className="
              group
              flex-1
              flex flex-col items-center
              gap-2
              px-4
              py-6
              transition-colors
              duration-300
              hover:bg-white/[0.03]
            "
          >
            <GraduationCap
              size={22}
              className="
                text-zinc-500
                transition-colors duration-300
                group-hover:text-cyan-400
              "
            />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              2027
            </h3>
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500">
              Graduation
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}