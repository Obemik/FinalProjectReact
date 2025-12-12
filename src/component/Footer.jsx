import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import logo from "../assets/img/components/logo.png"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerBrand}>
                    <Link to='/' className={styles.footerLogoLink}>
                        <img src={logo} alt="Logo" className={styles.footerLogo} />
                        <span className={styles.footerLogoText}>EstatePro</span>
                    </Link>
                    <p className={styles.footerAbout}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doin tempor incididunt labore et magna
                    </p>
                </div>

                <div className={styles.footerMenuSection}>
                    <h4 className={styles.footerTitle}>Footer Menu</h4>
                    <div className={styles.footerMenuColumns}>
                        <ul className={styles.footerLinkList}>
                            <li><Link to="/" className={styles.footerLink}>Home</Link></li>
                            <li><Link to="/about" className={styles.footerLink}>About</Link></li>
                            <li><Link to="/properties" className={styles.footerLink}>Properties</Link></li>
                            <li><Link to="/properties/1" className={styles.footerLink}>Property Single</Link></li>
                            <li><Link to="/agents" className={styles.footerLink}>Agents</Link></li>
                            <li><Link to="/agents/1" className={styles.footerLink}>Agents Single</Link></li>
                        </ul>
                        <ul className={styles.footerLinkList}>
                            <li><Link to="/blogs" className={styles.footerLink}>Blog</Link></li>
                            <li><Link to="/blog/1" className={styles.footerLink}>Blog post</Link></li>
                            <li><Link to="/contact" className={styles.footerLink}>Contact</Link></li>
                            <li><Link to="/faqs" className={styles.footerLink}>FAQs</Link></li>
                            <li><Link to="/coming-soon" className={styles.footerLink}>Coming Soon</Link></li>
                            <li><Link to="/subscribe" className={styles.footerLink}>Subscribe us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerSocialSection}>
                    <h4 className={styles.footerTitle}>Follow us</h4>
                    <div className={styles.footerSocialLinks}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
                            <div className={styles.socialIcon}>
                                <FaFacebookF />
                            </div>
                            <span className={styles.socialText}>Facebook</span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
                            <div className={styles.socialIcon}>
                                <FaTwitter />
                            </div>
                            <span className={styles.socialText}>Twitter</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
                            <div className={styles.socialIcon}>
                                <FaInstagram />
                            </div>
                            <span className={styles.socialText}>Instagram</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
                            <div className={styles.socialIcon}>
                                <FaLinkedinIn />
                            </div>
                            <span className={styles.socialText}>LinkedIn</span>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
                            <div className={styles.socialIcon}>
                                <FaYoutube />
                            </div>
                            <span className={styles.socialText}>YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}