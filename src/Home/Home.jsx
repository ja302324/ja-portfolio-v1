import Header from "./Header";
import Work from "./work";
import CaseStudy from "./CaseStudy";
import GraphicArchive from "./GraphicArchive";
import About from "./About";
import Contact from "./contact";
import "../css/home.css";

const tickerSegment = Array(4).fill(["Design", "Code", "Motion", "Strategy", "Basketball"]).flat();
const tickerLoop = [...tickerSegment, ...tickerSegment];

const Home = () => {
    return (
        <div style={{ position: "relative", background: "transparent", overflow: "visible" }}>
            <Header />

            <section id="home-section" style={{ position: "relative", minHeight: "100svh", overflow: "hidden" }}>

                {/* Full-bleed hero photo */}
                <img
                    src="/hero.png"
                    alt="Jesse Adamu"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "46% 27%",
                        transform: "scale(1.35)",
                        transformOrigin: "40% 40%",
                        zIndex: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                />

                {/* Scrim: overall veil + heavy bottom gradient for text legibility */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: "none",
                    background: `
                        linear-gradient(to top,
                            rgba(0,0,0,0.92) 0%,
                            rgba(0,0,0,0.60) 30%,
                            rgba(0,0,0,0.20) 60%,
                            rgba(0,0,0,0.10) 100%
                        )
                    `,
                }} />

                {/* Hero text overlay */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    padding: "0 clamp(24px, 5vw, 76px) clamp(40px, 6vh, 64px)",
                    gap: "24px",
                    flexWrap: "wrap",
                }}>
                    {/* Bottom-left: name block */}
                    <div>
                        {/* Eyebrow */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                            <span style={{ display: "block", width: "28px", height: "2px", background: "var(--accent)", flexShrink: 0 }} />
                            <span style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "8px",
                                fontWeight: 700,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "var(--paper)",
                                opacity: 0.7,
                            }}>Founder · Developer · Designer</span>
                        </div>

                        {/* Stacked name — tight, no gap */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{
                                fontFamily: "var(--font-script)",
                                fontSize: "clamp(100px, 15vw, 200px)",
                                color: "var(--paper)",
                                lineHeight: 0.78,
                                letterSpacing: "-0.04em",
                                display: "block",
                                textShadow: "0 12px 24px rgba(0,0,0,0.55)",
                                position: "relative",
                                zIndex: 1,
                                marginTop: "28px",
                            }}>Jesse</span>
                            <span style={{
                                fontFamily: "var(--font-serif)",
                                fontWeight: 400,
                                fontSize: "clamp(52px, 11vw, 200px)",
                                color: "var(--paper)",
                                lineHeight: 0.88,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                display: "block",
                                marginTop: "-50px",
                                position: "relative",
                                zIndex: 0,
                            }}>Adamu</span>
                        </div>
                    </div>

                    {/* Bottom-right: quote block */}
                    <div style={{
                        maxWidth: "clamp(220px, 28vw, 420px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        paddingBottom: "6px",
                        alignSelf: "flex-end",
                    }}>
                        <span style={{ display: "block", width: "28px", height: "2px", background: "var(--accent)" }} />
                        <p style={{
                            margin: 0,
                            fontFamily: "var(--font-body)",
                            fontSize: "clamp(18px, 1.8vw, 18px)",
                            lineHeight: 1.4,
                            color: "var(--paper)",
                        }}>
                            "<span style={{ fontWeight: 700 }}>Maturity</span> is not a gift. It's a product of <span style={{ fontWeight: 700 }}>time, process, and investedness</span>."
                        </p>
                        <p style={{
                            margin: 0,
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--muted)",
                        }}>— AJS</p>
                    </div>
                </div>
            </section>

            <div className="ticker-strip" aria-hidden="true">
                <div className="ticker-track">
                    {tickerLoop.map((word, i) => <span key={i}>{word}</span>)}
                </div>
            </div>

            <div className="stats-strip" aria-label="Career highlights">
                <div className="stat-item"><strong>150+</strong><span>graphics and videos across five tournaments</span></div>
                <div className="stat-item"><strong>23.5M</strong><span>content views in 2026</span></div>
                <div className="stat-item"><strong>3 YRS</strong><span>running Nigeria Basketball content</span></div>
                <div className="stat-item"><strong>2</strong><span>languages: English and French</span></div>
            </div>

            <section style={{ position: "relative", zIndex: 2 }}>
                <Work />
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <CaseStudy />
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <GraphicArchive />
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <About />
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <Contact />
            </section>
        </div>
    );
}

export default Home;
