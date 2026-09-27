import { useEffect, useRef, useState } from "react"
import "../css/casestudy.css"
import { caseStudyPieces } from "../data/portfolioWork"
import { Piece, Lightbox, useLightbox } from "../components/PieceGallery"
import ep1Thumb from "../assets/Images/NigeriaBasketball/videos/ep1-thumbnail.jpg"

const YOUTUBE_VIDEO_ID = "CHdo-epTRKc"

const briefs = [
    {
        label: "01 / The brief",
        title: "Carry the country",
        body: "Build a clear visual language for Nigeria Basketball that could move from roster announcements to game-day pressure without losing the energy of the national team.",
    },
    {
        label: "02 / The work",
        title: "Every format",
        body: "Created game-day graphics, player features, tournament visuals and edited video. Managed social output across platforms and shaped the media strategy with a four-person content team.",
    },
    {
        label: "03 / The result",
        title: "Attention earned",
        body: "The strongest work did more than decorate the tournament. It gave supporters a consistent story to follow and share.",
        results: [
            { value: "23.5M", label: "Total views" },
            { value: "18.3M", label: "Instagram views" },
            { value: "12.8K", label: "New followers" },
        ],
    },
]

function sendPlayerCommand(iframe, func) {
    iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*")
}

export default function CaseStudy() {
    const videoWrapRef = useRef(null)
    const iframeRef = useRef(null)
    const [videoStarted, setVideoStarted] = useState(false)
    const lightbox = useLightbox()

    useEffect(() => {
        const node = videoWrapRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVideoStarted(started => {
                        if (started) sendPlayerCommand(iframeRef.current, "playVideo")
                        return true
                    })
                } else {
                    sendPlayerCommand(iframeRef.current, "pauseVideo")
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="case-study-section">
            <div className="case-kicker">Featured case study</div>

            <div className="case-section-head">
                <span className="case-section-num">02</span>
                <h2>Summer 2026<br /><em>Nigeria Basketball</em></h2>
                <p className="case-section-intro">
                    A national-team content run spanning game-day graphics, player features, tournament visuals and social media strategy.
                </p>
            </div>

            <div className="video-embed-wrap" ref={videoWrapRef}>
                {videoStarted
                    ? (
                        <iframe
                            ref={iframeRef}
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&enablejsapi=1&rel=0`}
                            title="Summer 2026 Nigeria Basketball aftermovie"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    )
                    : <img src={ep1Thumb} alt="Summer 2026 Nigeria Basketball aftermovie" className="video-embed-poster" />}
            </div>

            <div className="case-grid">
                {briefs.map(brief => (
                    <article key={brief.label}>
                        <small>{brief.label}</small>
                        <h3>{brief.title}</h3>
                        <p>{brief.body}</p>
                        {brief.results && (
                            <div className="result-numbers">
                                {brief.results.map(result => (
                                    <div key={result.label}>
                                        <strong>{result.value}</strong>
                                        <span>{result.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>

            <div className="case-carousel">
                {caseStudyPieces.map(piece => <Piece piece={piece} onOpen={lightbox.open} key={piece.title} />)}
            </div>

            <p className="case-template-note">Case study template: reuse this Brief / Work / Result structure for each tournament.</p>

            <Lightbox piece={lightbox.active} onClose={lightbox.close} />
        </section>
    )
}
