"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { ResumeData } from "@/lib/types";

const DataContext = createContext<ResumeData | null>(null);

export function DataProvider({
  data,
  children,
}: {
  data: ResumeData;
  children: ReactNode;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll(".animate-on-view");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData(): ResumeData {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within <DataProvider>");
  return ctx;
}
