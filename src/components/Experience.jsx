import {
  Briefcase,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Network,
  Monitor,
} from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="experience-page">

      <div className="experience-header">

        <p className="section-label">
          EXPERIENCE
        </p>

        <h1>
          Where I've
          <span> worked.</span>
        </h1>

        <p className="experience-intro">
          Practical experience across ICT support, systems,
          networking and technical operations.
        </p>

      </div>


      <div className="experience-container">

        {/* KALRO */}

        <article className="experience-card">

          <div className="experience-marker">
            <Briefcase size={20} />
          </div>


          <div className="experience-content">

            <div className="experience-top">

              <div>

                <p className="experience-type">
                  ICT / TECHNICAL SUPPORT
                </p>

                <h2>
                  ICT Support Intern
                </h2>

                <p className="company">
                  Kenya Agricultural & Livestock
                  Research Organization
                </p>

              </div>


              <div className="experience-date">

                <CalendarDays size={14} />

                <span>
                  Jun 2024 – Aug 2024
                </span>

              </div>

            </div>


            <div className="experience-location">

              <MapPin size={13} />

              <span>
                KALRO HRI, Kandara
              </span>

            </div>


            <div className="experience-divider" />


            <div className="experience-label">
              TECHNICAL CONTRIBUTIONS
            </div>


            <ul>

              <li>
                Provided technical support for hardware,
                software and network-related issues across
                Windows and Linux environments.
              </li>

              <li>
                Troubleshot LAN connectivity issues including
                IP conflicts, network access problems and
                general connectivity faults.
              </li>

              <li>
                Installed and configured operating systems,
                applications, antivirus software and endpoint
                devices.
              </li>

              <li>
                Assisted with router, switch and wireless
                access point configuration and troubleshooting.
              </li>

              <li>
                Supported hardware maintenance, upgrades and
                technical documentation.
              </li>

            </ul>


            {/* TECHNICAL EXPOSURE */}

            <div className="experience-divider" />

            <div className="experience-label">
              TECHNICAL EXPOSURE
            </div>


            <div className="experience-exposure">

              <div className="exposure-item">
                <div className="exposure-icon">
                  <Monitor size={16} />
                </div>

                <div>
                  <strong>
                    Systems
                  </strong>

                  <span>
                    Windows · Linux · Endpoint Support
                  </span>
                </div>
              </div>


              <div className="exposure-item">
                <div className="exposure-icon">
                  <Network size={16} />
                </div>

                <div>
                  <strong>
                    Networking
                  </strong>

                  <span>
                    LAN · IP Troubleshooting · Network Devices
                  </span>
                </div>
              </div>


              <div className="exposure-item">
                <div className="exposure-icon">
                  <ShieldCheck size={16} />
                </div>

                <div>
                  <strong>
                    Security
                  </strong>

                  <span>
                    Endpoint Protection · Antivirus · Secure Configuration
                  </span>
                </div>
              </div>

            </div>

          </div>

        </article>


        {/* PROFESSIONAL DEVELOPMENT */}

        <section className="experience-development">

          <div className="development-marker">
            //
          </div>

          <div>

            <p className="experience-label">
              PROFESSIONAL DEVELOPMENT
            </p>

            <h2>
              Building toward cybersecurity.
            </h2>

            <p>
              Alongside professional experience, I have continued
              developing practical cybersecurity capabilities through
              structured training, security labs, CTF exercises and
              independent technical projects.
            </p>

            <div className="development-tags">

              <span>
                Cyber Shujaa
              </span>

              <span>
                TryHackMe
              </span>

              <span>
                Hack The Box
              </span>

              <span>
                LetsDefend
              </span>

              <span>
                Security Labs
              </span>

            </div>

          </div>

        </section>

      </div>

    </section>
  );
}

export default Experience;