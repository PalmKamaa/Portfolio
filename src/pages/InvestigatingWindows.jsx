import {
  ArrowLeft,
  ArrowUpRight,
  Shield,
  Search,
  Clock3,
  UserCog,
  Terminal,
  KeyRound,
  Globe,
  Server,
  Network,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

function EvidenceFigure({ src, title, description }) {
  return (
    <figure className="evidence-figure">
      <div className="evidence-image-wrapper">
        <img
          src={src}
          alt={title}
          loading="lazy"
        />
      </div>

      <figcaption>
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}

function InvestigatingWindows() {
  return (
    <section className="investigation-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="investigation-hero">

        <Link
          to="/writeups"
          className="back-link"
        >
          <ArrowLeft size={15} />
          Back to Writeups
        </Link>

        <p className="section-label">
          WINDOWS INCIDENT RESPONSE
        </p>

        <h1>
          Investigating
          <span> Windows.</span>
        </h1>

        <p className="investigation-intro">
          A host-based incident investigation of a compromised
          Windows Server 2016 system, reconstructing attacker
          activity through accounts, scheduled tasks, security
          events, credential-access artifacts, hosts-file
          manipulation, IIS content and firewall configuration.
        </p>


        <div className="investigation-meta">

          <div>
            <span>CASE</span>
            <strong>Windows Host Investigation</strong>
          </div>

          <div>
            <span>ENVIRONMENT</span>
            <strong>Windows Server 2016</strong>
          </div>

          <div>
            <span>PRIMARY FOCUS</span>
            <strong>Host-Based Incident Response</strong>
          </div>

        </div>

      </div>


      {/* =====================================================
          EXECUTIVE SUMMARY
      ===================================================== */}

      <article className="investigation-article">

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Shield size={20} />
            </div>

            <div>
              <p className="investigation-label">
                01 / EXECUTIVE SUMMARY
              </p>

              <h2>
                A compromised Windows host with
                <span> multiple attack indicators.</span>
              </h2>
            </div>

          </div>


          <p>
            The investigated Windows Server 2016 host showed multiple
            indicators of compromise rather than a single isolated
            anomaly. Evidence included unexpected administrative
            accounts, a suspicious scheduled task, credential-dumping
            artifacts, hosts-file manipulation, a JSP artifact in the
            IIS web root and an inbound firewall rule allowing TCP/1337.
          </p>


          <p>
            The strongest temporal marker identified during the
            investigation was Windows Security Event ID 4672 at
            <strong> 03/02/2019 04:04:49 PM</strong>, indicating that
            special privileges were assigned to a new logon.
          </p>


          <div className="investigation-callout">

            <AlertTriangle size={18} />

            <div>
              <strong>Assessment</strong>

              <p>
                The host should be treated as compromised. In a real
                environment, the appropriate response would include
                isolation, evidence preservation, credential remediation,
                investigation of persistence mechanisms and rebuilding
                the system from a known-good image.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            SCOPE
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Search size={20} />
            </div>

            <div>
              <p className="investigation-label">
                02 / SCOPE & EVIDENCE
              </p>

              <h2>
                Investigating the host from
                <span> the evidence outward.</span>
              </h2>
            </div>

          </div>


          <p>
            The objective was to investigate a previously compromised
            Windows Server and reconstruct attacker activity using
            host-based evidence. The system was accessed through RDP
            from a Linux virtual machine, allowing the investigation
            to use PowerShell, Command Prompt, Event Viewer, Task
            Scheduler, the Windows filesystem and Windows Firewall.
          </p>


          <div className="investigation-grid">

            <div className="investigation-card">
              <Terminal size={19} />

              <div>
                <h3>PowerShell & Command Prompt</h3>
                <p>
                  Used to enumerate users, scheduled tasks,
                  filesystem artifacts and system configuration.
                </p>
              </div>
            </div>


            <div className="investigation-card">
              <Clock3 size={19} />

              <div>
                <h3>Windows Security Logs</h3>
                <p>
                  Reviewed for privileged logon activity,
                  particularly Event ID 4672.
                </p>
              </div>
            </div>


            <div className="investigation-card">
              <Server size={19} />

              <div>
                <h3>IIS Web Root</h3>
                <p>
                  Examined C:\inetpub\wwwroot for suspicious
                  server-side web content.
                </p>
              </div>
            </div>


            <div className="investigation-card">
              <Network size={19} />

              <div>
                <h3>Windows Firewall</h3>
                <p>
                  Reviewed inbound rules for unexpected
                  network access paths.
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* =====================================================
            METHODOLOGY
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Search size={20} />
            </div>

            <div>
              <p className="investigation-label">
                03 / INVESTIGATION METHODOLOGY
              </p>

              <h2>
                Each finding became the
                <span> next pivot.</span>
              </h2>
            </div>

          </div>


          <p>
            I approached the machine as an investigation rather than
            attempting to answer individual questions in isolation.
            Broad system information was used to establish context,
            after which suspicious findings were used to determine
            where to pivot next.
          </p>


          <ol className="investigation-steps">

            <li>
              <strong>Identify the host</strong>
              <span>
                Establish the Windows version and system details.
              </span>
            </li>

            <li>
              <strong>Review accounts and privileges</strong>
              <span>
                Identify unexpected local users and administrator
                group membership.
              </span>
            </li>

            <li>
              <strong>Inspect startup activity</strong>
              <span>
                Look for suspicious connections initiated during
                system startup.
              </span>
            </li>

            <li>
              <strong>Investigate scheduled tasks</strong>
              <span>
                Identify persistence mechanisms and inspect their
                configured actions.
              </span>
            </li>

            <li>
              <strong>Build the timeline</strong>
              <span>
                Correlate user activity with Windows Security events.
              </span>
            </li>

            <li>
              <strong>Investigate credential access</strong>
              <span>
                Examine suspicious files and Mimikatz artifacts.
              </span>
            </li>

            <li>
              <strong>Inspect network-related artifacts</strong>
              <span>
                Review the hosts file, IIS web root and firewall rules.
              </span>
            </li>

          </ol>

        </section>


        {/* =====================================================
            ACCOUNTS
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <UserCog size={20} />
            </div>

            <div>
              <p className="investigation-label">
                04 / ACCOUNT INVESTIGATION
              </p>

              <h2>
                Unexpected privileged
                <span> accounts.</span>
              </h2>
            </div>

          </div>


          <p>
            The local Administrators group was examined to determine
            whether unexpected accounts had been granted elevated
            privileges. In addition to the expected Administrator
            account, both <strong>Guest</strong> and
            <strong> Jenny</strong> were present in the group.
          </p>

          <div className="finding-card">

            <div className="finding-status">
              <AlertTriangle size={18} />
              Suspicious privilege assignment
            </div>

            <div className="finding-details">

              <div>
                <span>ACCOUNT</span>
                <strong>Jenny</strong>
              </div>

              <div>
                <span>PRIVILEGE</span>
                <strong>Administrator</strong>
              </div>

              <div>
                <span>LOGON HISTORY</span>
                <strong>Never logged on</strong>
              </div>

            </div>

          </div>


          <p>
            The account list alone was not treated as proof of
            compromise. The account information was instead correlated
            with creation and logon information to determine whether
            the accounts fit the wider incident timeline.
          </p>
          <EvidenceFigure
             src="/windows-investigation/01-administrators-group.png"
             title="Evidence — Local Administrators Group"
             description="The Administrators group contained the expected Administrator account alongside Guest and Jenny."
          />

        </section>


        {/* =====================================================
            SCHEDULED TASK
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Terminal size={20} />
            </div>

            <div>
              <p className="investigation-label">
                05 / PERSISTENCE
              </p>

              <h2>
                A harmless task name hiding
                <span> a network listener.</span>
              </h2>
            </div>

          </div>


          <p>
            Scheduled tasks became the most useful pivot during the
            investigation. One task named
            <strong> Clean file system</strong> initially appeared
            consistent with routine maintenance.
          </p>

          <p>
            Inspection of the task action revealed that it launched:
          </p>


          <div className="code-evidence">
            C:\TMP\nc.ps1 -l 1348
          </div>


          <p>
            The <strong>-l</strong> argument indicated listening mode,
            meaning the script was configured to wait for a connection
            on local port <strong>1348</strong>. The important finding
            was therefore not the task name, but the action configured
            behind it.
          </p>

          <EvidenceFigure
             src="/windows-investigation/02-scheduled-task.png"
             title="Evidence — Suspicious Scheduled Task"
             description={"The Clean file system task was configured to launch C:\\TMP\\nc.ps1 with the -l 1348 argument."}
          />

          <div className="investigation-callout">

            <Terminal size={18} />

            <div>
              <strong>Persistence indicator</strong>

              <p>
                A recurring scheduled task launched a network-listening
                PowerShell script from a temporary directory, providing
                a strong indication of malicious persistence and
                remote-access capability.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Clock3 size={20} />
            </div>

            <div>
              <p className="investigation-label">
                06 / TIMELINE
              </p>

              <h2>
                Establishing the
                <span> compromise window.</span>
              </h2>
            </div>

          </div>


          <p>
            The suspicious account and scheduled-task activity pointed
            to <strong>03/02/2019</strong> as the primary compromise
            date. Windows Security Event ID 4672 was then used to
            narrow the timeline further.
          </p>


          <div className="timeline">

            <div className="timeline-item">

              <span className="timeline-time">
                04:04:49 PM
              </span>

              <div>
                <strong>
                  Event ID 4672
                </strong>

                <p>
                  Special privileges were assigned to a new logon.
                  This was the earliest identified privileged-logon
                  event.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-time">
                03/02/2019
              </span>

              <div>
                <strong>
                  Scheduled-task activity
                </strong>

                <p>
                  The suspicious Clean file system task was configured
                  to launch C:\TMP\nc.ps1 with the -l 1348 argument.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-time">
                03/02/2019
              </span>

              <div>
                <strong>
                  Credential-access artifacts
                </strong>

                <p>
                  Mimikatz output was identified within C:\TMP.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-time">
                03/02/2019
              </span>

              <div>
                <strong>
                  Network and web artifacts
                </strong>

                <p>
                  Hosts-file manipulation, a suspicious JSP artifact
                  and an inbound TCP/1337 firewall rule were identified.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-time">
                05:48:32 PM
              </span>

              <div>
                <strong>
                  John's last logon
                </strong>

                <p>
                  Used as an additional legitimate-user timeline marker.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CREDENTIAL ACCESS
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <KeyRound size={20} />
            </div>

            <div>
              <p className="investigation-label">
                07 / CREDENTIAL ACCESS
              </p>

              <h2>
                Evidence of
                <span> credential dumping.</span>
              </h2>
            </div>

          </div>


          <p>
            Investigation of the C:\TMP directory identified
            <strong> mim-out.txt</strong>. Opening the file revealed
            Mimikatz 2.0 alpha output and the command:
          </p>


          <div className="code-evidence">
            sekurlsa::logonpasswords
          </div>


          <p>
            The output contained authentication information associated
            with the user <strong>Jon</strong>, providing direct
            evidence that credential-dumping tooling had been executed
            on the system.
          </p>

          <EvidenceFigure
              src="/windows-investigation/03-mimikatz.png"
              title="Evidence — Mimikatz Credential Dumping"
             description={"Mimikatz output was recovered from C:\\TMP, including the sekurlsa::logonpasswords command."}
          />

          <div className="finding-card">

            <div className="finding-status">
              <KeyRound size={18} />
              Credential-access indicator
            </div>

            <div className="finding-details">

              <div>
                <span>TOOL</span>
                <strong>Mimikatz</strong>
              </div>

              <div>
                <span>ARTIFACT</span>
                <strong>mim-out.txt</strong>
              </div>

              <div>
                <span>COMMAND</span>
                <strong>sekurlsa::logonpasswords</strong>
              </div>

            </div>

          </div>


          <p>
            This establishes credential-access activity, but does not
            by itself prove exactly which credentials were successfully
            used afterward.
          </p>

        </section>


        {/* =====================================================
            HOSTS FILE
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Globe size={20} />
            </div>

            <div>
              <p className="investigation-label">
                08 / NETWORK MANIPULATION
              </p>

              <h2>
                Hosts-file manipulation and
                <span> external infrastructure.</span>
              </h2>
            </div>

          </div>


          <p>
            The Windows hosts file was inspected for unusual local
            name-resolution entries. One significant entry redirected
            <strong> google.com</strong> to:
          </p>


          <div className="code-evidence">
            76.32.97.132
          </div>


          <p>
            The address matched the external infrastructure identified
            elsewhere in the investigation. This made the hosts-file
            modification a relevant indicator of local name-resolution
            manipulation and a potential command-and-control component.
          </p>


          <div className="indicator-row">

            <div>
              <span>DOMAIN</span>
              <strong>google.com</strong>
            </div>

            <ArrowUpRight size={17} />

            <div>
              <span>REDIRECT TARGET</span>
              <strong>76.32.97.132</strong>
            </div>

          </div>

          <EvidenceFigure
             src="/windows-investigation/04-hosts-file.png"
              title="Evidence — Hosts-File Manipulation"
             description="The Windows hosts file redirected google.com to 76.32.97.132."
          />

        </section>


        {/* =====================================================
            WEB SHELL
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Server size={20} />
            </div>

            <div>
              <p className="investigation-label">
                09 / WEB SHELL INVESTIGATION
              </p>

              <h2>
                Suspicious content inside the
                <span> IIS web root.</span>
              </h2>
            </div>

          </div>


          <p>
            The investigation then pivoted to the web server. The
            directory <strong>C:\inetpub\wwwroot</strong> was examined
            for suspicious server-side content.
          </p>


          <p>
            Several JSP files were present, including one named
            <strong> shell</strong>. Its filename, location within the
            web root and server-side JSP extension made it suspicious
            and warranted investigation as a potential web-shell
            artifact.
          </p>


          <div className="investigation-callout">

            <Server size={18} />

            <div>
              <strong>Evidence boundary</strong>

              <p>
                The artifact establishes the presence of shell-related
                content in the web root. Additional IIS access logs
                would be required to determine exactly when it was
                accessed and by whom.
              </p>
            </div>

          </div>

          <EvidenceFigure
             src="/windows-investigation/05-iis-web-root.png"
             title="Evidence — IIS Web Root"
             description="The IIS web root contained JSP content including a suspicious shell artifact."
          />

        </section>


        {/* =====================================================
            FIREWALL
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Network size={20} />
            </div>

            <div>
              <p className="investigation-label">
                10 / FIREWALL & NETWORK ACCESS
              </p>

              <h2>
                An additional inbound
                <span> access path.</span>
              </h2>
            </div>

          </div>


          <p>
            Windows Firewall with Advanced Security was reviewed with
            a focus on inbound rules that did not fit expected system
            behaviour.
          </p>


          <div className="code-evidence">
            TCP / 1337
          </div>


          <p>
            The investigation identified an inbound firewall rule
            allowing TCP traffic on port <strong>1337</strong>. This
            provided an additional potential remote-access path and
            demonstrated why host-based network controls were included
            in the investigation.
          </p>


          <p>
            The firewall rule proves that inbound traffic on the port
            was allowed by the rule; it does not by itself prove that
            an attacker successfully connected through the port.
          </p>

          <EvidenceFigure
             src="/windows-investigation/06-firewall-rule.png"
             title="Evidence — Windows Firewall Rule"
            description="Windows Firewall with Advanced Security showed an inbound rule allowing TCP traffic on port 1337."
          />

        </section>


        {/* =====================================================
            IOCS
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <AlertTriangle size={20} />
            </div>

            <div>
              <p className="investigation-label">
                11 / INDICATORS OF COMPROMISE
              </p>

              <h2>
                Evidence that can be
                <span> searched and correlated.</span>
              </h2>
            </div>

          </div>


          <div className="ioc-grid">

            <div className="ioc-item">
              <span>IP</span>
              <strong>10.34.2.3</strong>
              <p>Startup connection identified on the host.</p>
            </div>

            <div className="ioc-item">
              <span>IP</span>
              <strong>76.32.97.132</strong>
              <p>External infrastructure and hosts-file target.</p>
            </div>

            <div className="ioc-item">
              <span>FILE</span>
              <strong>C:\TMP\nc.ps1</strong>
              <p>Script launched by the suspicious scheduled task.</p>
            </div>

            <div className="ioc-item">
              <span>TASK</span>
              <strong>Clean file system</strong>
              <p>Scheduled task associated with persistence.</p>
            </div>

            <div className="ioc-item">
              <span>FILE</span>
              <strong>mim-out.txt</strong>
              <p>Observed Mimikatz output.</p>
            </div>

            <div className="ioc-item">
              <span>TOOL</span>
              <strong>Mimikatz</strong>
              <p>Credential-dumping activity.</p>
            </div>

            <div className="ioc-item">
              <span>PORT</span>
              <strong>1348</strong>
              <p>Local listener configured by nc.ps1.</p>
            </div>

            <div className="ioc-item">
              <span>PORT</span>
              <strong>1337</strong>
              <p>Inbound TCP traffic allowed by firewall rule.</p>
            </div>

            <div className="ioc-item">
              <span>WEB</span>
              <strong>*.jsp</strong>
              <p>Suspicious JSP content under the IIS web root.</p>
            </div>

            <div className="ioc-item">
              <span>ACCOUNT</span>
              <strong>Jenny</strong>
              <p>Administrator-group member with no recorded logon.</p>
            </div>

            <div className="ioc-item">
              <span>ACCOUNT</span>
              <strong>Guest</strong>
              <p>Unexpected member of the Administrators group.</p>
            </div>

            <div className="ioc-item">
              <span>EVENT</span>
              <strong>4672</strong>
              <p>Special privileges assigned to a new logon.</p>
            </div>

          </div>

        </section>


        {/* =====================================================
            LIMITATIONS
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <AlertTriangle size={20} />
            </div>

            <div>
              <p className="investigation-label">
                12 / EVIDENCE LIMITATIONS
              </p>

              <h2>
                What the investigation
                <span> could not prove.</span>
              </h2>
            </div>

          </div>


          <p>
            A professional investigation must distinguish observed
            evidence from conclusions that remain inferential.
            Several findings therefore have important limitations.
          </p>


          <ul className="limitations-list">

            <li>
              <CheckCircle2 size={17} />
              <span>
                The scheduled task proves what action it was configured
                to perform, but does not independently prove every
                successful execution.
              </span>
            </li>

            <li>
              <CheckCircle2 size={17} />
              <span>
                Mimikatz evidence demonstrates credential-access
                activity, but does not establish exactly which
                credentials were subsequently used.
              </span>
            </li>

            <li>
              <CheckCircle2 size={17} />
              <span>
                The hosts-file modification proves local redirection,
                but does not reconstruct every external C2 session.
              </span>
            </li>

            <li>
              <CheckCircle2 size={17} />
              <span>
                The JSP artifact establishes suspicious shell-related
                content, but IIS logs would be required to determine
                when it was accessed and by whom.
              </span>
            </li>

            <li>
              <CheckCircle2 size={17} />
              <span>
                The firewall rule proves that TCP/1337 was permitted,
                but does not prove that an attacker successfully
                connected through it.
              </span>
            </li>

            <li>
              <CheckCircle2 size={17} />
              <span>
                No complete memory image, packet capture, enterprise
                authentication logs or full disk image were available,
                leaving some parts of the attack chain inferential.
              </span>
            </li>

          </ul>

        </section>


        {/* =====================================================
            RESPONSE
        ===================================================== */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Shield size={20} />
            </div>

            <div>
              <p className="investigation-label">
                13 / CONTAINMENT & RESPONSE
              </p>

              <h2>
                What should happen
                <span> next?</span>
              </h2>
            </div>

          </div>


          <div className="response-grid">

            <div className="response-item">
              <span>01</span>
              <div>
                <h3>Isolate</h3>
                <p>
                  Remove the affected host from the network while
                  preserving relevant evidence.
                </p>
              </div>
            </div>

            <div className="response-item">
              <span>02</span>
              <div>
                <h3>Protect credentials</h3>
                <p>
                  Reset credentials potentially exposed through
                  credential-dumping activity and revoke active sessions.
                </p>
              </div>
            </div>

            <div className="response-item">
              <span>03</span>
              <div>
                <h3>Remove persistence</h3>
                <p>
                  Preserve and investigate suspicious scheduled tasks,
                  accounts and other persistence mechanisms.
                </p>
              </div>
            </div>

            <div className="response-item">
              <span>04</span>
              <div>
                <h3>Investigate infrastructure</h3>
                <p>
                  Block or investigate 76.32.97.132 and search other
                  systems for the identified indicators.
                </p>
              </div>
            </div>

            <div className="response-item">
              <span>05</span>
              <div>
                <h3>Review web activity</h3>
                <p>
                  Preserve and investigate the JSP files and relevant
                  IIS access logs.
                </p>
              </div>
            </div>

            <div className="response-item">
              <span>06</span>
              <div>
                <h3>Rebuild</h3>
                <p>
                  Rebuild the compromised system from a known-good
                  image once evidence collection is complete.
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL ASSESSMENT
        ===================================================== */}

        <section className="final-assessment">

          <p className="section-label">
            FINAL ASSESSMENT
          </p>

          <h2>
            The evidence supports
            <span> compromise.</span>
          </h2>


          <p>
            The investigation identified multiple independent artifacts
            pointing toward compromise: unexpected administrative
            accounts, malicious scheduled-task configuration,
            credential-dumping activity, hosts-file manipulation,
            suspicious JSP content and an inbound firewall rule.
          </p>


          <p>
            The strongest timeline marker was the first observed
            Event ID 4672 at
            <strong> 03/02/2019 04:04:49 PM</strong>. Correlating this
            with the other host artifacts produced a consistent picture
            of persistence, credential access, remote-access capability
            and modification of local network behaviour.
          </p>


          <div className="final-verdict">

            <CheckCircle2 size={20} />

            <div>
              <strong>Final conclusion</strong>

              <p>
                The Windows host should not be trusted in its existing
                state. Recommended response is evidence preservation,
                containment, credential remediation, removal of
                persistence mechanisms and rebuilding the host from a
                known-good image.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            BACK
        ===================================================== */}

        <Link
          to="/writeups"
          className="back-link bottom-back"
        >
          <ArrowLeft size={15} />
          Back to Writeups
        </Link>

      </article>

    </section>
  );
}


export default InvestigatingWindows;