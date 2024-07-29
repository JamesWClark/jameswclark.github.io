import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio'
import FeatureDetail from './components/portfolio/FeatureDetail';
import projects from './assets/data/projects.json';
import './App.css'

function App() {


  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio projects={projects} />} />
          <Route path="/feature/:id" element={<FeatureDetail projects={projects} />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
