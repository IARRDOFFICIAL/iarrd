export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p>IARRD – Indian Astronomy Rocket Research &amp; Development</p>
          <p className="mt-1">
            India‑first, non‑weaponised Phase‑1 R&amp;D in CubeSats, defence UAV
            platforms and AI astronomy tools.
          </p>
        </div>
        <div className="space-y-1">
          <p>Contact: iarrd.official@gmail.com · +91 8903272879</p>
          <p>Anaicut Road, Ranipet ‑ 13 · Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
