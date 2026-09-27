import "../css/contact.css"

const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jesseadamu2/" },
    { label: "Instagram", href: "https://www.instagram.com/jesse.adamu/" },
    { label: "GitHub", href: "https://github.com/ja302324" },
]

const sitemap = [
    { label: "Home", href: "#home-section" },
    { label: "About", href: "#about-section" },
    { label: "Portfolio", href: "#work-section" },
    { label: "Contact", href: "#contact-section" },
]

export default function Contact() {
    return (
        <section id="contact-section">
            <div className="contact-top">
                <h2 className="contact-heading">Let's<br />work.</h2>
                <a className="contact-email-link" href="mailto:jesseadamu2021@gmail.com">
                    jesseadamu2021@gmail.com
                </a>
            </div>

            <div className="contact-columns">
                <div className="contact-col">
                    <span className="contact-col-label">Sitemap</span>
                    <nav className="contact-col-links">
                        {sitemap.map(item => (
                            <a key={item.label} href={item.href}>{item.label}</a>
                        ))}
                    </nav>
                </div>

                <div className="contact-col">
                    <span className="contact-col-label">Elsewhere</span>
                    <div className="contact-socials">
                        {socials.map(social => (
                            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact-bottom-bar">
                <span className="contact-wordmark">Jesse Adamu</span>
                <div className="contact-footer-note">© 2026 Jesse Adamu — All rights reserved.</div>
                <a className="contact-back-top" href="#home-section">Back to top ↑</a>
            </div>
        </section>
    )
}
