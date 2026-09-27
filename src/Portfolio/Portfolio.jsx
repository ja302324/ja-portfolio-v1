import Header from "../Home/Header"
import GraphicArchive from "../Home/GraphicArchive"
import Contact from "../Home/contact"

export default function Portfolio() {
    return (
        <div style={{ position: "relative", background: "transparent", overflow: "visible" }}>
            <Header />
            <GraphicArchive />
            <Contact />
        </div>
    )
}
