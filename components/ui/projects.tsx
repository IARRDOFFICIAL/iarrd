"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Orbit, Radar, Telescope } from "lucide-react";

const projects = [
  {
    id: "prithivisat",
    name: "PrithiviSat",
    tagline: "AI‑enabled CubeSat for disaster & climate monitoring",
    progress: 60,
    phase: "Concept & Preliminary Design",
    timeline: "2023 – 2026",
    bullets: [
      "1U CubeSat architecture defined",
      "Orbit, power & link simulations in progress",
      "Targeting LEO mission for India‑focused monitoring",
    ],
    icon: Orbit,
  },
  {
    id: "irai-q2",
    name: "IRAI‑Q2",
    tagline:
      "Non‑weaponised defence UAV R&D platform for ISTAR & communication relay",
    progress: 45,
    phase: "Airframe & control stack R&D",
    timeline: "2023 – 2026",
    bullets: [
      "Armoured multi‑rotor airframe concepts",
      "Bench‑testing flight controller & telemetry",
      "Compliance‑first, human‑in‑the‑loop autonomy",
    ],
    icon: Radar,
  },
  {
    id: "astro-tools",
    name: "Astronomy Tools",
    tagline: "AI‑driven astronomy utilities for students & researchers",
    progress: 20,
    phase: "Prototype tools & internal pilots",
    timeline: "2024 – 2027",
    bullets: [
      "Pipeline design on public survey data",
      "Prototype FOV & visibility planners",
      "Future integration with PrithiviSat ground segment",
    ],
    icon: Telescope,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950/80"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Flagship R&amp;D Programs
          </h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Structured, milestone‑driven programs in CubeSats, defence UAVs and
            astronomy software – built for investors, scientists and students.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className="card-hover border-slate-800/70 bg-slate-900/60"
              >
                <CardHeader className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-sky-500/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <p className="text-sm text-slate-300">{project.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Development progress</span>
                      <span className="font-semibold text-cyan-300">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress value={project.progress} />
                  </div>

                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{project.phase}</span>
                    <span>{project.timeline}</span>
                  </div>

                  <ul className="mt-3 space-y-2 text-xs text-slate-300">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="mt-4 w-full rounded-lg border border-slate-600 bg-slate-900/60 py-2 text-xs font-semibold text-slate-100 hover:border-cyan-400 hover:bg-slate-900 transition-colors"
                    onClick={() => {
                      const el = document.getElementById(project.id);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View mission details
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
