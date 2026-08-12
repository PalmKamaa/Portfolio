import { Shield, Network, Activity } from "lucide-react";

function Focus() {
  const areas = [
    {
      icon: Shield,
      title: "Cybersecurity",
      text: "Security assessment, hardening and defensive security.",
    },
    {
      icon: Network,
      title: "Networking",
      text: "Network infrastructure, troubleshooting and analysis.",
    },
    {
      icon: Activity,
      title: "Security Operations",
      text: "Monitoring, investigation and incident response fundamentals.",
    },
  ];

  return (
    <section id="focus" className="focus-section">

      <div className="focus-grid">

        {areas.map((area) => {
          const Icon = area.icon;

          return (
            <div className="focus-card" key={area.title}>

              <div className="focus-icon">
                <Icon size={20} />
              </div>

              <div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Focus;