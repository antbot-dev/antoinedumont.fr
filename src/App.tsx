import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  Bot,
  Calendar,
  Code2,
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
  ShieldCheck,
  Sparkles,
  Target,
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
  icon: LucideIcon;
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
  { label: 'Skills', href: '#skills' },
  { label: 'AI', href: '#ai' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const metrics: Metric[] = [
  { value: '15+', label: 'years in digital marketing, acquisition, and SaaS growth' },
  { value: '14k+', label: 'LinkedIn followers and AI & Tech Trends newsletter audience' },
  { value: '24/7', label: 'autonomous AI builds and WhatsApp podcast experiments through AntBot' },
  { value: 'Paris', label: 'based, working across French and international markets' },
];

const focusAreas: FocusArea[] = [
  {
    icon: TrendingUp,
    title: 'Revenue-led marketing',
    text: 'Builds pipeline engines across SEO, paid acquisition, ABM, email, content, events, CRM, and lifecycle programs.',
  },
  {
    icon: Workflow,
    title: 'Automation and operations',
    text: 'Connects strategy to execution with Salesforce, Pardot, Marketo, analytics, scoring, nurturing, and reporting loops.',
  },
  {
    icon: Bot,
    title: 'AI agent builder',
    text: 'Designs always-on agents for messaging, vision, web tasks, code generation, memory, scheduling, and infrastructure monitoring.',
  },
  {
    icon: Users,
    title: 'Team leadership',
    text: 'Leads cross-functional marketing work with sales, product, customer teams, agencies, and distributed technical contributors.',
  },
];

const experiences: ExperienceItem[] = [
  {
    period: '2022 - Present',
    role: 'Head of Marketing / CMO profile',
    company: 'Go1',
    summary:
      'Leading marketing with a business-owner mindset: creating the right conversations, managing SDR motion, and building pipeline for the Go1 learning ecosystem.',
    bullets: [
      'Manage marketing and SDR priorities to generate qualified conversations and turn market interest into measurable pipeline.',
      'Align campaigns, content, sales plays, events, and outbound motion around business goals and revenue contribution.',
      'Use AI, automation, and data-driven workflows to improve speed, targeting, follow-up, and GTM execution quality.',
    ],
  },
  {
    period: '2017 - 2022',
    role: 'Chief Marketing Officer',
    company: 'Coorpacademy',
    summary:
      'Led marketing for a fast-growing B2B SaaS corporate digital learning company before the Go1 acquisition.',
    bullets: [
      'Built and led the marketing function across lead generation, ABM, content, CRM, automation, and international campaigns.',
      'Aligned marketing and sales execution in a high-growth SaaS environment using Salesforce and Pardot.',
      'Scaled the marketing engine from early stage into a mature revenue contribution model.',
    ],
  },
  {
    period: '2012 - 2017',
    role: 'Digital Marketing Manager / Acquisition Lead',
    company: 'Laureate',
    summary:
      'Managed web projects and digital acquisition for higher education programs, MBA, masters, and business schools.',
    bullets: [
      'Ran multichannel acquisition, landing pages, analytics, lead scoring, and nurturing programs.',
      'Integrated web activity with Microsoft Dynamics and deployed Marketo marketing automation.',
      'Managed agencies and project delivery across education brands and online conversion paths.',
    ],
  },
  {
    period: '2001 - 2012',
    role: 'Digital project, traffic, and startup builder',
    company: 'VENISE, Kohdao, TMTbourse',
    summary:
      'Earlier career across agency delivery, London-based traffic acquisition, and an entrepreneurial finance media startup.',
    bullets: [
      'Managed digital campaigns and web projects for B2B and B2C brands including NetApp and IKEA France.',
      'Drove SEO, SEM, affiliate, email, and audience monetization for large property and media networks.',
      'Co-founded TMTbourse, combining stock market content, technical analysis, and early AI-oriented thinking.',
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    icon: Target,
    title: 'GTM and demand generation',
    skills: ['ABM', 'Lead generation', 'SEO and SEA', 'PPC', 'Emailing', 'Lifecycle marketing', 'Conversion'],
  },
  {
    icon: ShieldCheck,
    title: 'Marketing operations',
    skills: ['Salesforce', 'Pardot', 'Marketo', 'CRM', 'Lead scoring', 'Dashboards', 'Analytics'],
  },
  {
    icon: Code2,
    title: 'Digital and technical',
    skills: ['Web projects', 'HTML/CSS', 'PHP/MySQL', 'Webflow', 'Automation', 'API workflows'],
  },
  {
    icon: Sparkles,
    title: 'AI systems',
    skills: ['Autonomous agents', 'OpenClaw', 'WhatsApp agents', 'Vision', 'Memory', 'Scheduled tasks'],
  },
];

const projects: Project[] = [
  {
    label: 'AI Lab',
    title: 'AntBot Podcast',
    text: 'A personalized 5-minute AI podcast delivered in WhatsApp every morning, built with AntBot, OpenClaw workflows, source monitoring, verification, and text-to-speech.',
    href: 'https://antbot.dev/podcast/',
  },
  {
    label: 'Learning SaaS',
    title: 'Coorpacademy to Go1',
    text: 'B2B digital learning marketing across growth, acquisition, CRM automation, ABM, sales alignment, and post-acquisition ecosystem positioning.',
    href: 'https://www.go1.com/',
  },
  {
    label: 'Digital transformation',
    title: 'Education acquisition programs',
    text: 'Large-scale acquisition and conversion programs for higher education, including landing pages, CRM integration, analytics, and marketing automation.',
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

const waveformHeights = [9, 13, 20, 16, 26, 22, 30, 18, 15, 11, 22, 26, 19, 14, 10, 18, 25, 21, 16, 12, 8, 14, 22, 18, 12, 15, 24, 18, 11, 8];

function App() {
  return (
    <div className="site-shell">
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
              Paris-based CMO / Head of Marketing / AI
            </p>

            <h1>CMO / Head of Marketing / AI: GTM and growth.</h1>

            <p className="hero-lede">
              I help B2B SaaS and learning companies build pipeline, lead marketing teams, and turn AI into practical GTM advantage. Strategic thinker, hands-on builder, and manager of teams that turn ideas into measurable growth.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="mailto:antoine.dumont@outlook.com">
                <Mail aria-hidden="true" />
                Contact me
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
              <div className="profile-topline">
                <span className="status-dot" />
                <span>Profile snapshot</span>
              </div>

              <div className="profile-main">
                <div className="photo-frame" aria-label="Antoine Dumont profile photo">
                  <img
                    src="/profile-photo.png"
                    alt="Antoine Dumont"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>AD</span>
                </div>

                <div>
                  <h2>Antoine Dumont</h2>
                  <p>CMO / Head of Marketing / AI</p>
                  <div className="profile-location">
                    <MapPin aria-hidden="true" />
                    Paris, France
                  </div>
                </div>
              </div>

              <div className="profile-summary">
                <p>
                  B2B SaaS marketing leader with an engineering and business background, built around lead generation, digital transformation, GTM execution, and hands-on AI agent systems.
                </p>
              </div>

              <a
                className="linkedin-mini"
                href="https://www.linkedin.com/newsletters/ai-tech-trends-2024-7008752675219513344/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin aria-hidden="true" />
                <div>
                  <strong>14k+ followers + AI & Tech Trends</strong>
                  <span>Promoting my LinkedIn newsletter on AI, tech and GTM shifts</span>
                </div>
                <ExternalLink aria-hidden="true" />
              </a>

              <a className="antbot-mini" href="https://antbot.dev/podcast/" target="_blank" rel="noreferrer">
                <Bot aria-hidden="true" />
                <div>
                  <strong>AI Agents</strong>
                  <span>Concrete AI build: agents, memory, WhatsApp workflows and a personalized daily podcast</span>
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

        <section className="section-band">
          <div className="section-heading">
            <p className="section-kicker">Current focus</p>
            <h2>GTM leadership, practical AI building, and pipeline execution.</h2>
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

        <section className="section-band" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Core skills</p>
            <h2>Operator profile: strategic enough for board-level GTM, technical enough to build.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <Icon aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="split-section antbot-section" id="ai">
          <div className="section-heading compact">
            <p className="section-kicker">AntBot.dev</p>
            <h2>AntBot is a working example of what I build.</h2>
            <p>
              The podcast product creates a personalized 5-minute AI audio briefing every morning in WhatsApp. It combines source monitoring, agent workflows, verification, messaging, and text-to-speech into a real user-facing experience.
            </p>
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
                  <strong>Bonjour !</strong> Ton briefing IA & Tech est prêt.
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
                    <small>IA & Tech - 5 min</small>
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

        <section className="section-band selected-work-section">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2>Projects that show the mix of growth, systems, and execution.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Visit project
                    <ExternalLink aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-heading compact">
            <p className="section-kicker">Education</p>
            <h2>Engineering plus business training.</h2>
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

        <section className="section-band" id="experience">
          <div className="section-heading">
            <p className="section-kicker">CV timeline</p>
            <h2>From digital acquisition to SaaS growth and AI-era marketing.</h2>
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

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Always happy to discuss GTM, AI, vision, and business opportunities.</h2>
            <p>
              I enjoy conversations with founders, operators, partners, and people building ambitious things, especially around growth strategy, digital learning, AI agents, and how technology changes go-to-market.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button primary" href="mailto:antoine.dumont@outlook.com">
              <Mail aria-hidden="true" />
              antoine.dumont@outlook.com
            </a>
            <a className="button secondary" href="https://antbot.dev/" target="_blank" rel="noreferrer">
              <Rocket aria-hidden="true" />
              antbot.dev
            </a>
            <a
              className="button secondary"
              href="https://fr.linkedin.com/in/antoine-dumont"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" />
              LinkedIn profile
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
