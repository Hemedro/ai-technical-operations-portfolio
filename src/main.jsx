import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  Mail,
  Map,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import "./styles.css";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const proofStats = [
  { value: "212", label: "catalogue records organized" },
  { value: "197", label: "customer records modeled" },
  { value: "14", label: "Glide data tables inspected" },
  { value: "65/65", label: "PDF index links verified in SOA workflow" },
];

const projectCards = [
  {
    tag: "Internal Tools",
    title: "Catalogue, CRM & Sales Ownership App",
    summary:
      "A mobile-first Glide app that turned physical material catalogue chaos into a searchable internal system with customers, salespeople, notifications, and borrowing state.",
    metrics: ["212 catalogue records", "197 customers", "10+ operational screens"],
    icon: Boxes,
  },
  {
    tag: "AI Operations",
    title: "AI-Assisted Worker SOA Workflow",
    summary:
      "A controlled reporting workflow around Al Ameen ERP for salary reconciliation, previous-year balance checks, advance deductions, review flags, and PDF report generation.",
    metrics: ["Read-only reporting rule", "Excel/PDF outputs", "review checkpoints"],
    icon: BrainCircuit,
  },
  {
    tag: "Procurement Systems",
    title: "Glide Purchase Workflow Module",
    summary:
      "A procurement data model covering suppliers, purchase requests, request lines, purchase orders, receipts, payments, and supplier price history.",
    metrics: ["8 procurement tables", "line-item tracking", "payment/receipt structure"],
    icon: Workflow,
  },
];

const skills = [
  "AI evaluation",
  "LLM response review",
  "Internal tools",
  "Glide Apps",
  "Workflow systems",
  "Excel reporting",
  "Codex workflows",
  "Python",
  "SQL-aware reporting",
  "Technical teaching",
  "Arabic/English",
  "Operations mapping",
];

const workflowSteps = [
  {
    icon: Map,
    title: "Map the messy workflow",
    text: "Find who owns the work, where data lives, what people repeat manually, and where the process breaks.",
  },
  {
    icon: Database,
    title: "Model the system",
    text: "Turn scattered records into tables, relationships, statuses, line items, permissions, and review checkpoints.",
  },
  {
    icon: Bot,
    title: "Use AI where it helps",
    text: "Apply Codex and AI tools to structure reporting, catch edge cases, compare records, and speed up review.",
  },
  {
    icon: ShieldCheck,
    title: "Keep control and auditability",
    text: "Read-only rules, review flags, private-data handling, and explicit uncertainty instead of hidden assumptions.",
  },
];

const cinematicScenes = [
  {
    eyebrow: "Workflow OS",
    title: "Messy inputs become a usable operating system.",
    text: "Catalogue records, sales ownership, borrowing state, notifications, and project context move as one structured workflow.",
    image: assetPath("case-study-images/catalogue-list.jpeg"),
  },
  {
    eyebrow: "Internal Tools",
    title: "Screens that behave like real work, not portfolio decoration.",
    text: "The proof is not a mockup. It comes from a live Glide system used to organize physical catalogue chaos.",
    image: assetPath("case-study-images/catalogue-detail.jpeg"),
  },
  {
    eyebrow: "AI Operations",
    title: "Codex turns reporting into a controlled review flow.",
    text: "Read-only retrieval, Excel templates, review flags, and accounting checks become a repeatable AI-assisted process.",
    image: null,
  },
  {
    eyebrow: "Startup Fit",
    title: "The value is understanding the system from inside.",
    text: "I work close to operations, find the bottlenecks, model the data, then build the practical tool layer.",
    image: assetPath("case-study-images/customers-list.jpeg"),
  },
];

function AmbientSystem() {
  return (
    <div className="ambient-system" aria-hidden="true">
      <div className="grid-plane"></div>
      <div className="scanline"></div>
      <div className="scroll-meter">
        <span></span>
      </div>
      <div className="signal-lane lane-one">
        <span></span>
      </div>
      <div className="signal-lane lane-two">
        <span></span>
      </div>
      <div className="signal-lane lane-three">
        <span></span>
      </div>
      <div className="signal-node node-a"></div>
      <div className="signal-node node-b"></div>
      <div className="signal-node node-c"></div>
      <div className="signal-node node-d"></div>
      <div className="code-rain">
        <span>workflow.map()</span>
        <span>audit.flags</span>
        <span>ai.review</span>
        <span>ops.system</span>
      </div>
    </div>
  );
}

