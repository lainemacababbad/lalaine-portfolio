import Nav from './components/Nav'
import Hero from './components/Hero'
import './index.css'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}