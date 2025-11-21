import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/components/HomePage'
import './App.css'
import PricingPage from './components/PricingPage'
import HelpCenter from './components/HelpCenter'
import DataModel from './components/DataModel'
import Workflows from './components/Workflows'
import VercelNavbar from '@/components/ui/vercel-navbar'
import SolutionPage from './components/SolutionPage'
import SelectPage from './components/SelectPage'
import AppsIntegrationsPage from './components/AppsIntegrationsPage'
import ReportingPage from './components/ReportingPage'
import DeveloperPlatformPage from './components/DeveloperPlatformPage'
import { Footer } from '@/components/blocks/footer'
import { Mail, FileText, Users, Settings, HelpCircle } from "lucide-react";

function App() {
  return (
    <Router>
      <VercelNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/data-model" element={<DataModel />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/apps-integrations" element={<AppsIntegrationsPage />} />
        <Route path="/reporting" element={<ReportingPage />} />
        <Route path="/developer-platform" element={<DeveloperPlatformPage />} />
      </Routes>
      <Footer
        brand={{
          name: 'Simplu',
          description: 'Simplu este un sistem de management cu un agent AI de ultimă generație care se află deasupra infrastructurii și este capabil să preia toate sarcinile tale zilnice.'
        }}
        socialLinks={[
          { name: 'X', href: 'https://twitter.com/simplu' },
          { name: 'LinkedIn', href: 'https://linkedin.com/company/simplu' }
        ]}
        columns={[
          {
            title: "Produs",
            links: [
              { name: "Funcționalități", Icon: Settings, href: "#features" },
              { name: "Prețuri", Icon: FileText, href: "#pricing" },
              { name: "Integrări", Icon: Settings, href: "#integrations" },
              { name: "API", Icon: Settings, href: "#api" }
            ]
          },
          {
            title: "Companie",
            links: [
              { name: "Despre", Icon: Users, href: "#about" },
              { name: "Blog", Icon: FileText, href: "#blog" },
              { name: "Cariere", Icon: Users, href: "#careers" },
              { name: "Contact", Icon: Mail, href: "#contact" }
            ]
          },
          {
            title: "Suport",
            links: [
              { name: "Centru de Ajutor", Icon: HelpCircle, href: "#help" },
              { name: "Documentație", Icon: FileText, href: "#docs" },
              { name: "Status", Icon: Settings, href: "#status" },
              { name: "Contactează-ne", Icon: Mail, href: "#contact" }
            ]
          }
        ]}
        copyright="© 2025 Simplu. Toate drepturile rezervate."
      />
    </Router>
  )
}

export default App
