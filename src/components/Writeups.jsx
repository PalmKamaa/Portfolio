import {
  ArrowUpRight,
  Shield,
  Search,
} from "lucide-react";

import { Link } from "react-router-dom";


const writeups = [
  {
    number: "01",
    category: "WINDOWS SECURITY",
    title: "Windows Security Hardening",

    description:
      "A practical examination of Windows endpoint hardening focused on reducing attack surface, strengthening access controls, securing network exposure, improving endpoint protection and increasing visibility through security logging.",

    tags: [
      "Windows",
      "Endpoint Security",
      "System Hardening",
      "Access Control",
      "Firewall",
      "Security Logging",
    ],

    icon: Shield,
    status: "PUBLISHED",

    path: "/writeups/windows-security-hardening",
  },


  {
    number: "02",
    category: "NETWORK TRAFFIC INVESTIGATION",
    title: "Carnage — Network Traffic Incident Investigation",

    description:
      "A PCAP-based incident investigation using Wireshark to reconstruct a suspected workstation compromise, identify malicious file delivery, trace suspicious infrastructure and extract actionable indicators of compromise.",

    tags: [
      "Wireshark",
      "PCAP Analysis",
      "Incident Response",
      "C2 Detection",
      "IOC Analysis",
    ],

    icon: Search,
    status: "PUBLISHED",

    path: "/writeups/carnage-network-investigation",
  },
  {
  number: "03",
  category: "WINDOWS INCIDENT RESPONSE",
  title: "Investigating a Compromised Windows Server",
  description:
    "A host-based incident investigation reconstructing attacker activity through Windows accounts, scheduled tasks, security events, credential-access artifacts, hosts-file manipulation, IIS content and firewall configuration.",
  tags: [
    "Windows",
    "Incident Response",
    "Digital Forensics",
    "PowerShell",
    "IOC Analysis",
    "Persistence",
  ],
  icon: Search,
  status: "PUBLISHED",
  path: "/writeups/investigating-windows",
},
];


function Writeups() {
  return (
    <section className="writeups-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="page-header">

        <p className="section-label">
          05 / TECHNICAL WRITEUPS
        </p>

        <h1>
          Learn it.
          <span> Document it.</span>
        </h1>

        <p>
          Technical investigations, security notes and practical
          lessons documented from hands-on learning, laboratory
          exercises and cybersecurity work.
        </p>

      </div>


      {/* =========================
          WRITEUPS
      ========================= */}

      <div className="writeups-container">

        {writeups.map((writeup) => {

          const Icon = writeup.icon;

          return (
            <article
              className="writeup-card"
              key={writeup.title}
            >

              {/* NUMBER */}

              <div className="writeup-number">
                {writeup.number}
              </div>


              {/* ICON */}

              <div className="writeup-icon">
                <Icon size={24} />
              </div>


              {/* CONTENT */}

              <div className="writeup-content">

                <div className="writeup-meta">

                  <span>
                    {writeup.category}
                  </span>

                  <span className="writeup-status">
                    {writeup.status}
                  </span>

                </div>


                <h2>
                  {writeup.title}
                </h2>


                <p>
                  {writeup.description}
                </p>


                <div className="writeup-tags">

                  {writeup.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                <Link
                  to={writeup.path}
                  className="writeup-link"
                >
                  Read Technical Writeup
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </article>
          );

        })}

      </div>

    </section>
  );
}


export default Writeups;