import {
  ShieldCheck,
  Network,
  Terminal,
  Search,
  Target,
} from "lucide-react";

const strengths = [
  {
    icon: ShieldCheck,
    title: "Security Operations",
    text: "Building practical capability across security monitoring, vulnerability assessment, incident response and endpoint security.",
  },
  {
    icon: Network,
    title: "Networking & Systems",
    text: "Hands-on exposure to TCP/IP, network troubleshooting, Windows, Linux, services, permissions and system administration.",
  },
  {
    icon: Search,
    title: "Security Investigation",
    text: "Approaching security problems through reconnaissance, threat intelligence, log analysis and structured technical investigation.",
  },
];

function About() {
  return (
    <section id="about" className="about-page">

      <header className="page-header about-page-header">
        <p className="section-label">02 / ABOUT</p>

        <h1>
          Security-minded.
          <span> Always learning.</span>
        </h1>

        <p>
          I'm Palm Kinuthia Kamau, an aspiring cybersecurity professional
          building practical experience across security operations,
          networking, endpoint security and technical investigation.
        </p>
      </header>


      <div className="about-container">

        {/* INTRODUCTION */}

        <section className="about-introduction">

          <div className="about-intro-label">
            <span>01</span>
            <span>PROFILE</span>
          </div>

          <div className="about-intro-content">

            <p className="about-lead">
              I learn cybersecurity by doing — building labs,
              investigating systems, working through security
              challenges and documenting what I discover.
            </p>

            <p>
              My background in Mathematics and Computer Science has
              given me a strong foundation in analytical thinking,
              programming and problem solving. I have complemented
              that foundation with practical cybersecurity training,
              security labs and hands-on technical work.
            </p>

            <p>
              My current focus is developing toward security operations
              and defensive security roles, particularly areas involving
              monitoring, vulnerability management, endpoint security,
              incident investigation and technical analysis.
            </p>

          </div>

        </section>


        {/* STRENGTHS */}

        <section className="about-strengths">

          <div className="about-section-heading">

            <div>
              <span>02</span>
              <h2>What I bring.</h2>
            </div>

            <p>
              Practical foundations backed by continuous technical
              learning and hands-on experimentation.
            </p>

          </div>


          <div className="strength-grid">

            {strengths.map((item) => {

              const Icon = item.icon;

              return (
                <article className="strength-card" key={item.title}>

                  <div className="strength-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                </article>
              );

            })}

          </div>

        </section>


        {/* APPROACH */}

        <section className="about-approach">

          <div className="about-section-heading">

            <div>
              <span>03</span>
              <h2>How I approach security.</h2>
            </div>

          </div>


          <div className="approach-grid">

            <div className="approach-item">

              <Target size={19} />

              <div>
                <h3>Understand the environment</h3>
                <p>
                  Identify systems, services, users, assets and
                  potential attack surfaces before making assumptions.
                </p>
              </div>

            </div>


            <div className="approach-item">

              <Search size={19} />

              <div>
                <h3>Investigate methodically</h3>
                <p>
                  Gather evidence, test hypotheses and use technical
                  findings to understand what is actually happening.
                </p>
              </div>

            </div>


            <div className="approach-item">

              <ShieldCheck size={19} />

              <div>
                <h3>Document & improve</h3>
                <p>
                  Record findings clearly, identify improvements and
                  use each exercise to strengthen the next one.
                </p>
              </div>

            </div>


            <div className="approach-item">

              <Terminal size={19} />

              <div>
                <h3>Keep building</h3>
                <p>
                  Continue developing through labs, technical
                  projects, security platforms and practical research.
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>

    </section>
  );
}

export default About;