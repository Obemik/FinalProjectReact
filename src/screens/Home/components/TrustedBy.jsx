import React from 'react';
import styles from './TrustedBy.module.css';
import facebookLogo from '../../../assets/img/home/facebook.png';
import youtubeLogo from '../../../assets/img/home/youtube.png';
import pinterestLogo from '../../../assets/img/home/pinterest.png';
import webflowLogo from '../../../assets/img/home/webflow.png';
import googleLogo from '../../../assets/img/home/google.png';

export default function TrustedBy() {
    const logos = [
        { src: facebookLogo, alt: 'Facebook', url: 'https://facebook.com' },
        { src: youtubeLogo, alt: 'YouTube', url: 'https://youtube.com' },
        { src: pinterestLogo, alt: 'Pinterest', url: 'https://pinterest.com' },
        { src: webflowLogo, alt: 'Webflow', url: 'https://webflow.com' },
        { src: googleLogo, alt: 'Google', url: 'https://google.com' }
    ];

    return (
        <section className={styles.trustedBySection}>
            <div className={styles.trustedByContainer}>
                <h2 className={styles.trustedByTitle}>Trusted by</h2>
                <div className={styles.trustedByLogos}>
                    {logos.map((logo, index) => (
                        <a 
                            key={index}
                            href={logo.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.logoLink}
                        >
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className={styles.trustedLogo} 
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.trustedByBorder}></div>
        </section>
    );
}