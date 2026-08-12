import {
  ShieldCheck,
  Search,
  Radar,
  Terminal,
  Globe,
  Server,
  Code2,
  Network,
  FlaskConical,
  ArrowUpRight,
  FileText,
} from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    category: "ENDPOINT SECURITY",
    status: "COMPLETED",
    icon: ShieldCheck,
    title: "Windows Security Hardening",
    summary:
      "A practical endpoint security exercise focused on reducing the attack surface of a Windows environment and strengthening access controls, firewall configuration, system services, endpoint protection and security monitoring.",
    problem:
      "Default Windows configurations can expose unnecessary services, privileges and network access, increasing the potential impact of a compromise.",
    approach:
      "Reviewed user privileges, authentication policies, firewall rules, unnecessary services, Windows Defender, remote access, patching and security logs.",
    tools: [
      "Windows 10/11",
      "PowerShell",
      "Windows Defender",
      "Windows Firewall",
      "Event Viewer",
      "Group Policy",
    ],
    outcome:
      "Strengthened endpoint security controls and developed a practical understanding of defense-in-depth and least-privilege principles.",
    evidence: [
      {
        src: "/evidence/03-windows-ntfs-permissions.png",
        label: "NTFS / ACL permissions",
      },
      {
        src: "/evidence/04-windows-powershell-enumeration.png",
        label: "PowerShell enumeration",
      },
    ],
    writeup: "/writeups/windows-security-hardening",
  },

  {
    number: "02",
    category: "VULNERABILITY MANAGEMENT",
    status: "COMPLETED",
    icon: Radar,
    title: "Vulnerability Assessment & Risk Prioritization",
    summary:
      "Conducted an authorized vulnerability assessment using Nessus to identify, validate and prioritize security weaknesses within a controlled environment.",
    problem:
      "Security teams need to identify vulnerabilities accurately and prioritize remediation based on severity and potential impact.",
    approach:
      "Configured and conducted vulnerability scanning, reviewed findings, validated results and prioritized remediation using severity and risk considerations.",
    tools: [
      "Tenable Nessus",
      "CVSS",
      "CVE",
      "OVAL",
      "OpenVAS",
    ],
    outcome:
      "The assessment identified 10 vulnerabilities: 2 Critical, 4 High, 3 Medium and 1 Low. Critical and High findings were prioritized for remediation.",
    evidence: [
      {
        src: "/evidence/01-vulnerability-scan-overview.png",
        label: "Nessus vulnerability scan",
      },
      {
        src: "/evidence/02-critical-vulnerability-finding.png",
        label: "Critical vulnerability finding",
      },
    ],
  },
];

const technicalLabs = [
  {
    number: "03",
    category: "THREAT INTELLIGENCE",
    icon: Search,
    title: "Threat Intelligence & IOC Investigation",
    description:
      "Investigated security indicators using open-source threat intelligence platforms to assess domains, URLs, email indicators and malware-related intelligence.",
    tools: [
      "URLScan.io",
      "Abuse.ch",
      "MalwareBazaar",
      "ThreatFox",
      "Cisco Talos",
    ],
    evidence: [
      {
        src: "/evidence/06-threat-intelligence-tal0s.png",
        label: "Cisco Talos investigation",
      },
      {
        src: "/evidence/07-threat-intelligence-email-analysis.png",
        label: "Email / IOC investigation",
      },
    ],
  },

  {
    number: "04",
    category: "RECONNAISSANCE",
    icon: Globe,
    title: "Passive Reconnaissance & OSINT",
    description:
      "Performed passive reconnaissance to gather publicly available information about domains, DNS infrastructure, subdomains and exposed services.",
    tools: [
      "WHOIS",
      "nslookup",
      "dig",
      "DNSDumpster",
      "Shodan",
    ],
    evidence: [
      {
        src: "/evidence/05-passive-recon-dns-analysis.png",
        label: "DNS reconnaissance",
      },
    ],
  },

  {
    number: "05",
    category: "OFFENSIVE SECURITY",
    icon: Terminal,
    title: "Metasploit Exploitation Lab",
    description:
      "Practiced a controlled exploitation workflow in an authorized lab environment, covering service enumeration, exploit selection, payload configuration and session management.",
    tools: [
      "Kali Linux",
      "Metasploit",
      "msfconsole",
      "Meterpreter",
    ],
  },

  {
    number: "06",
    category: "WEB APPLICATION SECURITY",
    icon: Globe,
    title: "Web Application Security & SQL Injection",
    description:
      "Studied and practiced SQL injection techniques, authentication bypass concepts, query manipulation and defensive controls within controlled web security environments.",
    tools: [
      "SQL",
      "MySQL",
      "Burp Suite",
      "OWASP",
      "HTB",
    ],
  },

  {
    number: "07",
    category: "SYSTEMS SECURITY",
    icon: Server,
    title: "Windows & Linux Security Administration",
    description:
      "Built practical administration and security fundamentals across Windows and Linux environments, including permissions, services, processes, remote access and command-line administration.",
    tools: [
      "Windows",
      "Linux",
      "PowerShell",
      "Bash",
      "SSH",
      "RDP",
      "WSL",
    ],
  },

  {
    number: "08",
    category: "SECURITY AUTOMATION",
    icon: Code2,
    title: "Python for Cybersecurity & Automation",
    description:
      "Developed Python fundamentals with a focus on applying programming concepts to security-oriented scripting, automation, file handling and reusable functions.",
    tools: [
      "Python",
      "Requests",
      "Scapy",
      "Pwntools",
      "Automation",
    ],
  },
];

