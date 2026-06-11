import {
  FileBadge,
  MapPin,
  ExternalLink,
  ArrowRight,
  X,
} from "lucide-react";
 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
 
const cubicBezierEase: any = [0.22, 1, 0.36, 1];
 
const certificates = [
  {
    title: "Linguaskill English Certificate",
    issuer: "Cambridge English / Linguaskill",
    location: "Bucaramanga, Santander",
    date: "2023",
    image:
      "/certificates/Linguaskill_Report_Melgarejo_William.jpg",
    link:
      "/certificates/Linguaskill_Report_Melgarejo_William.pdf",
    highlights: [
      "Overall B1 English proficiency according to CEFR.",
      "Listening assessed at B2 level.",
      "Reading and speaking assessed at B1 level.",
      "Average score of 153 on the Cambridge English Scale.",
    ],
  },
 
  {
    title: "Programming Diploma - Misión TIC 2022",
    issuer: "Universidad Nacional de Colombia",
    location: "Bogotá D.C., Colombia",
    date: "2021",
    image:
      "/certificates/CertificadoUNALWilliam.jpg",
    link:
      "/certificates/CertificadoUNALWilliam.pdf",
    highlights: [
      "600-hour programming training program.",
      "Completed three learning cycles successfully.",
      "Part of Colombia's Misión TIC 2022 initiative.",
      "Developed software development and problem-solving skills.",
    ],
  },
 
  {
    title: "Software Competencies Seminar",
    issuer: "Universidad Sergio Arboleda",
    location: "Bogotá D.C., Colombia",
    date: "2020",
    image:
      "/certificates/CertificadoSergioArboledaWilliam.jpg",
    link:
      "/certificates/CertificadoSergioArboledaWilliam.pdf",
    highlights: [
      "Seminar focused on Java programming fundamentals.",
      "Training in software competencies and soft skills.",
      "Part of Project 1073 for secondary education development.",
      "Academic agreement with the Mayor's Office of Bogotá.",
    ],
  },
];
 
// Animación de entrada para cada tarjeta de certificado:
// fade in + slide up + scale + blur, con easing suave, una sola vez
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
      ease: cubicBezierEase,
    },
  },
};
 
// Contenedor para escalonar (stagger) la lista de highlights
const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};
 
// Cada highlight entra deslizándose desde la izquierda
const listItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezierEase,
    },
  },
};
 
// Animación simple para el header
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezierEase,
    },
  },
};
 
export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
 
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
 
        {/* HEADER */}
 
        <motion.div
          className="mb-16 text-center"
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
            Certificates
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
            Certifications & Credentials
          </h1>
 
          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-zinc-400
            "
          >
            Professional certifications, training programs
            and academic achievements that validate my
            technical and communication skills.
          </p>
 
        </motion.div>
 
        {/* CERTIFICATES */}
 
        <div className="space-y-8">
 
          {certificates.map((certificate) => (
 
            <motion.article
              key={certificate.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-zinc-900
                via-slate-950
                to-zinc-900
                transition-all
                duration-500
                hover:border-cyan-500/30
                hover:-translate-y-1
                hover:scale-[1.01]
                hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)]
              "
            >
 
              <div
                className="
                  grid
                  md:grid-cols-[1.3fr_0.7fr]
                "
              >
 
                {/* LEFT */}
 
                <div className="p-6 md:p-8">
 
                  <motion.div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                    "
                    initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: cubicBezierEase, delay: 0.1 }}
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                      backgroundColor: "rgba(34,211,238,0.18)",
                    }}
                  >
                    <FileBadge size={28} />
                  </motion.div>
 
                  <h2
                    className="
                      mt-5
                      text-2xl
                      md:text-3xl
                      font-black
                    "
                  >
                    {certificate.title}
                  </h2>
 
                  <p
                    className="
                      mt-2
                      text-lg
                      text-zinc-400
                    "
                  >
                    {certificate.issuer}
                  </p>
 
                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      text-sm
                      text-zinc-500
                    "
                  >
                    <MapPin size={15} />
 
                    <span>{certificate.location}</span>
 
                    <span>•</span>
 
                    <span>{certificate.date}</span>
 
                  </div>
 
                  <motion.div
                    className="mt-6 space-y-4"
                    variants={listContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
 
                    {certificate.highlights.map((item) => (
 
                      <motion.div
                        key={item}
                        variants={listItemVariants}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <ArrowRight
                          size={16}
                          className="
                            mt-1
                            shrink-0
                            text-cyan-400
                          "
                        />
 
                        <p
                          className="
                            text-base
                            leading-relaxed
                            text-zinc-300
                          "
                        >
                          {item}
                        </p>
 
                      </motion.div>
 
                    ))}
 
                  </motion.div>
 
                </div>
 
                {/* RIGHT */}
 
                <div className="relative">
 
                  <motion.img
                    layoutId={`certificate-image-${certificate.image}`}
                    src={certificate.image}
                    alt={certificate.title}
                    onClick={() => setSelectedImage(certificate.image)}
                    className="
                      h-[260px]
                      md:h-full
                      w-full
                      object-cover
                      cursor-zoom-in
                    "
                  />
 
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black/30
                    "
                  />
 
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
 
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        pointer-events-auto
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/20
                        bg-white/10
                        px-5
                        py-3
                        text-base
                        font-semibold
                        backdrop-blur-xl
                        transition
                        hover:scale-105
                      "
                    >
                      View Certificate
 
                      <ExternalLink size={18} />
                    </a>
 
                  </div>
 
                </div>
 
              </div>
 
            </motion.article>
 
          ))}
 
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
              layoutId={`certificate-image-${selectedImage}`}
              src={selectedImage}
              alt="Certificate preview"
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