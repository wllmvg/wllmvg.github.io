import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
      "
    >
      <div
        className="
          absolute
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-cyan-500/20
          via-blue-500/15
          to-purple-500/20
          blur-[120px]
          transition-transform
          duration-150
        "
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
}