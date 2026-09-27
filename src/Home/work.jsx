import "../css/work.css"
import summerPreview from "../assets/Images/NigeriaBasketball/worldcup/gameday/vs-korea.jpg"
import dtigressPreview from "../assets/Images/NigeriaBasketball/afrobasket/gameday/final-gameday.jpg"
import noraPreview from "../assets/Images/NoraAdamuMinistries/in-his-presence.jpg"

const projects = [
    { title: "Summer 2026", tag: "Sports · Video · Strategy", previewImage: summerPreview, preview: "Nigeria Basketball summer campaign preview" },
    { title: "Saved by Design", tag: "Web · Development", href: "https://tastyfingerrestaurant.com", preview: "Client website preview" },
    { title: "D'Tigress Campaign", tag: "Social · Motion", previewImage: dtigressPreview, preview: "Game-day campaign preview" },
    { title: "Nora Adamu Ministries", tag: "Brand · Events", previewImage: noraPreview, preview: "Ministry identity preview" },
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
                {projects.map((project, index) => {
                    const content = (
                        <>
                            <span className="work-row-index">{String(index + 1).padStart(2, "0")}</span>
                            <h3>{project.title}</h3>
                            <span className="work-row-tag">{project.tag}</span>
                            <span className="work-row-arrow">↗︎</span>
                            <div className="work-preview">
                                {project.previewImage
                                    ? <img src={project.previewImage} alt={project.preview} />
                                    : <span className="work-preview-text">{project.preview}</span>}
                            </div>
                        </>
                    )

                    return project.href ? (
                        <a className="work-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                            {content}
                        </a>
                    ) : (
                        <div className="work-row" tabIndex={0} key={project.title}>
                            {content}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
