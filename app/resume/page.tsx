import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-4 py-12">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link href="/" className="text-green-400 text-sm hover:text-green-300 mb-8 inline-block">
          ← Back to home
        </Link>

        {/* Header */}
        <div className="border-b border-gray-700 pb-6 mb-8">
          <h1 className="text-4xl font-extrabold text-white">Cameron Morales</h1>
          <p className="text-green-400 text-lg mt-1">Software Engineer</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
            <span>📍 Chicago, IL</span>
            <span>✉️ cameron@cameronmorales.com</span>
            <a href="https://github.com/Camm66" target="_blank" className="text-green-400 hover:text-green-300">
              github.com/Camm66
            </a>
            <a href="https://cameronmorales.com" target="_blank" className="text-green-400 hover:text-green-300">
              cameronmorales.com
            </a>
          </div>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-gray-300 leading-relaxed">
            Full-stack software engineer with 5+ years of experience building scalable web applications and
            developer tools. Passionate about clean architecture, CI/CD automation, and shipping products
            that solve real problems. Comfortable across the stack — from React frontends to Node/Python backends
            to cloud infrastructure.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SkillGroup label="Languages" items={["TypeScript", "JavaScript", "Python", "SQL", "Bash"]} />
            <SkillGroup label="Frontend" items={["React", "Next.js", "Tailwind CSS", "HTML/CSS"]} />
            <SkillGroup label="Backend" items={["Node.js", "Express", "REST APIs", "GraphQL"]} />
            <SkillGroup label="Infrastructure" items={["GitHub Actions", "Cloudflare", "AWS", "Docker", "Vercel"]} />
            <SkillGroup label="Databases" items={["PostgreSQL", "MongoDB", "Redis", "SQLite"]} />
            <SkillGroup label="Tools" items={["Git", "VSCode", "Figma", "Postman", "Linear"]} />
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Job
            title="Senior Software Engineer"
            company="Apex Labs"
            location="Chicago, IL"
            dates="Jan 2023 – Present"
            bullets={[
              "Led development of a customer-facing SaaS dashboard serving 50k+ monthly active users",
              "Architected a CI/CD pipeline with GitHub Actions reducing deploy time from 45min to under 5min",
              "Migrated monolithic Node.js API to microservices, improving p99 latency by 60%",
              "Mentored 3 junior engineers and led weekly code review sessions",
            ]}
          />
          <Job
            title="Software Engineer"
            company="BuildCo Digital"
            location="Remote"
            dates="Jun 2020 – Dec 2022"
            bullets={[
              "Built and maintained React + TypeScript frontend for e-commerce platform processing $2M/month in transactions",
              "Developed REST APIs in Express/Node.js integrated with Stripe, Twilio, and Shippo",
              "Implemented automated test suite (Jest + Playwright) achieving 85% code coverage",
              "Collaborated closely with design and product to ship 3 major feature releases per quarter",
            ]}
          />
          <Job
            title="Junior Developer"
            company="Freelance"
            location="Chicago, IL"
            dates="2018 – 2020"
            bullets={[
              "Delivered 12+ client websites and web apps using React, Vue, and WordPress",
              "Built custom Shopify themes and integrations for small business clients",
              "Provided ongoing maintenance and performance optimization",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Project
            name="cameronmorales.com"
            url="https://cameronmorales.com"
            stack="Next.js, Tailwind, GitHub Actions, GitHub Pages"
            description="Personal portfolio site with full CI/CD pipeline — push to master triggers lint, build, and auto-deploy."
          />
          <Project
            name="OpenTask"
            url="https://github.com/Camm66"
            stack="React, Node.js, PostgreSQL, Docker"
            description="Open source task management app with real-time collaboration, labels, and Kanban boards."
          />
          <Project
            name="PriceWatch"
            url="https://github.com/Camm66"
            stack="Python, FastAPI, Redis, Playwright"
            description="Price tracking tool that monitors e-commerce listings and sends alerts on price drops."
          />
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="mb-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-white">B.S. Computer Science</p>
                <p className="text-green-400 text-sm">University of Illinois at Chicago</p>
              </div>
              <span className="text-gray-500 text-sm">2018</span>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          cameronmorales.com
        </div>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4 border-b border-gray-800 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{label}</p>
      <p className="text-gray-200 text-sm">{items.join(", ")}</p>
    </div>
  );
}

function Job({
  title, company, location, dates, bullets,
}: {
  title: string; company: string; location: string; dates: string; bullets: string[];
}) {
  return (
    <div className="mb-7">
      <div className="flex flex-wrap justify-between items-start gap-1 mb-2">
        <div>
          <p className="font-semibold text-white">{title}</p>
          <p className="text-green-400 text-sm">{company} · {location}</p>
        </div>
        <span className="text-gray-500 text-sm">{dates}</span>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-gray-300 text-sm leading-relaxed">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Project({
  name, url, stack, description,
}: {
  name: string; url: string; stack: string; description: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <a href={url} target="_blank" className="font-semibold text-white hover:text-green-400">{name}</a>
        <span className="text-gray-600 text-xs">·</span>
        <span className="text-green-600 text-xs">{stack}</span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
