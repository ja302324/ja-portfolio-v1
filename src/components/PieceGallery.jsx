import { useEffect, useState } from "react"
import "../css/piecegallery.css"

export function useLightbox() {
    const [active, setActive] = useState(null)

    useEffect(() => {
        if (!active) return
        const onKey = e => { if (e.key === "Escape") setActive(null) }
        window.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", onKey)
            document.body.style.overflow = ""
        }
    }, [active])

    return { active, open: setActive, close: () => setActive(null) }
}

export function Piece({ piece, onOpen }) {
    return (
        <article className="piece" onClick={() => onOpen(piece)}>
            <span className="piece-stamp">{piece.stamp}</span>
            <div className="piece-art">
                <img src={piece.image} alt={piece.title} loading="lazy" />
                {piece.type === "video" && <span className="piece-play-icon">▶</span>}
            </div>
            <div className="piece-meta">
                <strong>{piece.title}</strong>
                <span>{piece.meta}</span>
            </div>
        </article>
    )
}

export function Masonry({ pieces, onOpen, columns = 3 }) {
    const cols = Array.from({ length: columns }, () => [])
    pieces.forEach((piece, i) => cols[i % columns].push(piece))

    return (
        <div className="masonry">
            {cols.map((col, ci) => (
                <div className="masonry-col" key={ci}>
                    {col.map((piece, i) => <Piece piece={piece} onOpen={onOpen} key={`${ci}-${i}-${piece.title}`} />)}
                </div>
            ))}
        </div>
    )
}

export function Lightbox({ piece, onClose }) {
    if (!piece) return null

    return (
        <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={piece.title}>
            <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
            <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
                {piece.type === "video"
                    ? (
                        <div className="lightbox-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${piece.videoId}?autoplay=1`}
                                title={piece.title}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    )
                    : <img src={piece.image} alt={piece.title} />}
                <div className="lightbox-caption">
                    <strong>{piece.title}</strong>
                    <span>{piece.meta}</span>
                </div>
            </div>
        </div>
    )
}
