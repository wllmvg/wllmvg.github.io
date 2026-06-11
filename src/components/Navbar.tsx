import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const WVIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <rect width="32" height="32" rx="5" fill="#f5f0e8" />

    <polyline
      points="6,9 10,21 16,14 22,21 26,9"
      fill="none"
      stroke="#1a1a2e"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <polyline
      points="9,25 16,30 23,25"
      fill="none"
      stroke="#1a1a2e"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const links = [
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95vw] md:w-auto">
      <nav
        ref={navRef}
        className="
          relative
          flex items-center justify-between
          gap-8
          px-6 py-3
          w-full md:w-auto

          rounded-full

          bg-white/[0.03]
          backdrop-blur-2xl
          backdrop-saturate-150

          border border-white/10

          shadow-[0_8px_32px_rgba(0,0,0,0.35)]

          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-gradient-to-b
          before:from-white/[0.08]
          before:to-transparent
          before:pointer-events-none

          overflow-visible
        "
      >
        <NavLink to="/" className="flex items-center">
          <WVIcon />
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <span className="w-px h-5 bg-white/20" />

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            relative
            w-8
            h-8
            flex
            items-center
            justify-center
          "
          aria-label="Toggle menu"
        >
          <span
            className={`
              absolute
              h-[2px]
              w-6
              bg-white
              rounded-full
              transition-all
              duration-300
              ease-in-out
              ${
                isOpen
                  ? "rotate-45 translate-y-0"
                  : "-translate-y-2"
              }
            `}
          />

          <span
            className={`
              absolute
              h-[2px]
              w-6
              bg-white
              rounded-full
              transition-all
              duration-300
              ease-in-out
              ${
                isOpen
                  ? "opacity-0 scale-0"
                  : "opacity-100"
              }
            `}
          />

          <span
            className={`
              absolute
              h-[2px]
              w-6
              bg-white
              rounded-full
              transition-all
              duration-300
              ease-in-out
              ${
                isOpen
                  ? "-rotate-45 translate-y-0"
                  : "translate-y-2"
              }
            `}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            absolute
            top-full
            left-0
            mt-3
            w-full

            rounded-3xl

            bg-zinc-950/90
            backdrop-blur-3xl
            backdrop-saturate-200

            border border-white/10

            shadow-[0_8px_32px_rgba(0,0,0,0.35)]

            before:absolute
            before:inset-0
            before:rounded-3xl
            before:bg-gradient-to-b
            before:from-white/[0.05]
            before:to-transparent
            before:pointer-events-none

            md:hidden

            transition-all
            duration-300
            ease-out

            origin-top

            ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
            }
          `}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-3 transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}