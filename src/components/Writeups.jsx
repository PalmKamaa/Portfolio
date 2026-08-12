import {
  ArrowUpRight,
  Shield,
  Network,
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
    category: "NETWORK SECURITY",
    title: "Network Traffic Analysis with Wireshark",
    description:
      "A practical investigation into network traffic using packet capture and analysis techniques to understand communication patterns, inspect protocols and identify potentially suspicious activity.",
    tags: [
      "Wireshark",
      "TCP/IP",
      "Packet Analysis",
      "Network Security",
    ],
    icon: Network,
    status: "COMING SOON",
  },
];


function Writeups() {
  return (
    <section className="writeups-page">

      {/* HEADER */}

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


      {/* WRITEUPS */}

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


                {writeup.status === "PUBLISHED" ? (

                  <Link
                    to={writeup.path}
                    className="writeup-link"
                  >
                    Read Technical Writeup
                    <ArrowUpRight size={16} />
                  </Link>

                ) : (

                  <span className="writeup-coming">
                    Documentation in progress
                  </span>

                )}

              </div>

            </article>
          );

        })}

      </div>

    </section>
  );
}


export default Writeups;