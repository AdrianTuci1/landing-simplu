import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/components/HomePage'
import './App.css'
import PricingPage from './components/PricingPage'
import Navbar from '@/components/Navbar'
import SolutionPage from './components/SolutionPage'
import SelectPage from './components/SelectPage'
import AuthCallback from './components/AuthCallback'
import RouteTest from './components/RouteTest'
import { Footer } from '@/components/blocks/footer'
import { Mail, FileText, Users, Settings, HelpCircle } from "lucide-react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/route-test" element={<RouteTest />} />
        <Route path="/error" element={<div className="min-h-screen flex items-center justify-center">Error: Authentication failed</div>} />
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
