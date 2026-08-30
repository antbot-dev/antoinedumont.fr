import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  Bot,
  Calendar,
  ExternalLink,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Play,
  Rocket,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';

type Metric = {
  value: string;
  label: string;
};

type FocusArea = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  bullets: string[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

type Project = {
  label: string;
  title: string;
  text: string;
  href?: string;
};

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'AI', href: '#ai' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Track record', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const metrics: Metric[] = [
  { value: '10×', label: 'ARR growth: 1M to 10M in five years' },
  { value: '100', label: 'SQL generated per month' },
  { value: '15+', label: 'years in B2B SaaS growth' },
  { value: '14k+', label: 'followers on AI, tech and GTM' },
];

const brands = ['Go1', 'Coorpacademy', 'Laureate', 'NetApp', 'IKEA France'];

const focusAreas: FocusArea[] = [
  {
    icon: Sparkles,
    title: 'Applied AI',
    text: 'Agents that do real work — research, outreach, reporting, content ops. Shipped and measured, not demoed.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue marketing',
    text: 'The pipeline engine end to end: demand, ABM, lifecycle. And ownership of the number it produces.',
  },
  {
    icon: Workflow,
    title: 'GTM systems',
    text: 'CRM, data and automation wired into one loop, so marketing and sales run on the same signal.',
  },
  {
    icon: Users,
    title: 'Teams',
    text: 'Small marketing teams that ship weekly and work straight with sales, product and founders.',
  },
];

