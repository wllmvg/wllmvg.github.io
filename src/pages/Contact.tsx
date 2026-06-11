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

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-6 md:px-10 lg:px-16">
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
            Contact
          </span>

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

        </div>

        {/* MAIN CARD */}

        <div
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-br
            from-zinc-900
            via-slate-950
            to-zinc-900
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

              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-gradient-to-br
                  from-cyan-500/20
                  to-purple-500/20
                  text-3xl
                  font-black
                "
              >
                W
              </div>

              <h2
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
              </h2>

              <p
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
              </p>

              <a
                href="mailto:work.wllmvg@gmail.com"
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
                  transition
                  hover:scale-105
                "
              >
                <Send size={18} />
                Send Email
              </a>

            </div>

            {/* RIGHT */}

            <div
              className="
                grid
                gap-3
                p-8
                md:p-10
              "
            >

              {contacts.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
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
                    transition-all
                    duration-300
                    hover:border-cyan-500/30
                    hover:bg-white/[0.07]
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                      "
                    >
                      {item.icon}
                    </div>

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
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </a>
              ))}

            </div>

          </div>

        </div>

        {/* STATS */}

        <div
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-3
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
            "
          >
            <h2 className="text-4xl font-black">
              10+
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Technologies
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
            "
          >
            <h2 className="text-4xl font-black">
              Full Stack
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Development Focus
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
            "
          >
            <h2 className="text-4xl font-black">
              Open
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              To Opportunities
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}