function CinematicStage() {
  return (
    <section className="cinematic-stage" aria-label="Scroll driven portfolio demo">
      <div className="cinematic-sticky">
        <div className="cinematic-kicker">The new way of building internal systems with AI</div>
        <div className="screen-shell">
          <div className="browser-bar">
            <span></span>
            <span></span>
            <span></span>
            <strong>ahmed.ops/system-demo</strong>
          </div>
          <div className="cinematic-track">
            {cinematicScenes.map((scene, index) => (
              <article className="cinematic-panel" key={scene.title}>
                <div className="scene-copy">
                  <p>{scene.eyebrow}</p>
                  <h2>{scene.title}</h2>
                  <span>{scene.text}</span>
                </div>
                <div className={scene.image ? "scene-visual image" : "scene-visual abstract"}>
                  {scene.image ? (
                    <img src={scene.image} alt="" />
                  ) : (
                    <div className="report-flow">
                      <div>ERP read-only data</div>
                      <div>Codex review logic</div>
                      <div>Excel SOA template</div>
                      <div>PDF report output</div>
                    </div>
                  )}
                  <em>0{index + 1}</em>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="stage-progress">
          <span></span>
        </div>
      </div>
    </section>
  );
}

function useScrollDynamics() {
  useEffect(() => {
    const root = document.documentElement;
    const dynamicItems = document.querySelectorAll(
      ".stat, .workflow-card, .project-card, .case-study, .audit-row, .skill-cloud span, .contact-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    dynamicItems.forEach((item, index) => {
      item.classList.add("scroll-reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(item);
    });

    let frame = 0;
    let lastY = window.scrollY;
    let velocity = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scrollY / maxScroll, 1);
      const stage = document.querySelector(".cinematic-stage");
      let stageProgress = 0;

      if (stage) {
        const rect = stage.getBoundingClientRect();
        const travel = Math.max(rect.height - window.innerHeight, 1);
        stageProgress = Math.min(Math.max(-rect.top / travel, 0), 1);
      }

      velocity = velocity * 0.82 + (scrollY - lastY) * 0.18;
      lastY = scrollY;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--stage-progress", stageProgress.toFixed(4));
      root.style.setProperty("--stage-translate", `${stageProgress * -75}%`);
      root.style.setProperty("--stage-kicker-y", `${stageProgress * -16}px`);
      root.style.setProperty("--stage-grid-x", `${stageProgress * -140}px`);
      root.style.setProperty("--stage-rotate-x", `${2 - stageProgress * 4}deg`);
      root.style.setProperty("--stage-rotate-y", `${-5 + stageProgress * 10}deg`);
      root.style.setProperty("--stage-glow-x", `${stageProgress * 120}px`);
      root.style.setProperty("--stage-visual-y", `${stageProgress * -24}px`);
      root.style.setProperty("--stage-image-x", `${(stageProgress - 0.5) * 34}px`);
      root.style.setProperty("--stage-image-rotate", `${-3 + stageProgress * 6}deg`);
      root.style.setProperty("--stage-flow-x", `${(stageProgress - 0.5) * 28}px`);
      root.style.setProperty("--stage-flow-x-reverse", `${(0.5 - stageProgress) * 28}px`);
      root.style.setProperty("--scroll-depth", `${scrollY * -0.075}px`);
      root.style.setProperty("--lane-shift", `${scrollY * 0.045}px`);
      root.style.setProperty("--reverse-lane-shift", `${scrollY * -0.035}px`);
      root.style.setProperty("--image-parallax", `${scrollY * -0.018}px`);
      root.style.setProperty("--image-stack-y", `${scrollY * -0.0072}px`);
      root.style.setProperty("--image-one-y", `${scrollY * 0.0063}px`);
      root.style.setProperty("--image-two-y", `${34 + scrollY * -0.018}px`);
      root.style.setProperty("--image-three-y", `${scrollY * -0.0099}px`);
      root.style.setProperty("--system-map-y", `${scrollY * 0.0081}px`);
      root.style.setProperty("--audit-y", `${scrollY * 0.0045}px`);
      root.style.setProperty("--terminal-y", `${scrollY * 0.003}px`);
      root.style.setProperty("--code-one-y", `${scrollY * 0.018}px`);
      root.style.setProperty("--code-two-y", `${scrollY * -0.0135}px`);
      root.style.setProperty("--code-three-y", `${scrollY * 0.012}px`);
      root.style.setProperty("--code-four-y", `${scrollY * -0.009}px`);
      root.style.setProperty("--system-tilt", `${Math.max(Math.min(velocity * 0.04, 7), -7)}deg`);
      root.style.setProperty("--signal-boost", Math.min(Math.abs(velocity) / 42, 1).toFixed(3));
      frame = 0;
    };

    const updatePointer = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("pointermove", updatePointer);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      observer.disconnect();
    };
  }, []);
}

