import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio'
import FeatureDetail from './components/portfolio/FeatureDetail';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/feature/:id" element={<FeatureDetail />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
