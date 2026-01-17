import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Hero />
        <Experience />
        <Education />
        <main>
          {/* Components will go here */}
        </main>
      </div>
    </div>
  )
}

export default App
