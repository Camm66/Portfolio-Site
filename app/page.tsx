import Blackjack from "./components/Blackjack";

const contact = [
  { label: "cam.morales93@gmail.com", href: "mailto:cam.morales93@gmail.com" },
  { label: "github.com/camm66", href: "https://github.com/camm66" },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-[clamp(1.1rem,4vw,3rem)] pt-[clamp(1.5rem,5vw,4.5rem)] pb-20">
      {/* Nameplate */}
      <header className="relative border border-edge border-t-2 border-t-brass bg-linear-to-b from-[#1c2740] to-[#161f33] p-[clamp(1.6rem,4vw,2.8rem)]">
        <p className="font-data mb-4 text-[0.72rem] uppercase tracking-[0.28em] text-brass">
          Full-Stack &nbsp;/&nbsp; Infrastructure
        </p>

        <h1 className="font-display m-0 text-[clamp(2.3rem,7vw,4.4rem)] font-normal leading-[1.02] tracking-[0.02em] text-paper">
          Cameron <em className="italic text-champagne">Morales</em>
        </h1>

        <div className="font-data mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-edge pt-[1.1rem] text-[0.79rem] text-haze">
          <span>Chicago, IL</span>
          {contact.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="border-b border-champagne/30 text-champagne no-underline transition-colors hover:border-champagne"
            >
              {c.label}
            </a>
          ))}
        </div>
      </header>

      {/* Status */}
      <div className="mt-[3.4rem] mb-6 flex items-center gap-4">
        <h2 className="font-data m-0 whitespace-nowrap text-[0.73rem] font-medium uppercase tracking-[0.3em] text-brass">
          Status
        </h2>
        <span className="h-px flex-1 bg-edge" />
      </div>

      <div className="border border-edge border-l-2 border-l-patina bg-panel px-6 py-5">
        <h3 className="font-display m-0 mb-1 text-[1.1rem] font-semibold text-paper">
          Portfolio in progress
        </h3>
        <p className="m-0 text-[0.92rem] text-[#cfcabf]">
          Selected work and a collaborative pixel-canvas project are on the way. The
          full record is on the resume in the meantime.
        </p>
      </div>

      <a
        href="/resume"
        className="font-data mt-10 inline-block border border-brass px-6 py-3 text-[0.73rem] uppercase tracking-[0.2em] text-champagne no-underline transition-colors hover:bg-brass hover:text-ink"
      >
        View Resume &rarr;
      </a>

      {/* Table */}
      <div className="mt-[3.4rem] mb-6 flex items-center gap-4">
        <h2 className="font-data m-0 whitespace-nowrap text-[0.73rem] font-medium uppercase tracking-[0.3em] text-brass">
          Table
        </h2>
        <span className="h-px flex-1 bg-edge" />
      </div>

      <Blackjack />
    </main>
  );
}
