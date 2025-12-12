import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import styles from './Banner.module.css';
import bannerImage from '../../../assets/img/home/BannerImage.png';
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    const stats = [
        { number: '1200', label: 'Premium Product', suffix: '+' },
        { number: '4500', label: 'Happy Customer', suffix: '+' },
        { number: '240', label: 'Award Winning', suffix: '+' }
    ];

    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerMain}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerLeft}>
                        <h1 className={styles.bannerTitle}>
                            The Best Place<br />
                            To Find Your<br />
                            <span className={styles.bannerHighlight}>Dream House</span>
                        </h1>
                    </div>
                    
                    <div className={styles.bannerRight}>
                        <p className={styles.bannerDescription}>
                            We Are Real Estate Agency That Willhelp You<br />
                            Designing A Modern And Minimalist Dream<br />
                            House, Let's Discuss.
                        </p>
                        <button 
                            className={styles.bannerButton} 
                            onClick={() => navigate('/contact')}
                        >
                            Get In Touch
                        </button>
                        
                        <div className={styles.bannerStats}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statItem}>
                                    <div className={styles.statNumber}>
                                        {stat.number}
                                        <span className={styles.statSuffix}>{stat.suffix}</span>
                                    </div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.bannerImageWrapper}>
                    <img src={bannerImage} alt="Modern House" className={styles.bannerImage} />
                    
                    <div className={styles.searchBar}>
                        <IoLocationSharp className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search by location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                        <button onClick={handleSearch} className={styles.searchButton}>
                            Search Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}