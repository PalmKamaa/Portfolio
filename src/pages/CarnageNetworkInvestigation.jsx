import {
  ArrowLeft,
  ArrowUpRight,
  Shield,
  FileSearch,
  Network,
  Search,
  Activity,
  Terminal,
  AlertTriangle,
} from "lucide-react";

import { Link } from "react-router-dom";

function CarnageNetworkInvestigation() {
  return (
    <section className="writeup-page">

      <article className="writeup-article">

        {/* BACK */}

        <Link
          to="/writeups"
          className="back-link"
        >
          <ArrowLeft size={15} />
          Back to Writeups
        </Link>


        {/* HEADER */}

        <header>

          <p className="section-label">
            NETWORK SECURITY · INCIDENT RESPONSE
          </p>

          <h1>
            Carnage — Network Traffic
            <span> Incident Investigation</span>
          </h1>

          <p>
            A PCAP-based investigation of a suspected workstation
            compromise using Wireshark. The investigation reconstructed
            the activity timeline from initial file delivery through
            encrypted communications, suspicious infrastructure,
            post-infection traffic and supporting DNS and SMTP activity.
          </p>


          <div className="writeup-tags">

            <span>Wireshark</span>
            <span>PCAP Analysis</span>
            <span>Incident Response</span>
            <span>Network Forensics</span>
            <span>C2 Analysis</span>
            <span>IOC Analysis</span>

          </div>

        </header>


        {/* EXECUTIVE SUMMARY */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Shield size={20} />
            </div>

            <div>

              <p className="investigation-label">
                01 / ASSESSMENT
              </p>

              <h2>
                Executive Summary
              </h2>

            </div>

          </div>


          <p>
            The workstation was compromised and subsequently communicated
            with multiple external systems associated with the attack
            sequence.
          </p>

          <p>
            The PCAP showed delivery of a ZIP archive containing a
            spreadsheet, followed by additional web, encrypted, DNS and
            mail traffic. Further investigation identified infrastructure
            associated with command-and-control activity and
            post-infection communication.
          </p>


          <div className="finding-callout">

            <AlertTriangle size={18} />

            <div>

              <strong>
                Assessment
              </strong>

              <p>
                The workstation should be treated as compromised,
                isolated from the network and subjected to further
                endpoint investigation before being trusted again.
              </p>

            </div>

          </div>

        </section>


        {/* SCOPE */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <FileSearch size={20} />
            </div>

            <div>

              <p className="investigation-label">
                02 / SCOPE
              </p>

              <h2>
                Evidence & Investigation Scope
              </h2>

            </div>

          </div>


          <p>
            The primary artefact was the{" "}
            <strong>carnage.pcap</strong> capture supplied through
            the TryHackMe Carnage environment. Analysis was performed
            in Wireshark using packet details, protocol statistics,
            conversations and targeted display filters.
          </p>


          <div className="investigation-grid">

            <div className="investigation-card">

              <span>
                PRIMARY ARTEFACT
              </span>

              <strong>
                carnage.pcap
              </strong>

            </div>


            <div className="investigation-card">

              <span>
                ANALYSIS TOOL
              </span>

              <strong>
                Wireshark
              </strong>

            </div>


            <div className="investigation-card">

              <span>
                WORKSTATION
              </span>

              <strong>
                10.9.23.102
              </strong>

            </div>


            <div className="investigation-card">

              <span>
                INVESTIGATION TYPE
              </span>

              <strong>
                Network Incident Investigation
              </strong>

            </div>

          </div>


          <blockquote>

            <p>
              The PCAP establishes network activity and communication
              relationships, but does not by itself prove exactly what
              code executed locally, whether persistence was created,
              or whether data was successfully stolen.
            </p>

          </blockquote>

        </section>


        {/* INITIAL DELIVERY */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Network size={20} />
            </div>

            <div>

              <p className="investigation-label">
                03 / INITIAL ACCESS
              </p>

              <h2>
                Malicious File Delivery
              </h2>

            </div>

          </div>


          <p>
            The investigation began with HTTP traffic because it exposed
            the earliest suspicious download without requiring execution
            of the transferred file.
          </p>

          <p>
            At{" "}
            <strong>2021-09-24 16:44:38</strong>, workstation
            <strong> 10.9.23.102</strong> requested:
          </p>


          <div className="evidence-highlight">
            /incident-consequatur/documents.zip
          </div>


          <p>
            The HTTP Host header identified{" "}
            <strong>attirenepal.com</strong>.
            Inspection of the captured response identified
            <strong> documents.zip</strong> and the spreadsheet
            <strong> chart-1530076591.xls</strong> contained within
            the archive.
          </p>


          <div className="command-block">

            <code>
              http.request.uri contains ".zip"
            </code>

            <code>
              http.host
            </code>

          </div>


          <div className="finding-callout">

            <AlertTriangle size={18} />

            <div>

              <strong>
                Important distinction
              </strong>

              <p>
                The capture proves delivery of the archive, but does
                not by itself prove that the spreadsheet was opened
                or executed on the workstation.
              </p>

            </div>

          </div>

        </section>


        {/* TLS */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Search size={20} />
            </div>

            <div>

              <p className="investigation-label">
                04 / ENCRYPTED TRAFFIC
              </p>

              <h2>
                TLS & SNI Investigation
              </h2>

            </div>

          </div>


          <p>
            Following the initial download, the workstation began
            communicating over encrypted HTTPS traffic. Because the
            application payload could not be inspected directly,
            the investigation pivoted to TLS Client Hello packets
            and their Server Name Indication values.
          </p>


          <div className="command-block">

            <code>
              tls.handshake.type == 1 &&
              (frame.time &gt;= "2021-09-24 16:45:11") &&
              (frame.time &lt;= "2021-09-24 16:45:30")
            </code>

          </div>


          <p>
            The filter returned five relevant Client Hello packets.
            Manual inspection of the SNI values identified several
            HTTPS destinations including:
          </p>


          <div className="tag-list">

            <span>
              finejewels.com.au
            </span>

            <span>
              thiebiagt.com
            </span>

            <span>
              new.americold.com
            </span>

          </div>


          <p>
            HTTPS itself was not treated as malicious. The destinations
            were evaluated against the wider timeline and correlated
            with subsequent infrastructure and post-infection activity.
          </p>

        </section>


        {/* C2 */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Search size={20} />
            </div>

            <div>

              <p className="investigation-label">
                05 / C2 ANALYSIS
              </p>

              <h2>
                C2 Infrastructure
              </h2>

            </div>

          </div>


          <p>
            Wireshark's TCP Conversations view was used to shift the
            investigation from individual packets to communication
            relationships between the workstation and external systems.
          </p>


          <p>
            Two external IP addresses were carried forward as
            C2-associated infrastructure after correlation with
            surrounding DNS, HTTP and TLS evidence.
          </p>


          <div className="ioc-grid">

            <div className="ioc-card">

              <span>
                IP ADDRESS
              </span>

              <strong>
                185.106.96.158
              </strong>

              <small>
                Associated with ocsp.verisign.com
              </small>

            </div>


            <div className="ioc-card">

              <span>
                IP ADDRESS
              </span>

              <strong>
                185.125.204.174
              </strong>

              <small>
                Associated with securitybusinpuff.com
              </small>

            </div>

          </div>


          <div className="command-block">

            <code>
              ip.addr == 185.106.96.158
            </code>

            <code>
              ip.addr == 185.125.204.174
            </code>

            <code>
              http.host == "ocsp.verisign.com"
            </code>

            <code>
              dns.qry.name == "surmeter.live"
            </code>

            <code>
              dns.qry.name == "securitybusinpuff.com"
            </code>

          </div>


          <div className="finding-callout">

            <AlertTriangle size={18} />

            <div>

              <strong>
                Investigation principle
              </strong>

              <p>
                A familiar-looking hostname was not automatically
                treated as legitimate. IP address, hostname, packet
                context and surrounding activity were correlated
                before reaching an assessment.
              </p>

            </div>

          </div>

        </section>


        {/* POST INFECTION */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Activity size={20} />
            </div>

            <div>

              <p className="investigation-label">
                06 / POST-INFECTION
              </p>

              <h2>
                Post-Infection Communication
              </h2>

            </div>

          </div>


          <p>
            Later in the capture, HTTP POST activity to{" "}
            <strong>maldivehost.net</strong> was observed.
            The request contained a distinctive value beginning with:
          </p>


          <div className="evidence-highlight">
            zLlisQRWZI9
          </div>


          <div className="command-block">

            <code>
              http.host == "maldivehost.net"
            </code>

            <code>
              http.request.method == "POST"
            </code>

          </div>


          <p>
            The first packet sent to the C2 server was recorded as
            281 bytes. The encoded-looking request data was not treated
            as proof of a specific malware family by itself. Its
            significance came from its position in the wider incident
            sequence and its relationship with previously identified
            infrastructure.
          </p>

        </section>


        {/* DNS / SMTP */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Network size={20} />
            </div>

            <div>

              <p className="investigation-label">
                07 / SUPPORTING ACTIVITY
              </p>

              <h2>
                DNS & SMTP Activity
              </h2>

            </div>

          </div>


          <p>
            Additional network activity provided supporting context
            for the investigation.
          </p>


          <div className="investigation-grid">

            <div className="investigation-card">

              <span>
                DNS LOOKUP
              </span>

              <strong>
                api.ipify.org
              </strong>

              <small>
                2021-09-24 17:00:04 UTC
              </small>

            </div>


            <div className="investigation-card">

              <span>
                SMTP MAIL FROM
              </span>

              <strong>
                farshin@mailfa.com
              </strong>

              <small>
                First observed MAIL FROM value
              </small>

            </div>

          </div>


          <div className="command-block">

            <code>
              dns.qry.name == "api.ipify.org"
            </code>

            <code>
              dns.flags.response == 0
            </code>

            <code>
              smtp
            </code>

            <code>
              smtp.req.command == "MAIL"
            </code>

          </div>


          <p>
            The public-IP lookup is consistent with software checking
            the external address of the workstation, but the lookup
            alone is not proof of malicious activity. Similarly, the
            SMTP evidence is treated as a hunting indicator rather
            than proof that the associated account was compromised.
          </p>

        </section>


        {/* TIMELINE */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Activity size={20} />
            </div>

            <div>

              <p className="investigation-label">
                08 / TIMELINE
              </p>

              <h2>
                Incident Sequence
              </h2>

            </div>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <span>
                16:44:38
              </span>

              <div>

                <strong>
                  Initial file delivery
                </strong>

                <p>
                  Workstation requested documents.zip from
                  attirenepal.com.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span>
                16:44:38
              </span>

              <div>

                <strong>
                  Archive identified
                </strong>

                <p>
                  The captured response contained documents.zip
                  with chart-1530076591.xls.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span>
                16:45:11–16:45:30
              </span>

              <div>

                <strong>
                  TLS investigation
                </strong>

                <p>
                  Five Client Hello packets were isolated and
                  their SNI values inspected.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span>
                ~16:46:16
              </span>

              <div>

                <strong>
                  Post-infection traffic
                </strong>

                <p>
                  HTTP POST activity to maldivehost.net was observed.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span>
                17:00:04 UTC
              </span>

              <div>

                <strong>
                  Public-IP lookup
                </strong>

                <p>
                  DNS activity for api.ipify.org was observed.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span>
                Later
              </span>

              <div>

                <strong>
                  Supporting SMTP activity
                </strong>

                <p>
                  Mail-related traffic was isolated and analysed.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* IOCS */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Terminal size={20} />
            </div>

            <div>

              <p className="investigation-label">
                09 / INDICATORS
              </p>

              <h2>
                Indicators of Compromise
              </h2>

            </div>

          </div>


          <div className="ioc-list">

            <div>
              <span>Victim</span>
              <strong>10.9.23.102</strong>
            </div>

            <div>
              <span>C2-associated IP</span>
              <strong>185.106.96.158</strong>
            </div>

            <div>
              <span>C2-associated IP</span>
              <strong>185.125.204.174</strong>
            </div>

            <div>
              <span>Malicious file host</span>
              <strong>attirenepal.com</strong>
            </div>

            <div>
              <span>Post-infection destination</span>
              <strong>maldivehost.net</strong>
            </div>

            <div>
              <span>C2-associated domain</span>
              <strong>surmeter.live</strong>
            </div>

            <div>
              <span>C2-associated domain</span>
              <strong>securitybusinpuff.com</strong>
            </div>

            <div>
              <span>Delivered archive</span>
              <strong>documents.zip</strong>
            </div>

            <div>
              <span>File inside archive</span>
              <strong>chart-1530076591.xls</strong>
            </div>

            <div>
              <span>Observed request value</span>
              <strong>zLlisQRWZI9</strong>
            </div>

          </div>


          <p>
            No cryptographic file hash was established from the supplied
            evidence, so no hash is claimed as an IOC.
          </p>

        </section>


        {/* WHAT WAS NOT PROVEN */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <AlertTriangle size={20} />
            </div>

            <div>

              <p className="investigation-label">
                10 / LIMITATIONS
              </p>

              <h2>
                What the PCAP Could Not Prove
              </h2>

            </div>

          </div>


          <ul>

            <li>
              File delivery does not prove that the spreadsheet
              was executed.
            </li>

            <li>
              Suspicious HTTPS traffic does not automatically mean
              every encrypted connection was malicious.
            </li>

            <li>
              DNS lookups were evaluated in context rather than
              treated as standalone evidence.
            </li>

            <li>
              The LiteSpeed and PHP server information was treated
              as fingerprinting evidence, not proof of exploitation.
            </li>

            <li>
              The capture does not establish exactly what commands
              were executed locally.
            </li>

            <li>
              The investigation does not establish exactly what
              data, if any, was successfully stolen.
            </li>

          </ul>

        </section>


        {/* WORKFLOW */}

        <section className="investigation-section">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <FileSearch size={20} />
            </div>

            <div>

              <p className="investigation-label">
                11 / METHODOLOGY
              </p>

              <h2>
                Investigation Workflow
              </h2>

            </div>

          </div>


          <ol>

            <li>
              Start with HTTP to identify the earliest suspicious
              file delivery.
            </li>

            <li>
              Inspect the HTTP response and captured file content
              without executing it.
            </li>

            <li>
              Review response headers for supporting infrastructure
              information.
            </li>

            <li>
              Pivot to TLS metadata and SNI when application content
              becomes encrypted.
            </li>

            <li>
              Use TCP Conversations to identify important external
              communication relationships.
            </li>

            <li>
              Pivot between IP addresses, DNS records and HTTP
              hostnames.
            </li>

            <li>
              Inspect post-infection HTTP methods, destinations,
              values and packet sizes.
            </li>

            <li>
              Use DNS and SMTP activity as supporting evidence.
            </li>

          </ol>

        </section>


        {/* AI DISCLOSURE */}

        <section className="investigation-section ai-disclosure">

          <div className="investigation-heading">

            <div className="investigation-icon">
              <Terminal size={20} />
            </div>

            <div>

              <p className="investigation-label">
                12 / ANALYST NOTES
              </p>

              <h2>
                AI Assistance
              </h2>

            </div>

          </div>


          <p>
            AI assistance was used for one limited part of the
            investigation: suggesting a Wireshark display filter for
            narrowing TLS Client Hello traffic to the relevant timeframe.
          </p>


          <p>
            The suggested filter was independently tested in Wireshark,
            confirmed to return the expected five packets and followed
            by manual inspection of the SNI values. AI did not determine
            the domains, indicators or final conclusions.
          </p>


          <div className="ai-note">

            AI assisted with filter construction.

            <strong>
              Evidence validation and conclusions remained
              analyst-driven.
            </strong>

          </div>

        </section>


        {/* FINAL ASSESSMENT */}

        <section className="final-assessment">

          <p className="section-label">
            FINAL ASSESSMENT
          </p>

          <h2>
            The network evidence supports
            <span> compromise.</span>
          </h2>


          <p>
            The strongest evidence sequence was the malicious archive
            delivery, identification of the suspicious spreadsheet,
            subsequent external encrypted connections, discovery of
            C2-associated infrastructure, post-infection HTTP activity
            and later public-IP lookup.
          </p>


          <p>
            The investigation demonstrates why individual indicators
            should not be assessed in isolation. The conclusion became
            stronger when file delivery, timestamps, HTTP headers,
            TLS metadata, TCP conversations, DNS lookups and subsequent
            requests were correlated into a single incident timeline.
          </p>


          <div className="final-actions">

            <a
              href="https://tryhackme.com/room/c2carnage"
              target="_blank"
              rel="noopener noreferrer"
              className="writeup-link"
            >
              View TryHackMe Room
              <ArrowUpRight size={16} />
            </a>

            <Link
              to="/writeups"
              className="back-link"
            >
              <ArrowLeft size={15} />
              Back to Writeups
            </Link>

          </div>

        </section>


      </article>

    </section>
  );
}

export default CarnageNetworkInvestigation;