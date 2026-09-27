import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../css/header.css"
import logo from "../assets/Images/navbar/Signature.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { pathname } = useLocation()
    const isHome = pathname === "/"
    const sectionHref = id => isHome ? `#${id}` : `/#${id}`

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 769px)")
        const handler = (e) => { if (e.matches) setIsOpen(false) }
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const close = () => setIsOpen(false)

    return (
        <>
            {/* Desktop + mobile pill bar */}
            <div className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
                <Link to="/"><img className="nav-img" src={logo} alt="Jesse Adamu logo" /></Link>

                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><a href={sectionHref("about-section")}>About</a></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><a href={sectionHref("contact-section")}>Contact</a></li>
                </ul>

                <button
                    className="nav-hamburger"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <span className="nav-hamburger-bar" />
                    <span className="nav-hamburger-bar" />
                    <span className="nav-hamburger-bar" />
                </button>
            </div>

            {/* Fullscreen mobile overlay */}
            {isOpen && (
                <div className="nav-fullscreen">
                    <div className="nav-fullscreen-top">
                        <img className="nav-fullscreen-logo" src={logo} alt="Jesse Adamu logo" />
                        <button className="nav-close-btn" onClick={close} aria-label="Close menu">
                            <span className="nav-close-bracket">[</span>
                            CLOSE
                            <span className="nav-close-bracket">]</span>
                        </button>
                    </div>

                    <nav className="nav-fullscreen-links">
                        <Link to="/" onClick={close}>Home</Link>
                        <a href={sectionHref("about-section")} onClick={close}>About</a>
                        <Link to="/portfolio" onClick={close}>Portfolio</Link>
                        <a href={sectionHref("contact-section")} onClick={close}>Contact</a>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header