const experiences: ExperienceItem[] = [
  {
    period: '2022 - Present',
    role: 'Head of Marketing',
    company: 'Go1',
    summary:
      'Marketing run with a business-owner mindset: create the right conversations, drive the SDR motion, build pipeline for the Go1 learning ecosystem.',
    bullets: [
      'Own marketing and SDR priorities, turning market interest into 100 SQL per month for sales.',
      'Line up campaigns, content, sales plays, events and outbound behind one revenue goal.',
      'Put AI and automation into the GTM workflow itself — targeting, follow-up, execution speed.',
    ],
  },
  {
    period: '2017 - 2022',
    role: 'Chief Marketing Officer',
    company: 'Coorpacademy',
    summary:
      'Led marketing for a fast-growing B2B SaaS corporate learning company, through to the Go1 acquisition.',
    bullets: [
      'Built the marketing function from the ground up: demand gen, ABM, content, CRM, international campaigns.',
      'Ran the Salesforce revenue stack and the automation layer behind it, in lockstep with sales.',
      'Grew ARR from 1M to 10M in five years, on the back of the marketing engine we built.',
    ],
  },
  {
    period: '2012 - 2017',
    role: 'Digital Marketing Manager / Acquisition Lead',
    company: 'Laureate',
    summary:
      'Web projects and digital acquisition for higher education programs — MBA, masters, business schools.',
    bullets: [
      'Ran multichannel acquisition, landing pages, analytics, lead scoring and nurturing.',
      'Integrated web activity with Microsoft Dynamics and deployed the marketing automation stack.',
      'Managed agencies and delivery across education brands and their online conversion paths.',
    ],
  },
  {
    period: '2001 - 2012',
    role: 'Digital project, traffic, and startup builder',
    company: 'VENISE, Kohdao, TMTbourse',
    summary:
      'Agency delivery, London-based traffic acquisition, and an entrepreneurial finance media startup.',
    bullets: [
      'Digital campaigns and web projects for B2B and B2C brands including NetApp and IKEA France.',
      'SEO, SEM, affiliate, email and audience monetization across large property and media networks.',
      'Co-founded TMTbourse: market content, technical analysis, and early algorithmic thinking.',
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'AI systems',
    skills: [
      'Agentic workflows',
      'Claude & GPT APIs',
      'MCP',
      'RAG',
      'Evals',
      'Voice & TTS',
      'Vision',
    ],
  },
  {
    title: 'Growth & demand',
    skills: ['ABM', 'SEO & GEO', 'Lifecycle', 'Paid acquisition', 'Content', 'Conversion'],
  },
  {
    title: 'RevOps & data',
    skills: ['Salesforce', 'Attribution', 'Lead scoring', 'Dashboards', 'GA4'],
  },
  {
    title: 'Build & ship',
    skills: ['TypeScript / React', 'Python', 'APIs & automation', 'Claude Code', 'Vercel'],
  },
];

const projects: Project[] = [
  {
    label: 'AI Lab',
    title: 'AntBot Podcast',
    text: 'A personalized 5-minute AI briefing delivered in WhatsApp every morning. Source monitoring, agent workflows, verification, text-to-speech. Now in the hands of 100+ testers.',
    href: 'https://antbot.dev/podcast/',
  },
  {
    label: 'Learning SaaS',
    title: 'Coorpacademy to Go1',
    text: 'B2B learning marketing from 1M to 10M ARR and through the acquisition: demand gen, CRM automation, ABM, sales alignment, post-acquisition positioning.',
    href: 'https://www.go1.com/',
  },
  {
    label: 'Acquisition',
    title: 'Education programs at scale',
    text: 'Large-scale acquisition and conversion for higher education — landing pages, CRM integration, analytics, marketing automation.',
    href: 'https://www.antoinedumont.fr/',
  },
];

const education = [
  {
    school: 'Montpellier Business School',
    detail: 'MBA, Marketing',
    period: '2004 - 2005',
  },
  {
    school: 'ESIEA',
    detail: 'Engineering degree, Bac+5',
    period: '1999 - 2004',
  },
];

const contactPrompts = [
  'you need pipeline, not more content',
  'you want AI running inside your GTM, not sitting in a deck',
  'you are hiring a marketing lead who can also build',
  'you just want to compare notes on agents and go-to-market',
];

const waveformHeights = [9, 13, 20, 16, 26, 22, 30, 18, 15, 11, 22, 26, 19, 14, 10, 18, 25, 21, 16, 12, 8, 14, 22, 18, 12, 15, 24, 18, 11, 8];

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#profile">
        Skip to content
      </a>

      <header className="site-nav" id="top">
        <a className="brand" href="#top" aria-label="Antoine Dumont home">
          <span className="brand-mark">AD</span>
          <span>Antoine Dumont</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-action" href="mailto:antoine.dumont@outlook.com">
          <Mail aria-hidden="true" />
          Contact
        </a>
      </header>

      <main>
        <section className="hero-section" id="profile">
          <div className="hero-copy">
            <p className="eyebrow">
              <MapPin aria-hidden="true" />
              Paris · Head of Marketing & Applied AI
            </p>

            <h1>Marketing that ships. AI that works.</h1>

            <p className="hero-lede">
              Fifteen years building B2B SaaS pipeline. The last few building applied AI systems that run in production — agents, automations, and the GTM plumbing underneath. I lead the team, and I ship the tooling myself.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="mailto:antoine.dumont@outlook.com">
                <Mail aria-hidden="true" />
                Write to me
              </a>
              <a
                className="button secondary"
                href="https://fr.linkedin.com/in/antoine-dumont"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="hero-visual profile-visual" aria-label="Antoine Dumont profile preview">
            <div className="profile-card">
              <div className="profile-main">
                <div className="photo-frame" aria-label="Antoine Dumont profile photo">
                  <img
                    src="/profile-photo.jpg"
                    alt="Antoine Dumont"
                    width="352"
                    height="352"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>AD</span>
                </div>

                <div>
                  <h2>Antoine Dumont</h2>
                  <p>Head of Marketing & Applied AI</p>
                  <div className="profile-location">
                    <MapPin aria-hidden="true" />
                    Paris, France
                  </div>
                </div>
              </div>

              <div className="profile-summary">
                <p>
                  Engineer and marketer. B2B SaaS demand generation, GTM execution, and hands-on AI agent systems.
                </p>
              </div>

              <a
                className="profile-link"
                href="https://www.linkedin.com/newsletters/ai-tech-trends-2024-7008752675219513344/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin aria-hidden="true" />
                <div>
                  <strong>AI &amp; Tech Trends</strong>
                  <span>Newsletter on AI, tech and GTM shifts</span>
                </div>
                <ExternalLink aria-hidden="true" />
              </a>

              <a className="profile-link" href="https://antbot.dev/podcast/" target="_blank" rel="noreferrer">
                <Bot aria-hidden="true" />
                <div>
                  <strong>AntBot</strong>
                  <span>Agents, memory, and a daily WhatsApp podcast</span>
                </div>
                <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </aside>
        </section>

        <section className="metric-strip" aria-label="Profile highlights">
          {metrics.map((metric) => (
            <div className="metric-item" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="brand-strip" aria-label="Companies and brands worked with">
          <p>Worked with</p>
          <ul>
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </section>

        <section className="section-band focus-section">
          <div className="section-heading">
            <p className="section-kicker">Current focus</p>
            <h2>Four things I am actually doing right now.</h2>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article className="focus-card" key={area.title}>
                  <Icon aria-hidden="true" />
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-band split-section antbot-section" id="ai">
          <div className="section-heading compact">
            <p className="section-kicker">AntBot.dev</p>
            <h2>AntBot is the proof, not the pitch.</h2>
            <p>
              Every morning it delivers a personalized 5-minute AI briefing in WhatsApp. Source monitoring, agent workflows, fact verification, and text-to-speech — assembled into something 100+ testers actually use.
            </p>
            <a className="text-link" href="https://antbot.dev/podcast/" target="_blank" rel="noreferrer">
              See it running
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="podcast-demo" aria-label="AntBot Podcast WhatsApp preview">
            <div className="podcast-phone">
              <div className="podcast-header">
                <div className="whatsapp-mark" aria-hidden="true">
                  <MessageCircle />
                </div>
                <div>
                  <strong>AntBot Podcast</strong>
                  <span>en ligne</span>
                </div>
              </div>

              <div className="podcast-body">
                <span className="podcast-date">Aujourd'hui</span>

                <div className="podcast-bubble bot podcast-delay-1">
                  <strong>Bonjour !</strong> Ton briefing IA &amp; Tech est prêt.
                  <span>7:30</span>
                </div>

                <div className="podcast-audio podcast-delay-2">
                  <button type="button" aria-label="Play AntBot podcast preview">
                    <Play aria-hidden="true" />
                  </button>
                  <div className="podcast-audio-content">
                    <div className="waveform" aria-hidden="true">
                      {waveformHeights.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          style={{ height: `${height}px`, animationDelay: `${index * 0.055}s` }}
                        />
                      ))}
                    </div>
                    <small>IA &amp; Tech - 5 min</small>
                  </div>
                </div>

                <div className="podcast-bubble bot podcast-delay-3">
                  <em>Agents IA - GTM workflows - WhatsApp automation</em>
                  <span>7:30</span>
                </div>

                <div className="podcast-bubble user podcast-delay-4">
                  Super merci 🔥
                  <span>7:42</span>
                </div>
              </div>

              <div className="podcast-input">
                <span>Écrire un message</span>
                <button type="button" aria-label="Send message">
                  <Send aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band skills-section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Core skills</p>
            <h2>Strategic enough for the board. Technical enough to build it.</h2>
          </div>

          <div className="skill-list">
            {skillGroups.map((group) => (
              <article className="skill-row" key={group.title}>
                <h3>{group.title}</h3>
                <p>
                  {group.skills.map((skill, index) => (
                    <span key={skill}>
                      {index > 0 ? <i aria-hidden="true">·</i> : null}
                      {skill}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band selected-work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2>Built, shipped, and still running.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                {project.href ? (
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    Visit
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-band career-section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Track record</p>
            <h2>From digital acquisition to SaaS growth to applied AI.</h2>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-meta">
                  <Calendar aria-hidden="true" />
                  <span>{item.period}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.summary}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band education-section" id="education">
          <div className="section-heading compact">
            <p className="section-kicker">Education</p>
            <h2>Engineer first. Marketer second.</h2>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.school}>
                <GraduationCap aria-hidden="true" />
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.detail}</p>
                </div>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band contact-section" id="contact">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Write to me if:</h2>
            <ul className="contact-prompts">
              {contactPrompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
          </div>

          <div className="contact-actions">
            <a className="button primary" href="mailto:antoine.dumont@outlook.com">
              <Mail aria-hidden="true" />
              antoine.dumont@outlook.com
            </a>
            <a
              className="button secondary"
              href="https://fr.linkedin.com/in/antoine-dumont"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button secondary" href="https://antbot.dev/" target="_blank" rel="noreferrer">
              <Rocket aria-hidden="true" />
              antbot.dev
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>&copy; {new Date().getFullYear()} Antoine Dumont</span>
        <div>
          <a href="https://www.antoinedumont.fr/" target="_blank" rel="noreferrer">
            <FileText aria-hidden="true" />
            Legacy CV
          </a>
          <a href="#top">
            Back to top
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
