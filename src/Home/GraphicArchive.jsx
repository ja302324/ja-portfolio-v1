import { useState } from "react"
import "../css/graphicarchive.css"

function rosterCategories() {
    return [
        { id: "mens", label: "Men's", mark: "M" },
        { id: "womens", label: "Women's", mark: "W" },
        { id: "u19", label: "U19", mark: "U" },
    ].map(group => ({
        id: group.id,
        label: group.label,
        subcategories: [
            {
                id: "game-day", label: "Game day", pieces: [
                    { shape: "wide", stamp: "01", mark: `${group.mark}G`, label: "Game day · Add final artwork", title: `${group.label} Game Day`, meta: "Game Day · 2026" },
                ],
            },
            {
                id: "player", label: "Player features", pieces: [
                    { shape: "tall", stamp: "02", mark: `${group.mark}P`, label: "Player feature · Add final artwork", title: `${group.label} Player Feature`, meta: "Player Story · 2026" },
                ],
            },
            {
                id: "results", label: "Results", pieces: [
                    { shape: "offset", stamp: "03", mark: `${group.mark}R`, label: "Result · Add final artwork", title: `${group.label} Result`, meta: "Result · 2026" },
                ],
            },
        ],
    }))
}

const events = [
    {
        id: "world-cup",
        number: "EVENT 01",
        title: ["FIBA Women's World Cup", "2026"],
        intro: "The complete national-team content run at the FIBA Women's World Cup, presented as one connected tournament story.",
        categories: [
            { id: "game-day", label: "Game day", pieces: [
                { shape: "wide", stamp: "01", mark: "NG", label: "Game day · Add final artwork", title: "Opening Night", meta: "Game Day · 2026" },
            ]},
            { id: "player", label: "Player stories", pieces: [
                { shape: "tall", stamp: "02", mark: "MVP", label: "Player story · Add final artwork", title: "Player Spotlight", meta: "Player Story · 2026" },
            ]},
            { id: "roster", label: "Roster", pieces: [
                { shape: "offset", stamp: "03", mark: "12", label: "Roster · Add final artwork", title: "The Twelve", meta: "Roster · 2026" },
            ]},
            { id: "motion", label: "Motion", pieces: [
                { shape: "wide", stamp: "04", mark: "▶", label: "Motion · Add edited video cover", title: "Tournament Motion", meta: "Video Edit · 2026" },
            ]},
        ],
    },
    {
        id: "prep",
        number: "EVENT 02",
        title: ["Nigeria Women's Basketball", "Summer 2026 Preparation"],
        intro: "Behind-the-scenes coverage of the national team's preparation heading into the summer tournament window.",
        categories: [
            { id: "training", label: "Training", pieces: [
                { shape: "wide", stamp: "01", mark: "TC", label: "Training · Add final artwork", title: "Training Camp", meta: "Training · 2026" },
            ]},
            { id: "player", label: "Player features", pieces: [
                { shape: "tall", stamp: "02", mark: "PF", label: "Player feature · Add final artwork", title: "Player Feature", meta: "Player Story · 2026" },
            ]},
        ],
    },
    {
        id: "afrobasket",
        number: "EVENT 03",
        title: ["Nigeria Basketball", "Afrobasket"],
        intro: "Coverage across the Men's, Women's and U19 national teams at Afrobasket.",
        categories: rosterCategories(),
    },
    {
        id: "qualifiers",
        number: "EVENT 04",
        title: ["Nigeria Basketball", "Qualifying Tournaments"],
        intro: "Qualifying campaign coverage across the Men's, Women's and U19 national teams.",
        categories: rosterCategories(),
    },
    {
        id: "other",
        number: "EVENT 05",
        title: ["Independent", "& Client Work"],
        intro: "Brand systems, event identities and personal studies live separately from the Nigeria archive.",
        categories: [
            { id: "brand", label: "Brand systems", pieces: [
                { shape: "tall", stamp: "01", mark: "SBD", label: "Brand system · Add final artwork", title: "Saved by Design", meta: "Brand System · 2025" },
            ]},
            { id: "events", label: "Events", subcategories: [
                { id: "church", label: "Church", pieces: [
                    { shape: "wide", stamp: "01", mark: "NAM", label: "Event identity · Add final artwork", title: "Nora Adamu Ministries", meta: "Event Identity · 2026" },
                ]},
                { id: "sport", label: "Sport", pieces: [
                    { shape: "tall", stamp: "02", mark: "SP", label: "Event identity · Add final artwork", title: "Sport Event", meta: "Event Identity · 2026" },
                ]},
                { id: "misc", label: "Other", pieces: [
                    { shape: "offset", stamp: "03", mark: "OT", label: "Event identity · Add final artwork", title: "Other Event", meta: "Event Identity · 2026" },
                ]},
            ]},
            { id: "personal", label: "Personal", subcategories: [
                { id: "birthday", label: "Birthday", pieces: [
                    { shape: "wide", stamp: "01", mark: "HBD", label: "Birthday · Add final artwork", title: "Birthday Design", meta: "Personal · 2026" },
                ]},
                { id: "graduation", label: "Graduation", pieces: [
                    { shape: "tall", stamp: "02", mark: "GR", label: "Graduation · Add final artwork", title: "Graduation Design", meta: "Personal · 2026" },
                ]},
            ]},
        ],
    },
]

