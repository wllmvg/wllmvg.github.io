import { Link } from "react-router-dom";

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

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">

        {/* HEADER */}

        <div className="mb-20 text-center">
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
        </div>

        {/* PROFILE */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* PHOTO */}

          <div>
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
          </div>

          {/* CONTENT */}

          <div className="space-y-8">

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

                {quickFacts.map((fact) => (
                  <div
                    key={fact.text}
                    className="
                      flex
                      items-center
                      gap-3
                      text-zinc-400
                    "
                  >
                    {fact.icon}
                    <span>{fact.text}</span>
                  </div>
                ))}

              </div>
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4">

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

            </div>

          </div>
        </div>

        {/* ACHIEVEMENTS */}

        <section className="mt-24">
          <h2 className="mb-10 text-3xl font-bold">
            Highlights
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {achievements.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-zinc-900/80
                  p-6
                "
              >
                <div className="mb-4">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* INTERESTS */}

        <section className="mt-24">

          <h2 className="mb-10 text-3xl font-bold">
            Focus Areas
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {interests.map((interest) => (
              <div
                key={interest}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-zinc-900/80
                  p-4
                "
              >
                <Globe size={18} />

                <span className="text-zinc-300">
                  {interest}
                </span>
              </div>
            ))}

          </div>

        </section>

        {/* CTA */}

      </div>
    </div>
  );
}