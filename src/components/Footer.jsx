import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer__main">

                <div className="footer__left">
                    <h2 className="footer__heading">let's connect.</h2>
                    <p className="footer__tagline">
                        Whether you want to talk design, code, or share a great café recommendation — just drop me a line.
                    </p>
                    <a href="mailto:lalaine.macababbad@gmail.com" className="footer__btn">
                        Get in touch
                    </a>
                </div>

                <div className="footer__links">
                    <div className="footer__link-item">
                        <span className="footer__link-label">Email</span>
                        <a href="mailto:lalaine.macababbad@gmail.com" className="footer__link">
                            lalaine.macababbad@gmail.com
                        </a>
                    </div>
                    <div className="footer__link-item">
                        <span className="footer__link-label">LinkedIn</span>
                        <a href="https://www.linkedin.com/in/lalainemacababbad/" target="_blank" rel="noreferrer" className="footer__link">
                            lalaine-macababbad
                        </a>
                    </div>
                    <div className="footer__link-item">
                        <span className="footer__link-label">GitHub</span>
                        <a href="https://github.com/lainemacababbad" target="_blank" rel="noreferrer" className="footer__link">
                            lainemacababbad
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="footer__bottom-line" />
                <p className="footer__copyright">
                    © 2026 Lalaine Macababbad. Designed & built with love and matcha.
                </p>
            </div>
        </footer>
    )
}