const personalProjects = [
  {
    category: "ONGOING · SECURITY LAB",
    icon: FlaskConical,
    title: "Cybersecurity Home Lab",
    description:
      "Building a virtual security environment using Windows and Linux systems to simulate enterprise security scenarios involving hardening, access control, attack simulation, monitoring, incident response and recovery.",
    tools: [
      "Windows",
      "Ubuntu",
      "Kali Linux",
      "VirtualBox",
      "VMware",
      "Wireshark",
      "Nmap",
      "Splunk",
    ],
  },

  {
  category: "COLLABORATIVE PROJECT · SOFTWARE",
  icon: Network,
  title: "KaziLink — Task Marketplace",
  description:
    "Collaborative project focused on building a Kenyan task marketplace connecting clients with taskers. I contributed to the project alongside the development team and gained practical exposure to the application's architecture, authentication, database design, payment integration, deployment and security considerations.",
  tools: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Paystack",
    "Vercel",
  ],
},
];

function EvidenceGallery({ evidence }) {
  if (!evidence || evidence.length === 0) {
    return null;
  }

  return (
    <div className="project-evidence-gallery">
      <div className="evidence-heading">
        <span>SELECTED EVIDENCE</span>
        <p>Practical work captured from the lab environment.</p>
      </div>

      <div className="evidence-grid">
        {evidence.map((item) => (
          <a
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-item"
            key={item.src}
          >
            <img src={item.src} alt={item.label} />
            <div className="evidence-caption">
              <span>{item.label}</span>
              <ArrowUpRight size={14} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function FeaturedProject({ project }) {
  const Icon = project.icon;

  return (
    <article className="featured-project">

      <div className="project-top">
        <span className="project-number">{project.number}</span>

        <span className="project-type">
          {project.category}
        </span>

        <span className="project-status">
          {project.status}
        </span>
      </div>

      <div className="project-heading">

        <div className="project-icon">
          <Icon size={27} />
        </div>

        <div>
          <h2>{project.title}</h2>

          <p>{project.summary}</p>
        </div>

      </div>

      <div className="project-details">

        <div className="project-detail">
          <h3>01 / PROBLEM</h3>
          <p>{project.problem}</p>
        </div>

        <div className="project-detail">
          <h3>02 / APPROACH</h3>
          <p>{project.approach}</p>
        </div>

        <div className="project-detail">
          <h3>03 / TOOLS</h3>

          <div className="project-tools">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="project-detail">
          <h3>04 / OUTCOME</h3>
          <p>{project.outcome}</p>
        </div>

      </div>

      <EvidenceGallery evidence={project.evidence} />

      {project.writeup && (
        <div className="project-actions">

          <a
            href={project.writeup}
            className="project-action primary"
          >
            <FileText size={15} />
            Read Technical Writeup
            <ArrowUpRight size={14} />
          </a>

        </div>
      )}

    </article>
  );
}

function TechnicalLab({ project }) {
  const Icon = project.icon;

  return (
    <article className="technical-lab">

      <div className="technical-lab-icon">
        <Icon size={21} />
      </div>

      <div className="technical-lab-content">

        <div className="technical-lab-meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <EvidenceGallery evidence={project.evidence} />

      </div>

      <ArrowUpRight
        className="technical-lab-arrow"
        size={17}
      />

    </article>
  );
}

function PersonalProject({ project }) {
  const Icon = project.icon;

  return (
    <article className="personal-project">

      <div className="personal-project-icon">
        <Icon size={22} />
      </div>

      <div className="personal-project-content">

        <span className="personal-project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

      </div>

    </article>
  );
}

function Projects() {
  return (
    <section className="projects-page">

      <header className="page-header">

        <p className="section-label">
          04 / PROJECTS & LABS
        </p>

        <h1>
          Work that
          <span> demonstrates capability.</span>
        </h1>

        <p>
          A selection of security assessments, technical labs and
          personal projects documenting how I approach problems,
          investigate systems and apply security concepts in practice.
        </p>

      </header>


      {/* FEATURED SECURITY WORK */}

      <div className="projects-container">

        <div className="projects-section-heading">
          <span>FEATURED SECURITY WORK</span>
          <p>
            Selected projects with documented methodology,
            outcomes and practical evidence.
          </p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <FeaturedProject
              project={project}
              key={project.title}
            />
          ))}
        </div>


        {/* TECHNICAL LABS */}

        <div className="projects-section-heading labs-heading">
          <span>TECHNICAL LABS</span>
          <p>
            Hands-on exercises covering offensive, defensive,
            network and systems security.
          </p>
        </div>

        <div className="technical-labs">
          {technicalLabs.map((project) => (
            <TechnicalLab
              project={project}
              key={project.title}
            />
          ))}
        </div>


        {/* PERSONAL / ONGOING */}

        <div className="projects-section-heading personal-heading">
          <span>PERSONAL & ONGOING</span>
          <p>
            Independent work demonstrating continuous technical
            development and practical engineering.
          </p>
        </div>

        <div className="personal-projects">
          {personalProjects.map((project) => (
            <PersonalProject
              project={project}
              key={project.title}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Projects;