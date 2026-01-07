"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Gradient space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10 w-full max-w-6xl px-6 py-20 text-center animate-fade-up">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          Indian Astronomy Rocket Research &amp; Development
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Innovating Space
          </span>
          <span className="mt-2 block text-slate-100">Inspiring Earth</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300 md:text-lg">
          India-first deep-tech R&amp;D building PrithiviSat CubeSat, the IRAI‑Q2
          non‑weaponised defence UAV R&amp;D platform, and AI‑driven astronomy
          tools for the next generation of scientists and missions.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Flagship Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-slate-500/70 bg-transparent px-8 py-6 text-base font-semibold hover:border-slate-300 hover:bg-slate-900/60"
            onClick={() => {
              // adjust path when you add the PDF
              window.open("/docs/investor-brief.pdf", "_blank");
            }}
          >
            Download Investor Brief
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 md:text-sm">
          <span>PrithiviSat • Disaster &amp; climate monitoring CubeSat</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-500 md:inline-block" />
          <span>IRAI‑Q2 • Non‑weaponised defence UAV R&amp;D platform</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-500 md:inline-block" />
          <span>AI Astronomy Tools • Public‑data driven research</span>
        </div>
      </div>
    </section>
  );
}
