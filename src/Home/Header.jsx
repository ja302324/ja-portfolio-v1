import { useState, useEffect } from "react"
import "../css/header.css"
import logo from "../assets/Images/navbar/Signature.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

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
                <a href="#home-section"><img className="nav-img" src={logo} alt="Jesse Adamu logo" /></a>

                <ul className="nav-menu">
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#work-section">Portfolio</a></li>
                    <li><a href="#contact-section">Contact</a></li>
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
                        <a href="#home-section"    onClick={close}>Home</a>
                        <a href="#about-section"   onClick={close}>About</a>
                        <a href="#work-section"    onClick={close}>Portfolio</a>
                        <a href="#contact-section" onClick={close}>Contact</a>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header
