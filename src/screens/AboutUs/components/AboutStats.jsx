import React from 'react';
import styles from './AboutStats.module.css';

export default function AboutStats() {
    const stats = [
        {
            number: '99%',
            title: 'Customer satisfaction',
            description: 'Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.'
        },
        {
            number: '49K',
            title: 'Successful Sales',
            description: 'Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.'
        },
        {
            number: '12M',
            title: 'Real Estate Partners',
            description: 'Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Take a look at our numbers</h2>
                
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <h3 className={styles.statTitle}>{stat.title}</h3>
                            <p className={styles.statDescription}>{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}