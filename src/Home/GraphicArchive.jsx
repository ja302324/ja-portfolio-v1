import { useState } from "react"
import "../css/graphicarchive.css"
import { events, eventFilters, wngaSpotlight } from "../data/portfolioWork"
import { Masonry, Lightbox, useLightbox } from "../components/PieceGallery"
import heroPhoto from "../assets/Images/NigeriaBasketball/hero/jesse-portrait.jpg"

function categoryPieces(category) {
    return category.pieces ?? category.subcategories.flatMap(sub => sub.pieces)
}

function eventPieces(event) {
    return event.categories.flatMap(categoryPieces)
}

function EventCollection({ event, activeCategoryId, onCategoryChange, onOpen }) {
    const activeCategory = event.categories.find(c => c.id === activeCategoryId)
    const pieces = activeCategory ? categoryPieces(activeCategory) : eventPieces(event)

    return (
        <div className="event-collection">
            <div className="event-header">
                <span className="event-number">{event.number}</span>
                <h3>{event.title[0]}<br />{event.title[1]}</h3>
                <p>{event.intro}</p>
                <div className="subcategory-nav" role="group" aria-label={`Filter ${event.title.join(" ")} work by category`}>
                    <button
                        type="button"
                        className={`subfilter-btn${!activeCategory ? " active" : ""}`}
                        onClick={() => onCategoryChange(event.id, "all")}
                    >
                        All work
                    </button>
                    {event.categories.map(category => (
                        <button
                            key={category.id}
                            type="button"
                            className={`subfilter-btn${activeCategoryId === category.id ? " active" : ""}`}
                            onClick={() => onCategoryChange(event.id, category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <Masonry pieces={pieces} onOpen={onOpen} />
        </div>
    )
}

export default function GraphicArchive() {
    const [activeEvent, setActiveEvent] = useState("all")
    const [activeCategories, setActiveCategories] = useState({})
    const lightbox = useLightbox()

    const handleCategoryChange = (eventId, categoryId) => {
        setActiveCategories(prev => ({ ...prev, [eventId]: categoryId === "all" ? undefined : categoryId }))
    }

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
                    Created and edited 150+ graphics and videos across two major international tournaments and three qualifying tournaments, running content for D'Tigers, D'Tigress and U19 Nigeria with admin access to @officialteamnigeriabasketball.
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

            <div className="gallery-toolbar" role="group" aria-label="Filter graphic design work by event">
                {eventFilters.map(filter => (
                    <button
                        key={filter.id}
                        type="button"
                        className={`filter-btn${activeEvent === filter.id ? " active" : ""}`}
                        onClick={() => setActiveEvent(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {events
                .filter(event => activeEvent === "all" || activeEvent === event.id)
                .map(event => (
                    <EventCollection
                        key={event.id}
                        event={event}
                        activeCategoryId={activeCategories[event.id]}
                        onCategoryChange={handleCategoryChange}
                        onOpen={lightbox.open}
                    />
                ))}

            <Lightbox piece={lightbox.active} onClose={lightbox.close} />
        </section>
    )
}
