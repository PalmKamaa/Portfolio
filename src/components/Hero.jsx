import { ArrowRight, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="status">
          <span className="status-dot"></span>
          Available for cybersecurity opportunities
        </div>

        <p className="hero-label">
          CYBERSECURITY ANALYST
        </p>

        <h1>
          Palm Kinuthia
          <span> Kamau</span>
        </h1>

        <p className="hero-description">
          Security-focused professional building practical
          experience across security operations, endpoint security,
          networking, and technical security investigation.
        </p>

        <div className="hero-buttons">

          <a
            href="/projects"
            className="primary-button"
          >
            <ShieldCheck size={17} />
            View My Work
            <ArrowRight size={16} />
          </a>

          <a
            href="/Palm_K_Kamau_CV.pdf"
            className="secondary-button"
            download
          >
            Download CV
          </a>

        </div>

      </div>


      <div className="hero-meta">

        <span>
          SECURITY OPERATIONS
        </span>

        <span>
          ENDPOINT SECURITY
        </span>

        <span>
          NETWORK SECURITY
        </span>

      </div>

    </section>
  );
}

export default Hero;