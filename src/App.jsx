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
          description: 'Simplu is a management system with with a top of the line AI agent that sits on top of the infrastructure and is capable of taking over all your daily tasks. ' 
        }} 
        socialLinks={[
          { name: 'X', href: 'https://twitter.com/simplu' },
          { name: 'LinkedIn', href: 'https://linkedin.com/company/simplu' }
        ]} 
        columns={[
          {
            title: "Product",
            links: [
              { name: "Features", Icon: Settings, href: "#features" },
              { name: "Pricing", Icon: FileText, href: "#pricing" },
              { name: "Integrations", Icon: Settings, href: "#integrations" },
              { name: "API", Icon: Settings, href: "#api" }
            ]
          },
          {
            title: "Company",
            links: [
              { name: "About", Icon: Users, href: "#about" },
              { name: "Blog", Icon: FileText, href: "#blog" },
              { name: "Careers", Icon: Users, href: "#careers" },
              { name: "Contact", Icon: Mail, href: "#contact" }
            ]
          },
          {
            title: "Support",
            links: [
              { name: "Help Center", Icon: HelpCircle, href: "#help" },
              { name: "Documentation", Icon: FileText, href: "#docs" },
              { name: "Status", Icon: Settings, href: "#status" },
              { name: "Contact Us", Icon: Mail, href: "#contact" }
            ]
          }
        ]} 
        copyright="© 2025 Simplu. All rights reserved." 
        />
    </Router>
  )
}

export default App
