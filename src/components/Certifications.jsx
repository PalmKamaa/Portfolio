import {
  Award,
  GraduationCap,
  CheckCircle2,
  Users,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "Security Analyst Certification",
    organization: "Cyber Shujaa · Cohort XII",
    date: "Issued 29 April 2026",
    status: "COMPLETED",
    result: "PASS",
    description:
      "Successfully completed the Cyber Shujaa Security Analyst Program, Cohort XII, with a Pass. The program developed practical competencies across web, systems and network security, vulnerability management, security monitoring and incident response through guided security labs and CTF exercises.",
    skills: [
      "Web Security",
      "Network Security",
      "Systems Security",
      "Vulnerability Management",
      "Incident Response",
      "Security Monitoring",
      "Threat Analysis",
      "CTF",
    ],
    certificateNo: "CS2026-JL2604270914451669",
    partners: "USIU-Africa · Serianu Ltd · Kenya Bankers Association",
    sponsor: "Challenge Fund for Youth Employment",
    certificateLink: "#",
  },
];

const memberships = [
  {
    title: "KCSFA Student Membership — 2025",
    organization:
      "Kenya Cyber Security and Forensics Association (KCSFA)",
    period: "January 2025 – December 2025",
    status: "2025 MEMBERSHIP",
    description:
      "Student membership in a professional cybersecurity and digital forensics community focused on knowledge sharing, professional development, cybersecurity awareness, networking and continuous learning.",
    membershipNo: "KCSFA/ST242M/2025",
  },
];

function Certifications() {
  return (
    <section className="certifications-page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <p className="section-label">
          06 / CERTIFICATIONS & EDUCATION
        </p>

        <h1>
          Credentials that
          <span> back the work.</span>
        </h1>

        <p>
          Professional certification, industry membership and
          academic foundations supporting my cybersecurity career.
        </p>

      </div>


      <div className="credentials-container">

        {/* CERTIFICATIONS */}

        <div className="credentials-section">

          <div className="credentials-heading">
            <Award size={20} />
            <h2>Certifications</h2>
          </div>


          <div className="certification-list">

            {certifications.map((cert) => (
              <article
                className="certification-card"
                key={cert.title}
              >

                <div className="certification-icon">
                  <Award size={24} />
                </div>


                <div className="certification-content">

                  <div className="certification-top">

                    <div>

                      <p className="certification-org">
                        {cert.organization}
                      </p>

                      <h3>
                        {cert.title}
                      </h3>

                      <p className="certification-date">
                        {cert.date}
                      </p>

                    </div>


                    <span className="credential-status completed">
                      <CheckCircle2 size={13} />
                      {cert.status}
                    </span>

                  </div>


                  <p className="certification-description">
                    {cert.description}
                  </p>


                  <div className="credential-skills">

                    {cert.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}

                  </div>


                  <div className="certification-details">

                    <div>
                      <span>RESULT</span>
                      <strong>{cert.result}</strong>
                    </div>

                    <div>
                      <span>CERTIFICATE NO.</span>
                      <strong>{cert.certificateNo}</strong>
                    </div>

                  </div>


                  <div className="certification-issuer">

                    <p>
                      <span>TRAINING PARTNERS</span>
                      {cert.partners}
                    </p>

                    <p>
                      <span>PROGRAM SPONSOR</span>
                      {cert.sponsor}
                    </p>

                  </div>


                  <div className="credential-footer">

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>


        {/* PROFESSIONAL MEMBERSHIP */}

        <div className="credentials-section">

          <div className="credentials-heading">
            <Users size={20} />
            <h2>Professional Memberships</h2>
          </div>


          <div className="membership-list">

            {memberships.map((membership) => (
              <article
                className="membership-card"
                key={membership.title}
              >

                <div className="membership-icon">
                  <Users size={24} />
                </div>


                <div className="membership-content">

                  <div className="membership-top">

                    <div>

                      <p className="certification-org">
                        {membership.organization}
                      </p>

                      <h3>
                        {membership.title}
                      </h3>

                      <p className="certification-date">
                        {membership.period}
                      </p>

                    </div>


                    <span className="credential-status membership">
                      {membership.status}
                    </span>

                  </div>


                  <p className="certification-description">
                    {membership.description}
                  </p>


                  <div className="membership-number">
                    Membership No:{" "}
                    <strong>
                      {membership.membershipNo}
                    </strong>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>


        {/* UNIVERSITY EDUCATION */}

        <div className="credentials-section">

          <div className="credentials-heading">
            <GraduationCap size={20} />
            <h2>Higher Education</h2>
          </div>


          <article className="education-card">

            <div className="education-icon">
              <GraduationCap size={26} />
            </div>


            <div>

              <p className="education-org">
                Jomo Kenyatta University of Agriculture
                and Technology
              </p>

              <h3>
                BSc Mathematics & Computer Science
              </h3>

              <p className="education-status">
                AWAITING GRADUATION
              </p>

              <p className="education-expected">
                Expected graduation: December 2026
              </p>

            </div>

          </article>

        </div>


        {/* SECONDARY EDUCATION */}

        <div className="credentials-section">

          <div className="credentials-heading">
            <GraduationCap size={20} />
            <h2>Secondary Education</h2>
          </div>


          <article className="education-card">

            <div className="education-icon">
              <GraduationCap size={26} />
            </div>


            <div>

              <p className="education-org">
                Kangema High School
              </p>

              <h3>
                The Kenya Certificate of Secondary Education
              </h3>

              <p className="education-status">
                KCSE
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>
  );
}

export default Certifications;