import React from "react"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-center">
                <div className="footer-text">
                    <p>Statute</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-copyright">
                    <p>© 2021<span> Breaking Bad</span></p>
                </div>

                <div className="footer-icons">
                    <a href="https://pl-pl.facebook.com/" className="footer-btn" role="button">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/" className="footer-btn" role="button">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.instagram.com/" className="footer-btn" role="button">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;