const eventFilters = [{ id: "all", label: "All events" }, ...events.map(e => ({ id: e.id, label: e.title.join(" ") }))]

function categoryPieces(category) {
    return category.pieces ?? category.subcategories.flatMap(sub => sub.pieces)
}

function eventPieces(event) {
    return event.categories.flatMap(categoryPieces)
}

function Piece({ piece }) {
    return (
        <article className={`piece ${piece.shape}`}>
            <span className="piece-stamp">{piece.stamp}</span>
            <div className="piece-art" data-mark={piece.mark} data-label={piece.label} />
            <div className="piece-meta">
                <strong>{piece.title}</strong>
                <span>{piece.meta}</span>
            </div>
        </article>
    )
}

function EventCollection({ event, activeCategoryId, activeSubcategoryId, onCategoryChange, onSubcategoryChange }) {
    const activeCategory = event.categories.find(c => c.id === activeCategoryId)
    const hasSubcategories = Boolean(activeCategory?.subcategories)

    let pieces
    if (!activeCategory) {
        pieces = eventPieces(event)
    } else if (hasSubcategories) {
        const activeSub = activeCategory.subcategories.find(s => s.id === activeSubcategoryId)
        pieces = activeSub ? activeSub.pieces : activeCategory.subcategories.flatMap(s => s.pieces)
    } else {
        pieces = activeCategory.pieces
    }

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

                {hasSubcategories && (
                    <div className="subgroup-nav" role="group" aria-label={`Filter ${activeCategory.label} work by subcategory`}>
                        <button
                            type="button"
                            className={`subgroup-btn${!activeSubcategoryId ? " active" : ""}`}
                            onClick={() => onSubcategoryChange(event.id, activeCategory.id, "all")}
                        >
                            All {activeCategory.label}
                        </button>
                        {activeCategory.subcategories.map(sub => (
                            <button
                                key={sub.id}
                                type="button"
                                className={`subgroup-btn${activeSubcategoryId === sub.id ? " active" : ""}`}
                                onClick={() => onSubcategoryChange(event.id, activeCategory.id, sub.id)}
                            >
                                {sub.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="event-grid">
                {pieces.map(piece => <Piece piece={piece} key={piece.title} />)}
            </div>
        </div>
    )
}

export default function GraphicArchive() {
    const [activeEvent, setActiveEvent] = useState("all")
    const [activeCategories, setActiveCategories] = useState({})
    const [activeSubcategories, setActiveSubcategories] = useState({})

    const handleCategoryChange = (eventId, categoryId) => {
        setActiveCategories(prev => ({ ...prev, [eventId]: categoryId === "all" ? undefined : categoryId }))
        setActiveSubcategories(prev => ({ ...prev, [eventId]: undefined }))
    }

    const handleSubcategoryChange = (eventId, categoryId, subcategoryId) => {
        setActiveSubcategories(prev => ({ ...prev, [eventId]: subcategoryId === "all" ? undefined : subcategoryId }))
    }

    return (
        <section id="graphics-section">
            <div className="graphics-section-head">
                <span className="graphics-section-num">03</span>
                <h2>Graphic <em>archive</em></h2>
                <p className="graphics-section-intro">
                    The archive now follows the work the way it happened: tournament by tournament, event by event. Open an event, then move through its game-day, player and result stories.
                </p>
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
                        activeSubcategoryId={activeSubcategories[event.id]}
                        onCategoryChange={handleCategoryChange}
                        onSubcategoryChange={handleSubcategoryChange}
                    />
                ))}
        </section>
    )
}
