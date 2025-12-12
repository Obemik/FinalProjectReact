import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../assets/img/components/logo.png";
import styles from "./Header.module.css";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const blackHeaderPages = ['/'];
    const isBlackHeader = blackHeaderPages.includes(location.pathname);
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section className={`${styles.headerSection} ${isBlackHeader ? styles.blackHeader : styles.whiteHeader}`}>
                <header className={styles.navbar}>
                    <Link to='/' className={styles.logoLink}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                        <span className={`${styles.logoText} ${isBlackHeader ? styles.dark : ''}`}>EstatePro</span>
                    </Link>
                    
                    {!isMobile && (
                        <>
                            <nav>
                                <ul className={styles.navLinks}>
                                    <li>
                                        <Link to='/' className={`${styles.navLink} ${isBlackHeader ? styles.dark : ''}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/about' className={`${styles.navLink} ${isBlackHeader ? styles.dark : ''}`}>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/properties' className={`${styles.navLink} ${isBlackHeader ? styles.dark : ''}`}>Properties</Link>
                                    </li>
                                    <li>
                                        <Link to='/agents' className={`${styles.navLink} ${isBlackHeader ? styles.dark : ''}`}>Agents</Link>
                                    </li>
                                    <li>
                                        <Link to='/blogs' className={`${styles.navLink} ${isBlackHeader ? styles.dark : ''}`}>Blog</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={styles.buttons}>
                                <button className={styles.btnGetStarted} onClick={() => navigate('/property-post')}>Get started →</button>
                            </div>
                        </>
                    )}

                    {isMobile && (
                        <button
                            className={`${styles.burgerBtn} ${isBlackHeader ? styles.dark : ''}`}
                            onClick={() => setMenuOpen(true)}
                        >
                            <RxHamburgerMenu />
                        </button>
                    )}
                </header>
            </section>

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""} ${
                    isBlackHeader ? styles.darkMenu : styles.lightMenu
                }`}
            >
                <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                    <IoClose />
                </button>
                <Link to="/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/properties" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Properties</Link>
                <Link to="/agents" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Agents</Link>
                <Link to="/blogs" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Blog</Link>
                <button 
                    onClick={() => {
                        navigate("/property-post");
                        setMenuOpen(false);
                    }} 
                    className={styles.mobileBtn}
                >
                    Get started →
                </button>
            </div>

            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
}