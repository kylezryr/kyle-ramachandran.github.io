"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timerId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timerId = setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timerId);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
