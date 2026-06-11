import {
  FileBadge,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

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

export default function Certificates() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-16 text-center">

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

        </div>

        {/* CERTIFICATES */}

        <div className="space-y-8">

          {certificates.map((certificate) => (

            <article
              key={certificate.title}
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

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                    "
                  >
                    <FileBadge size={28} />
                  </div>

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

                  <div className="mt-6 space-y-4">

                    {certificate.highlights.map((item) => (

                      <div
                        key={item}
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

                      </div>

                    ))}

                  </div>

                </div>

                {/* RIGHT */}

                <div className="relative">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      h-[260px]
                      md:h-full
                      w-full
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/30
                    "
                  />

                  <div
                    className="
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
                      className="
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

            </article>

          ))}

        </div>

      </div>
    </div>
  );
}