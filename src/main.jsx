import React from "react";
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

function App() {
  return (
    <main>
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
            I’m interested in AI operations, technical operations, implementation, product operations, internal
            tools, and workflow systems. I’m not looking for random busywork. I’m looking for teams that value
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
