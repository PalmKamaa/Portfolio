import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import writeup from "../Writeups/windows-security-hardening.md?raw";

function WindowsSecurityHardening() {
  return (
    <section className="writeup-page">

      <div className="writeup-article">

        <Link to="/writeups" className="back-link">
          <ArrowLeft size={16} />
          Back to Writeups
        </Link>

        <ReactMarkdown>
          {writeup}
        </ReactMarkdown>

      </div>

    </section>
  );
}

export default WindowsSecurityHardening;
