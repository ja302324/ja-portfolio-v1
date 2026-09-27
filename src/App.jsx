import { Routes, Route } from 'react-router-dom'
import Home from "./Home/Home"
import Portfolio from "./Portfolio/Portfolio"
import BrandDesign from "./Projects/BrandDesign"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects/brand-design" element={<BrandDesign />} />
        </Routes>
    )
}

export default App;
