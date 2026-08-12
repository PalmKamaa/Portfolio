import {
  Mail,
  FileText,
  ExternalLink,
  Shield,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const platforms = [
  {
    name: "Hack The Box",
    label: "HTB",
    description: "Offensive security labs & technical practice",
    url: "https://profile.hackthebox.com/profile/019c4937-41d9-71f7-af34-41c62d2311ef",
    icon: Shield,
  },
  {
    name: "TryHackMe",
    label: "THM",
    description: "Hands-on cybersecurity learning",
    url: "https://tryhackme.com/p/palmkamauk",
    icon: Terminal,
  },
  {
    name: "LetsDefend",
    label: "SOC",
    description: "Blue Team & security operations practice",
    url: "https://app.letsdefend.io/user/PalmKamau",
    icon: Shield,
  },
];

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <p className="section-label">
          07 / CONTACT
        </p>

        <h1>
          Let's talk<span>.</span>
        </h1>

        <p>
          Whether you're looking for a cybersecurity professional,
          want to discuss a technical project, or simply want to
          connect, I'd be glad to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* EMAIL AND CV */}

        <div className="contact-primary">

          <div className="contact-email">

            <div className="contact-icon">
              <Mail size={21} />
            </div>

            <div>
              <span className="contact-label">
                PROFESSIONAL EMAIL
              </span>

              <a href="mailto:palmkamauk@gmail.com">
                palmkamauk@gmail.com
              </a>
            </div>

          </div>

          <a
            href="/Palm_Kamau_CV.pdf"
            download="Palm_Kamau_CV.pdf"
            className="cv-button"
          >
            <FileText size={19} />

            <div>
              <strong>Download my CV</strong>
              <span>PDF · Resume</span>
            </div>

            <ArrowUpRight size={17} />
          </a>

        </div>


        {/* PROFESSIONAL NETWORK */}

        <div className="contact-block">

          <div className="contact-block-header">

            <span className="contact-label">
              PROFESSIONAL NETWORK
            </span>

            <h2>Find me online</h2>

          </div>


          <div className="professional-links">

            <a
              href="https://www.linkedin.com/in/palm-kamau-90698b26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-link"
            >

              <div className="profile-symbol">
                in
              </div>

              <div>
                <span>LINKEDIN</span>
                <strong>Palm Kamau</strong>
              </div>

              <ExternalLink size={15} />

            </a>


            <a
              href="https://github.com/PalmKamaa"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-link"
            >

              <div className="profile-symbol">
                &lt;/&gt;
              </div>

              <div>
                <span>GITHUB</span>
                <strong>PalmKamaa</strong>
              </div>

              <ExternalLink size={15} />

            </a>

          </div>

        </div>


        {/* SECURITY PLATFORMS */}

        <div className="contact-block">

          <div className="contact-block-header">

            <span className="contact-label">
              SECURITY PLATFORMS
            </span>

            <h2>Where I practice</h2>

            <p>
              Hands-on labs, security exercises and continuous
              technical development.
            </p>

          </div>


          <div className="security-platforms">

            {platforms.map((platform) => {

              const Icon = platform.icon;

              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="security-platform"
                >

                  <div className="platform-symbol">
                    <Icon size={19} />
                  </div>

                  <div className="platform-details">

                    <div className="platform-name">

                      <strong>
                        {platform.name}
                      </strong>

                      <span>
                        {platform.label}
                      </span>

                    </div>

                    <p>
                      {platform.description}
                    </p>

                  </div>

                  <ArrowUpRight size={16} />

                </a>
              );

            })}

          </div>

        </div>


        {/* CONTACT FOOTER */}

        <div className="contact-footer">

          <div className="contact-line" />

          <p>
            DEFEND · DETECT · RESPOND
          </p>

          <span>
            Cybersecurity · Security Operations · Technical Learning
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;