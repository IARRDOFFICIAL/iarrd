"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Harish Ragavendra Srinivasan",
    role: "Founder & CEO",
    bio: "Leads strategy across space, defence and marine R&D, with focus on affordable, student‑driven innovation.",
    image: "/images/team/harish.jpg", // replace with your real path
  },
  {
    name: "Keerthi Sai A S",
    role: "CTO & R&D Lead",
    bio: "Oversees technical roadmaps for PrithiviSat, IRAI‑Q2 and AI astronomy tools.",
    image: "/images/team/keerthi.jpg",
  },
  {
    name: "HemaGiri Raj",
    role: "Defence Systems Lead",
    bio: "Leads IRAI‑Q2 non‑weaponised UAV R&D with a compliance‑first mindset.",
    image: "/images/team/hemagiri.jpg",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-slate-950/90 py-20 px-6 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Core Leadership
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.name}
              className="card-hover border-slate-800/70 bg-slate-900/80 text-center"
            >
              <CardHeader>
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-slate-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-xs font-medium uppercase tracking-wide text-cyan-300">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
