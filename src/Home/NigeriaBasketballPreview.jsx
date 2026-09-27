import { Link } from "react-router-dom"
import "../css/graphicarchive.css"
import { highlights, wngaSpotlight } from "../data/portfolioWork"
import { Masonry, Lightbox, useLightbox } from "../components/PieceGallery"
import heroPhoto from "../assets/Images/NigeriaBasketball/hero/jesse-portrait.jpg"

export default function NigeriaBasketballPreview() {
    const lightbox = useLightbox()

    return (
        <section id="graphics-section">
            <div className="nb-hero">
                <div className="nb-hero-photo">
                    <img src={heroPhoto} alt="Jesse Adamu" />
                </div>
                <div className="nb-hero-copy">
                    <span className="nb-hero-eyebrow">Content lead, Team Nigeria Basketball</span>
                    <h2>Nigeria Basketball</h2>
                    <p>Two years running content for D'Tigers, D'Tigress and U19 Nigeria, with admin access to @officialteamnigeriabasketball.</p>
                </div>
            </div>

            <div className="graphics-section-head">
                <span className="graphics-section-num">03</span>
                <h2>Nigeria <em>Basketball</em></h2>
                <p className="graphics-section-intro">
                    Created and edited 150+ graphics and videos across two major international tournaments and three qualifying tournaments.
                </p>
            </div>

            <div className="wnga-spotlight">
                <div className="wnga-spotlight-copy">
                    <span className="wnga-spotlight-label">Featured</span>
                    <h3>{wngaSpotlight.title}</h3>
                    <p>{wngaSpotlight.intro}</p>
                </div>
                <div className="wnga-spotlight-grid">
                    {wngaSpotlight.images.map((src, i) => (
                        <img
                            src={src}
                            alt={`Top 5 design, page ${i + 1}`}
                            key={src}
                            loading="lazy"
                            onClick={() => lightbox.open({ image: src, title: `Top 5 Designs, page ${i + 1}`, meta: "WNGA Final Thank You · 2025" })}
                        />
                    ))}
                </div>
            </div>

            <Masonry pieces={highlights} onOpen={lightbox.open} columns={2} />

            <div className="nb-see-more">
                <Link to="/portfolio" className="nb-see-more-btn">See more work ↗︎</Link>
            </div>

            <Lightbox piece={lightbox.active} onClose={lightbox.close} />
        </section>
    )
}
