import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  FileText,
} from "lucide-react";



export default function Education() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-12 text-center">

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

        </div>

        {/* EDUCATION CARD */}

        <div
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
            <div
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
                className="w-full h-full object-cover"
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
            </div>

            {/* CONTENT */}

            <div className="p-8 md:p-10">

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

              <div className="mt-8 flex items-center gap-3">

                <Award className="text-zinc-300" />

                <div>
                  <h3 className="font-semibold">
                    GPA
                  </h3>

                  <p className="text-zinc-400">
                    4.07 / 5.00
                  </p>
                </div>

              </div>

              <div className="mt-6">

                <div className="mb-4 flex items-center gap-3">
                  <BookOpen />
                  <h3 className="text-xl font-semibold">
                    Overview
                  </h3>
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

              </div>

              <div className="mt-6">

                <div className="mb-4 flex items-center gap-3">
                  <FileText />
                  <h3 className="text-xl font-semibold">
                    Relevant Areas
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Software Engineering",
                    "Web Development",
                    "Databases",
                    "Software Architecture",
                    "Requirements Analysis",
                    "Project Management",
                    "Algorithms",
                    "Object-Oriented Programming",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-zinc-900/80
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}