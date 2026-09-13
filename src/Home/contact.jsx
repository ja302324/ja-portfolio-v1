import "../css/contact.css"

const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jesseadamu2/" },
    { label: "Instagram", href: "https://www.instagram.com/jesse.adamu/" },
    { label: "GitHub", href: "https://github.com/ja302324" },
]

export default function Contact() {
    return (
        <section id="contact-section">
            <h2 className="contact-heading">Let's<br />work.</h2>

            <div>
                <div className="contact-bottom">
                    <a className="contact-email-link" href="mailto:jesseadamu2021@gmail.com">
                        jesseadamu2021@gmail.com
                    </a>
                    <div className="contact-socials">
                        {socials.map(social => (
                            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="contact-footer-note">© 2026 Jesse Adamu — All rights reserved.</div>
            </div>
        </section>
    )
}
