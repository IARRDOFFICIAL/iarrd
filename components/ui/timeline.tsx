"use client";

const milestones = [
  {
    year: "2023",
    title: "IARRD founded",
    text: "Student‑led deep‑tech initiative launched with focus on space, defence and marine R&D.",
  },
  {
    year: "2024",
    title: "Concepts & lab work",
    text: "PrithiviSat mission defined, IRAI‑Q2 platform scoped, astronomy tools prototyped on public data.",
  },
  {
    year: "2025",
    title: "Prototypes & partnerships",
    text: "Subsystem prototypes, lab collaborations and investor‑ready documentation in progress.",
  },
  {
    year: "2026",
    title: "PDR & demo phase",
    text: "Targeting preliminary design reviews, integrated demos and external evaluations.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative border-y border-slate-800/70 bg-slate-950/80 py-20 px-6 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Roadmap &amp; Milestones
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-700 md:left-1/2" />
          <div className="space-y-10">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2" />
                <div className="md:w-1/2">
                  <div className="relative rounded-xl bg-slate-900/80 p-6 shadow-lg">
                    <div className="mb-2 text-sm font-semibold text-cyan-300">
                      {m.year}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{m.title}</h3>
                    <p className="text-sm text-slate-300">{m.text}</p>
                    <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-cyan-400 md:left-auto md:-right-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
