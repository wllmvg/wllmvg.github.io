import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
 
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import profilePhoto from "../../assets/foto_perfil_william.png";
 
import { motion } from "framer-motion";
 
const cubicBezierEase: any = [0.22, 1, 0.36, 1];
 
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezierEase },
  },
};
 
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};
 
const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
 
const listItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: cubicBezierEase },
  },
};
 
const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};
 
export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "work.wllmvg@gmail.com",
      icon: <Mail size={22} />,
      link: "mailto:work.wllmvg@gmail.com",
    },
    {
      title: "GitHub",
      value: "github.com/wllmvg",
      icon: <FaGithub size={22} />,
      link: "https://github.com/wllmvg",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/wllmvg",
      icon: <FaLinkedin size={22} />,
      link: "https://linkedin.com/in/wllmvg",
    },
    {
      title: "Location",
      value: "Colombia",
      icon: <MapPin size={22} />,
      link: "#",
    },
  ];
 
  const stats = [
    { value: "10+", label: "Technologies" },
    { value: "Full Stack", label: "Development Focus" },
    { value: "Open", label: "To Opportunities" },
  ];
 
  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
 
        {/* HEADER */}
 
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
 
          <motion.span
            className="
              inline-block
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-sm
              text-zinc-300
            "
            animate={{
              boxShadow: [
                "0 0 0px rgba(34,211,238,0)",
                "0 0 18px rgba(34,211,238,0.3)",
                "0 0 0px rgba(34,211,238,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Contact
          </motion.span>
 
          <h1
            className="
              mt-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
            "
          >
            Let's Build Something Great
          </h1>
 
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              md:text-base
              text-zinc-400
            "
          >
            I'm currently looking for opportunities as a
            Full Stack Developer. If you have a project,
            internship or role in mind, let's connect.
          </p>
 
        </motion.div>
 
        {/* MAIN CARD */}
 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-br
            from-zinc-900
            via-slate-950
            to-zinc-900
            transition-all
            duration-500
            hover:border-cyan-500/30
            hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)]
          "
        >
 
          <div
            className="
              grid
              lg:grid-cols-2
            "
          >
 
            {/* LEFT */}
 
            <div className="p-8 md:p-10">
 
              <motion.div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-500/20
                  overflow-hidden
                "
                initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: cubicBezierEase, delay: 0.1 }}
                whileHover={{
                  scale: 1.08,
                  rotate: 6,
                  borderColor: "rgba(34,211,238,0.4)",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="William Felipe Melgarejo Vega"
                  className="h-full w-full object-cover"
                />
              </motion.div>
 
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: cubicBezierEase, delay: 0.2 }}
                className="
                  mt-6
                  text-3xl
                  md:text-4xl
                  font-black
                  leading-tight
                "
              >
                William Felipe
                <br />
                Melgarejo Vega
              </motion.h2>
 
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: cubicBezierEase, delay: 0.3 }}
                className="
                  mt-5
                  max-w-lg
                  text-base
                  text-zinc-400
                "
              >
                Junior Software Developer focused on
                React, TypeScript, Node.js and modern
                web technologies.
              </motion.p>
 
              <motion.a
                href="mailto:work.wllmvg@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: cubicBezierEase, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                "
              >
                <Send size={18} />
                Send Email
              </motion.a>
 
            </div>
 
            {/* RIGHT */}
 
            <motion.div
              className="
                grid
                gap-3
                p-8
                md:p-10
              "
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
 
              {contacts.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  variants={listItemVariants}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    transition-colors
                    duration-300
                    hover:border-cyan-500/30
                    hover:bg-white/[0.07]
                  "
                >
 
                  <div className="flex items-center gap-4">
 
                    <motion.div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                      "
                      whileHover={{
                        scale: 1.1,
                        rotate: 6,
                        backgroundColor: "rgba(34,211,238,0.18)",
                      }}
                      transition={{ duration: 0.3, ease: cubicBezierEase }}
                    >
                      {item.icon}
                    </motion.div>
 
                    <div>
 
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wider
                          text-zinc-500
                        "
                      >
                        {item.title}
                      </p>
 
                      <h3
                        className="
                          mt-1
                          text-sm
                          md:text-base
                          font-semibold
                        "
                      >
                        {item.value}
                      </h3>
 
                    </div>
 
                  </div>
 
                  <ArrowUpRight
                    size={20}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-cyan-400
                    "
                  />
 
                </motion.a>
              ))}
 
            </motion.div>
 
          </div>
 
        </motion.div>
 
        {/* STATS */}
 
        <motion.div
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-3
          "
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
 
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                text-center
                transition-colors
                duration-300
                hover:border-cyan-500/30
                hover:bg-white/[0.07]
              "
            >
              <h2 className="text-4xl font-black">
                {stat.value}
              </h2>
 
              <p className="mt-2 text-sm text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
 
        </motion.div>
 
      </div>
    </div>
  );
}