function App() {
  useScrollDynamics();

  return (
    <main>
      <AmbientSystem />
      <section className="hero" id="top">
        <nav className="nav">
          <a className="brand" href="#top" aria-label="Ahmed portfolio home">
            <span className="brand-mark">AA</span>
            <span>Ahmed Abdullah</span>
          </a>
          <div className="nav-links">
            <a href="#proof">Proof</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI Operations / Technical Operations / Internal Tools</p>
            <h1>I turn messy business workflows into practical systems.</h1>
            <p className="hero-text">
              I work best inside real operations: understanding how people actually work, organizing the data,
              using AI where it helps, and building internal tools that make execution clearer.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                See proof <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="mailto:ahmedabduahmed2001@gmail.com">
                Contact <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="terminal-panel" aria-label="positioning panel">
            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="terminal-body">
              <p className="prompt">$ identity</p>
              <p>Technical operations generalist with AI evaluation and internal tool proof.</p>
              <p className="prompt">$ operating_pattern</p>
              <p>messy workflow -&gt; data model -&gt; AI/tool workflow -&gt; usable system</p>
              <p className="prompt">$ looking_for</p>
              <p>AI-first teams, startup ops, implementation, product ops, workflow systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" id="proof">
        {proofStats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <CinematicStage />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">How I Create Leverage</p>
          <h2>Not random tasks. A repeatable operating pattern.</h2>
        </div>
        <div className="workflow-grid">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="workflow-card" key={step.title}>
                <Icon size={24} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading wide">
          <p className="eyebrow">Selected Proof</p>
          <h2>Work that shows how I think, not just what tools I used.</h2>
        </div>

        <div className="project-grid">
          {projectCards.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-icon">
                  <Icon size={25} />
                </div>
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="metric-row">
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="case-study">
        <div className="case-copy">
          <p className="eyebrow">Case Study 01</p>
          <h2>Catalogue / CRM / sales ownership app</h2>
          <p>
            AL SAIFI had physical material catalogues that were difficult to find, track, or connect to sales
            work. I built a Glide app that organized catalogue images, supplier, material type, shelf location,
            borrow state, customers, salespeople, and notifications.
          </p>
          <ul className="clean-list">
            <li>
              <CheckCircle2 size={18} /> Visual catalogue library with shelf and holder tracking
            </li>
            <li>
              <CheckCircle2 size={18} /> CRM-style customer records with sales ownership
            </li>
            <li>
              <CheckCircle2 size={18} /> Notifications table for activity/audit visibility
            </li>
          </ul>
        </div>
        <div className="image-stack">
          <img src={assetPath("case-study-images/catalogue-list.jpeg")} alt="Catalogue list app screen" />
          <img src={assetPath("case-study-images/catalogue-detail.jpeg")} alt="Catalogue detail app screen" />
          <img src={assetPath("case-study-images/customers-list.jpeg")} alt="Customers list app screen" />
        </div>
      </section>

      <section className="case-study alt">
        <div className="system-map">
          <div className="node core">
            <Network size={22} />
            Procurement Module
          </div>
          <div className="node">Suppliers</div>
          <div className="node">Purchase Requests</div>
          <div className="node">Request Lines</div>
          <div className="node">Purchase Orders</div>
          <div className="node">Order Lines</div>
          <div className="node">Receipts</div>
          <div className="node">Payments</div>
          <div className="node">Price History</div>
        </div>
        <div className="case-copy">
          <p className="eyebrow">Case Study 02</p>
          <h2>Procurement workflow architecture</h2>
          <p>
            The app grew into a purchase workflow structure with suppliers, purchase requests, request lines,
            purchase orders, order lines, receipts, payments, and supplier price history. This shows line-item
            thinking, not just form-building.
          </p>
          <div className="mini-cards">
            <span>
              <Layers3 size={18} /> Header + line item model
            </span>
            <span>
              <Gauge size={18} /> Quantity and balance tracking
            </span>
            <span>
              <GitBranch size={18} /> Request-to-payment flow
            </span>
          </div>
        </div>
      </section>

      <section className="case-study">
        <div className="case-copy">
          <p className="eyebrow">Case Study 03</p>
          <h2>AI-assisted Al Ameen SOA workflow</h2>
          <p>
            I used AI-assisted workflows around Al Ameen ERP reporting to help prepare worker salary SOA reports,
            reconcile salary and advance balances, check previous-year payments, flag accounting anomalies, and
            produce structured Excel/PDF outputs.
          </p>
        </div>
        <div className="audit-panel">
          <div className="audit-row">
            <FileText size={20} />
            <span>Excel SOA template generation</span>
          </div>
          <div className="audit-row">
            <ShieldCheck size={20} />
            <span>Read-only accounting data rule</span>
          </div>
          <div className="audit-row">
            <Wrench size={20} />
            <span>Review flags for unclear cases</span>
          </div>
          <div className="audit-row">
            <Sparkles size={20} />
            <span>AI-assisted checking and structuring</span>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">Stack / Skill Surface</p>
          <h2>Useful across product, operations, and AI workflows.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Next Environment</p>
          <h2>Best fit: AI-first teams with messy workflows worth solving.</h2>
          <p>
            I'm interested in AI operations, technical operations, implementation, product operations, internal
            tools, and workflow systems. I'm not looking for random busywork. I'm looking for teams that value
            building better ways to operate.
          </p>
        </div>
        <div className="contact-card">
          <a href="mailto:ahmedabduahmed2001@gmail.com">
            ahmedabduahmed2001@gmail.com <ArrowUpRight size={18} />
          </a>
          <a href="https://github.com/Hemedro" target="_blank" rel="noreferrer">
            github.com/Hemedro <ArrowUpRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-abdullah-data-analyst/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
