import {
  ShieldCheck,
  Network,
  Monitor,
  Wrench,
  Code2,
  Globe,
} from "lucide-react";

const skillGroups = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Security Operations",
    description:
      "Defensive security foundations developed through practical labs, training and security investigations.",
    skills: [
      "Security Monitoring",
      "Vulnerability Assessment",
      "Vulnerability Management",
      "Incident Response",
      "Threat Analysis",
      "System Hardening",
      "Security Documentation",
      "SOC Fundamentals",
    ],
  },

  {
    icon: Network,
    number: "02",
    title: "Network Security",
    description:
      "Networking fundamentals and practical troubleshooting across wired and wireless environments.",
    skills: [
      "TCP/IP",
      "OSI Model",
      "DNS",
      "DHCP",
      "Subnetting",
      "IP Addressing",
      "LAN Troubleshooting",
      "Routing & Switching",
      "Wireshark",
      "Nmap",
    ],
  },

  {
    icon: Monitor,
    number: "03",
    title: "Systems & Endpoint Security",
    description:
      "Practical exposure to Windows and Linux administration, endpoint protection and system security.",
    skills: [
      "Windows 10/11",
      "Windows Server",
      "Linux",
      "Ubuntu",
      "Kali Linux",
      "PowerShell",
      "Active Directory",
      "Windows Defender",
      "Windows Firewall",
      "System Hardening",
    ],
  },

  {
    icon: Wrench,
    number: "04",
    title: "Security Tools",
    description:
      "Hands-on exposure to tools used for network analysis, vulnerability assessment, web testing and security operations.",
    skills: [
      "Wireshark",
      "Nmap",
      "Nessus",
      "Burp Suite",
      "Metasploit",
      "Splunk",
      "Cisco Packet Tracer",
      "VirtualBox",
      "VMware",
    ],
  },

  {
    icon: Globe,
    number: "05",
    title: "Web & Application Security",
    description:
      "Security fundamentals covering common web vulnerabilities, authentication and application testing.",
    skills: [
      "OWASP Top 10",
      "SQL Injection",
      "Web Security Testing",
      "JWT",
      "Authentication",
      "Burp Suite",
      "HTTP / HTTPS",
      "API Security Fundamentals",
    ],
  },

  {
    icon: Code2,
    number: "06",
    title: "Programming & Automation",
    description:
      "Programming foundations used for technical problem solving, scripting and security-oriented automation.",
    skills: [
      "Python",
      "C++",
      "R",
      "Java",
      "JavaScript",
      "SQL",
      "Bash",
      "Git & GitHub",
    ],
  },
];

const platforms = [
  "TryHackMe",
  "Hack The Box",
  "LetsDefend",
];

function Skills() {
  return (
    <section className="skills-page">

      {/* HEADER */}

      <header className="page-header skills-page-header">

        <p className="section-label">
          03 / TECHNICAL SKILLS
        </p>

        <h1>
          Skills built through
          <span> practical work.</span>
        </h1>

        <p>
          A structured overview of the technologies, security concepts
          and technical capabilities I have developed through training,
          labs, projects and hands-on experience.
        </p>

      </header>


      {/* SKILL GROUPS */}

      <div className="skills-container">

        <div className="skills-section-heading">

          <div>
            <span>01</span>
            <h2>Technical capabilities.</h2>
          </div>

          <p>
            Grouped by the type of work rather than simply listing
            individual technologies.
          </p>

        </div>


        <div className="professional-skills-grid">

          {skillGroups.map((group) => {

            const Icon = group.icon;

            return (
              <article
                className="professional-skill-card"
                key={group.title}
              >

                <div className="professional-skill-top">

                  <div className="professional-skill-icon">
                    <Icon size={21} />
                  </div>

                  <span>
                    {group.number}
                  </span>

                </div>


                <h3>
                  {group.title}
                </h3>


                <p className="professional-skill-description">
                  {group.description}
                </p>


                <div className="professional-skill-list">

                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </article>
            );

          })}

        </div>


        {/* LEARNING PLATFORMS */}

        <section className="skills-platforms">

          <div className="skills-section-heading">

            <div>
              <span>02</span>
              <h2>Continuous learning.</h2>
            </div>

            <p>
              Platforms used for practical cybersecurity training,
              labs and security exercises.
            </p>

          </div>


          <div className="platform-tags">

            {platforms.map((platform) => (
              <span key={platform}>
                {platform}
              </span>
            ))}

          </div>

        </section>


        {/* DEVELOPMENT NOTE */}

        <section className="skills-note">

          <div className="skills-note-marker">
            //
          </div>

          <div>

            <h3>
              Skills are continuously developing.
            </h3>

            <p>
              My approach is to treat technical skills as capabilities
              that improve through repeated practice. I continue to
              develop these areas through security labs, technical
              projects, documentation and hands-on investigation.
            </p>

          </div>

        </section>

      </div>

    </section>
  );
}

export default Skills;