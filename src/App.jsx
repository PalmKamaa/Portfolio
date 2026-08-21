import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import WriteupsPage from "./pages/WriteupsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import WindowsSecurityHardening from "./pages/WindowsSecurityHardening";
import CarnageNetworkInvestigation from "./pages/CarnageNetworkInvestigation";
import InvestigatingWindows from "./pages/InvestigatingWindows";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/writeups/windows-security-hardening" element={<WindowsSecurityHardening />} />
          <Route path="/writeups/carnage-network-investigation" element={<CarnageNetworkInvestigation />} />
          <Route path="/writeups/investigating-windows" element={<InvestigatingWindows />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/writeups" element={<WriteupsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;