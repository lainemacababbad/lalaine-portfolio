import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'
import PieceOfCake from './pages/PieceOfCake'
import './index.css'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Nav />
                        <main>
                            <Hero />
                            <Work />
                            <About />
                        </main>
                        <Footer />
                    </>
                } />
                <Route path="/piece-of-cake" element={<PieceOfCake />} />
            </Routes>
        </>
    )
}