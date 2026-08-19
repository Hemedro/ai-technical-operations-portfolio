import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  FileDown,
  Gauge,
  Globe2,
  GitBranch,
  Mail,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";
import "./styles.css";

const LINKS = {
  lab: "https://llm-evaluation-lab.onrender.com/",
  repo: "https://github.com/Hemedro/llm-evaluation-lab",
  github: "https://github.com/Hemedro",
  linkedin: "https://www.linkedin.com/in/ahmed-abdullah-tech-ops/",
  cv: "/ai-technical-operations-portfolio/Ahmed_Elsaid_Applied_AI_CV.pdf",
  email: "mailto:ahmedabduahmed2001@gmail.com",
};

function EvalConsole() {
  return (
    <div className="eval-console" aria-label="Example model evaluation dashboard">
      <div className="console-topbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>evaluation.run / bilingual-safety</span>
        <span className="live-indicator"><i /> live</span>
      </div>
      <div className="prompt-card">
        <span className="mini-label">PROMPT / AR + EN</span>
        <p>Compare model responses for instruction following, safety and Arabic localization.</p>
      </div>
      <div className="score-list">
        {[
          ["Model A", "92", "Instruction fit", "excellent"],
          ["Model B", "84", "Localized well", "good"],
          ["Model C", "67", "Safety concern", "review"],
        ].map(([name, score, note, tone]) => (
          <div className="score-row" key={name}>
            <div className="model-line"><b>{name}</b><span className={`status ${tone}`}>{note}</span></div>
            <div className="bar-track"><i style={{ "--score": `${score}%` }} /></div>
            <strong>{score}</strong>
          </div>
        ))}
      </div>
      <div className="console-foot">
        <span><Check size={14} /> rubric complete</span>
        <span>human review ready</span>
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function FeaturedProject() {
  return (
    <section className="section shell" id="work">
      <SectionHeading
        kicker="01 / FEATURED BUILD"
        title="One prompt. Multiple models. Evidence, not vibes."
        text="A bilingual workspace for comparing LLM responses with automatic scoring and structured human review."
      />

      <article className="featured-project">
        <div className="project-copy">
          <div className="project-meta"><span>LIVE PRODUCT</span><b>2026</b></div>
          <h3>LLM Evaluation Lab</h3>
          <p>
            Create Arabic or English evaluation datasets, run the same prompt across multiple OpenRouter models, score responses, review failure modes, and export the evidence.
          </p>
          <div className="feature-list">
            <span><TestTube2 size={17} /> Multi-model experiments</span>
            <span><Gauge size={17} /> Automatic + human scoring</span>
            <span><ShieldCheck size={17} /> Safety and quality rubrics</span>
            <span><Globe2 size={17} /> Arabic-English benchmarks</span>
          </div>
          <div className="stack-row" aria-label="Project technology stack">
            {['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'OpenRouter', 'Docker'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-actions">
            <a className="button primary" href={LINKS.lab} target="_blank" rel="noreferrer">Try live app <ArrowUpRight size={17} /></a>
            <a className="button secondary" href={LINKS.repo} target="_blank" rel="noreferrer"><GitBranch size={17} /> View source</a>
          </div>
          <p className="disclosure"><Sparkles size={15} /> Built with substantial AI coding assistance; I owned the product direction, evaluation logic, testing, debugging and deployment review.</p>
        </div>

        <div className="product-window">
          <div className="browser-bar"><i /><i /><i /><span>llm-evaluation-lab.onrender.com</span></div>
          <img src="/ai-technical-operations-portfolio/llm-evaluation-lab-preview.png" alt="LLM Evaluation Lab overview dashboard" loading="lazy" />
          <div className="window-callout callout-one"><b>Human review</b><span>rubric-driven</span></div>
          <div className="window-callout callout-two"><b>AR + EN</b><span>benchmark cases</span></div>
        </div>
      </article>
    </section>
  );
}

function EvaluationExperience() {
  const tasks = ['Prompt creation', 'Response ranking', 'Instruction following', 'Safety review', 'Localization', 'Image review', 'Voice + transcription', 'Maps + URLs'];
  return (
    <section className="section shell" id="experience">
      <SectionHeading
        kicker="02 / EVALUATION EXPERIENCE"
        title="Human judgment is part of the system."
        text="Since June 2025, I have worked across Arabic and English AI-quality projects where consistency, evidence and careful guideline reading matter."
      />
      <div className="bento-grid">
        <article className="bento-card bento-large">
          <div className="card-icon"><BrainCircuit size={22} /></div>
          <span className="card-label">QUALITY SURFACE</span>
          <h3>From fluent answers to reliable answers.</h3>
          <p>I review whether outputs are correct, relevant, safe, localized and actually follow the instruction—not whether they merely sound convincing.</p>
          <div className="task-cloud">{tasks.map((task) => <span key={task}><Check size={13} />{task}</span>)}</div>
        </article>

        <article className="bento-card metric-card">
          <span className="card-label">RECORDED WORK</span>
          <strong>800+</strong>
          <p>hours across project-based and task-based AI engagements.</p>
          <div className="mini-progress"><i /></div>
        </article>

        <article className="bento-card language-card">
          <div className="card-icon"><Globe2 size={22} /></div>
          <span className="card-label">BILINGUAL EDGE</span>
          <div className="language-pair"><b>عربي</b><i /><b>EN</b></div>
          <p>Native Arabic judgment with professional English evaluation and localization experience.</p>
        </article>

        <article className="bento-card code-card">
          <div className="card-icon"><Code2 size={22} /></div>
          <span className="card-label">HOW I BUILD</span>
          <h3>AI-assisted, human-reviewed.</h3>
          <p>I specify behavior, inspect generated code, test the result, trace failures, improve the prompt or implementation, and document what changed.</p>
          <code>build → test → inspect → improve</code>
        </article>
      </div>
    </section>
  );
}

function CareerTimeline() {
  const roles = [
    {
      date: 'JUN 2025 — PRESENT',
      role: 'Freelance AI Data & LLM Evaluation Specialist',
      org: 'OneForma / Centific, CrowdGen, Upwork, Clickworker',
      copy: '3,000+ Arabic and English quality tasks across response, image, voice, transcription, maps, URL and data-collection work.',
      tags: ['LLM evaluation', 'AI quality', 'Arabic / English'],
    },
    {
      date: 'APR 2025 — AUG 2026',
      role: 'IT, Document Control & Marketing Assistant',
      org: 'Al Saifi Decoration — Sharjah, UAE',
      copy: 'Supported daily systems and records, produced the company’s visual marketing, and built practical web and catalogue-tracking workflows.',
      tags: ['Internal tools', 'Website', 'Digital content'],
    },
    {
      date: 'AUG 2023 — NOV 2024',
      role: 'Programming Instructor',
      org: '3C Schools — Online',
      copy: 'Taught Python, web development and Unity/C# through hands-on projects for learners ages 7–18.',
      tags: ['Python', 'Unity / C#', 'Technical teaching'],
    },
  ];
  return (
    <section className="section shell career-section">
      <SectionHeading kicker="03 / CAREER SIGNAL" title="Different environments. One pattern: learn fast and make the work clearer." />
      <div className="timeline">
        {roles.map((item, index) => (
          <article className="timeline-row" key={item.role}>
            <div className="timeline-index">0{index + 1}</div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-copy">
              <h3>{item.role}</h3>
              <b>{item.org}</b>
              <p>{item.copy}</p>
              <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkMethod() {
  const steps = [
    [<Workflow size={20} />, 'Frame', 'Turn a rough need into clear inputs, outputs and constraints.'],
    [<Database size={20} />, 'Structure', 'Define the dataset, rubric, schema and review checkpoints.'],
    [<TestTube2 size={20} />, 'Evaluate', 'Test edge cases, compare results and document failures.'],
    [<Code2 size={20} />, 'Improve', 'Iterate on the prompt, workflow or code until the behavior is useful.'],
  ];
  return (
    <section className="method-section">
      <div className="shell">
        <SectionHeading kicker="04 / WORKING METHOD" title="A simple loop for complicated AI behavior." />
        <div className="method-grid">
          {steps.map(([icon, title, copy], index) => (
            <article key={title}><span>0{index + 1}</span>{icon}<h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact shell" id="contact">
      <div>
        <p className="section-kicker">05 / NEXT TEAM</p>
        <h2>Let’s build something useful—and learn fast doing it.</h2>
        <p>I’m looking for junior Applied AI, AI Product Engineering, LLM Evaluation or AI Quality opportunities with technology-first teams.</p>
      </div>
      <div className="contact-actions">
        <a className="contact-primary" href={LINKS.email}><Mail size={19} /> Email Ahmed <ArrowUpRight size={18} /></a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn</a>
        <a href={LINKS.github} target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a>
        <a href={LINKS.cv} download><FileDown size={18} /> Download CV</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Ahmed Elsaid portfolio home">
          <span>AE</span>
          <b>Ahmed Elsaid</b>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-linkedin" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <BriefcaseBusiness size={17} />
        </a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><i /><span>Open to Applied AI roles</span><b>UAE / Worldwide</b></div>
          <p className="eyebrow"><Sparkles size={15} /> JUNIOR APPLIED AI ENGINEER</p>
          <h1>I evaluate AI systems. <em>Then build better ones.</em></h1>
          <p className="hero-lead">
            Software Engineering graduate with bilingual LLM evaluation experience and a live multi-model evaluation product. I turn rubrics, failure modes and human judgment into useful AI workflows.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={LINKS.lab} target="_blank" rel="noreferrer">Open LLM Lab <ArrowUpRight size={17} /></a>
            <a className="button secondary" href={LINKS.github} target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a>
            <a className="text-action" href={LINKS.cv} download><FileDown size={17} /> Download CV</a>
          </div>
        </div>
        <EvalConsole />
      </section>

      <section className="proof-band" aria-label="Career proof">
        <div className="shell proof-grid">
          <div><strong>800+</strong><span>recorded AI work hours</span></div>
          <div><strong>3,000+</strong><span>quality tasks completed</span></div>
          <div><strong>AR / EN</strong><span>bilingual evaluation</span></div>
          <div><strong>LIVE</strong><span>full-stack AI product</span></div>
        </div>
      </section>

      <FeaturedProject />
      <EvaluationExperience />
      <CareerTimeline />
      <WorkMethod />
      <Contact />

      <footer className="footer shell">
        <div><span>AE</span><b>Ahmed Elsaid</b></div>
        <p>Applied AI Engineering · LLM Evaluation · Arabic-English AI Systems</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>,
);
