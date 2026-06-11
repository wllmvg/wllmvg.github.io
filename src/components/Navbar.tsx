import { NavLink } from "react-router-dom";

export default function Navbar() {
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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="
          flex items-center gap-8
          px-6 py-3
          rounded-full
          border border-white/10
          bg-zinc-900/80
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <NavLink
          to="/"
          className="font-bold text-white"
        >
          wllmvg
        </NavLink>

        <div className="flex gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors ${
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