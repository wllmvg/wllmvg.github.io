import { useState } from "react";
import { Link } from "react-router-dom";


import {
  GraduationCap,
  Languages,
  Award,
  Copy,
  Check,
  Mail,
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "work.wllmvg@gmail.com"
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <section
      className="
    "
    >

      <div
        className="
        relative z-10
        flex flex-col
        items-center
        min-h-screen
        px-6
        pt-24
        pb-12
        text-center
      "
      >
        {/* Badge */}
        <span
          className="
          mb-8
          rounded-full
          border border-white/10
          bg-zinc-900/80
          px-4 py-2
          text-xs
          text-zinc-300
        "
        >
          Open to Opportunities • Full Stack Developer • React • TypeScript
        </span>

        {/* Title */}
        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
          font-black
          tracking-tight
        "
        >
          William Felipe
          <br />
          Melgarejo Vega
        </h1>

        {/* Description */}
        <p
          className="
          mt-8
          max-w-3xl
          text-base
          md:text-lg
          text-zinc-400
        "
        >
          Junior Full Stack Developer focused on React,
          TypeScript and Node.js. Currently completing a
          Software Engineering degree while building modern,
          scalable web applications and delivering intuitive
          user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            to="/about"
            className="
              rounded-full
              border border-white/10
              bg-zinc-900/80
              px-7
              py-3
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            About Me
          </Link>
        </div>

        {/* Email */}
        <button
          onClick={copyEmail}
          aria-label="Copy email"
          className="
          group
          mt-10
          flex
          items-center
          justify-center
          gap-3
          rounded-full
          px-4
          py-2
          transition-all
          duration-300
        "
        >
          <Mail
            size={18}
            className="
            text-zinc-500
            transition-colors
            duration-300
            group-hover:text-white
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

          <div
            className="
            relative
            h-4
            w-4
            flex
            items-center
            justify-center
          "
          >
            <Copy
              size={16}
              className={`
                absolute
                transition-all
                duration-300
                ${
                  copied
                    ? "opacity-0 scale-75"
                    : "opacity-100 scale-100 text-zinc-400"
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
        </button>

        {/* Stats */}
        <div
          className="
          mt-16
          grid
          grid-cols-3
          gap-4
          sm:gap-16
          text-center
          w-full
          max-w-3xl
        "
        >
          <div>
            <Award
              size={28}
              className="mx-auto mb-3 text-zinc-400"
            />

            <h3
              className="
              text-lg
              sm:text-2xl
              md:text-3xl
              font-bold
            "
            >
              4.07
            </h3>

            <p
              className="
              text-xs
              sm:text-base
              text-zinc-400
            "
            >
              GPA
            </p>
          </div>

          <div>
            <Languages
              size={28}
              className="mx-auto mb-3 text-zinc-400"
            />

            <h3
              className="
              text-lg
              sm:text-2xl
              md:text-3xl
              font-bold
            "
            >
              B2
            </h3>

            <p
              className="
              text-xs
              sm:text-base
              text-zinc-400
            "
            >
              English
            </p>
          </div>

          <div>
            <GraduationCap
              size={28}
              className="mx-auto mb-3 text-zinc-400"
            />

            <h3
              className="
              text-lg
              sm:text-2xl
              md:text-3xl
              font-bold
            "
            >
              2027
            </h3>

            <p
              className="
              text-xs
              sm:text-base
              text-zinc-400
            "
            >
              Graduation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}