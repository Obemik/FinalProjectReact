import React from 'react';
import styles from './DreamHome.module.css';
import group from '../../../assets/img/home/Group.png';

export default function DreamHome() {
    return (
        <section className={styles.dreamHomeSection}>
            <div className={styles.dreamHomeContainer}>
                <div className={styles.imagesGrid}>
                    <img src={group} alt="Modern buildings" className={styles.imageGroup} />
                </div>
                
                <div className={styles.dreamHomeContent}>
                    <h2 className={styles.dreamHomeTitle}>
                        With Us Help You Find Your Dream Home
                    </h2>
                    <p className={styles.dreamHomeDescription}>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Ut Aliquam, 
                        Purus Sit Amet Luctus Venenatis, Lectus Magna.
                    </p>
                    
                    <div className={styles.statsContainer}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>127</div>
                            <div className={styles.statLabel}>Properties Build</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>300+</div>
                            <div className={styles.statLabel}>Happy Customers</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>10</div>
                            <div className={styles.statLabel}>Years Of Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}