import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-10 md:px-16 lg:px-20 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              William Felipe
              <br />
              Melgarejo Vega
            </h3>

            <p className="mt-4 text-sm text-zinc-400">
              Junior Full Stack Developer focused on
              React, TypeScript and Node.js.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm md:text-base font-semibold tracking-wider">
              Contact
            </h4>

            <div className="space-y-4 text-sm md:text-base text-zinc-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>work.wllmvg@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Bucaramanga, Colombia</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap size={18} />
                <span>UDES • Software Engineering</span>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-sm md:text-base font-semibold tracking-wider">
              Navigation
            </h4>

            <div className="space-y-3 text-sm md:text-base text-zinc-400">

              <Link
                to="/"
                className="block transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/education"
                className="block transition hover:text-white"
              >
                Education
              </Link>

              <Link
                to="/experience"
                className="block transition hover:text-white"
              >
                Experience
              </Link>

              <Link
                to="/projects"
                className="block transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/skills"
                className="block transition hover:text-white"
              >
                Skills
              </Link>

              <Link
                to="/certificates"
                className="block transition hover:text-white"
              >
                Certificates
              </Link>

              <Link
                to="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 text-sm md:text-base font-semibold tracking-wider">
              Social
            </h4>

            <div className="flex gap-5">

              <a
                href="https://github.com/wllmvg"
                target="_blank"
                rel="noreferrer"
                className="
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:text-white
                  hover:-translate-y-1
                "
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/wllmvg"
                target="_blank"
                rel="noreferrer"
                className="
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:text-white
                  hover:-translate-y-1
                "
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:work.wllmvg@gmail.com"
                className="
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:text-white
                  hover:-translate-y-1
                "
              >
                <FaEnvelope size={24} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-xs
              text-zinc-500
              md:flex-row
            "
          >

            <p>
              © 2026 William Felipe Melgarejo Vega.
              All rights reserved.
            </p>

            <p>
              Built with React, TypeScript & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}