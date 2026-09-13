import "../css/work.css"

const projects = [
    { title: "Summer 2026", tag: "Sports · Video · Strategy", preview: "Nigeria Basketball summer campaign preview" },
    { title: "Saved by Design", tag: "Web · Development", preview: "Client website preview" },
    { title: "D'Tigress Campaign", tag: "Social · Motion", preview: "Game-day campaign preview" },
    { title: "Nora Adamu Ministries", tag: "Brand · Events", preview: "Ministry identity preview" },
]

export default function Work() {
    return (
        <section id="work-section">
            <div className="work-section-head">
                <span className="work-section-num">01</span>
                <h2>Selected <em>work</em></h2>
                <p className="work-section-intro">
                    Not a gallery of pretty things. A record of strategy, craft, motion and systems built under real pressure.
                </p>
            </div>

            <div className="work-index">
                {projects.map((project, index) => (
                    <div className="work-row" tabIndex={0} key={project.title}>
                        <span className="work-row-index">{String(index + 1).padStart(2, "0")}</span>
                        <h3>{project.title}</h3>
                        <span className="work-row-tag">{project.tag}</span>
                        <span className="work-row-arrow">↗</span>
                        <div className="work-preview">{project.preview}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
