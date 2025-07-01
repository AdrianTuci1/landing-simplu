import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/components/HomePage'
import './App.css'
import PricingPage from './components/PricingPage'
import Navbar from '@/components/Navbar'
import SolutionPage from './components/SolutionPage'
import SelectPage from './components/SelectPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </Router>
  )
}

export default App
