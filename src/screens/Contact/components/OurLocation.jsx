import React from 'react';
import styles from './OurLocation.module.css';
import backgroundImage from '../../../assets/img/contact/Background.png';
import iconLocation from '../../../assets/img/contact/iconLocation.png';

export default function OurLocation() {
    const locations = [
        {
            address: "3891 Ranchview Dr. Richardson,",
            city: "California 62639"
        },
        {
            address: "4140 Parker Rd. Allentown, New",
            city: "Mexico 31134"
        }
    ];

    return (
        <section className={styles.ourLocationSection}>
            <div className={styles.ourLocationBackground}>
                <img src={backgroundImage} alt="Office" className={styles.backgroundImage} />
            </div>
            <div className={styles.ourLocationContainer}>
                <div className={styles.locationCard}>
                    <h2 className={styles.locationTitle}>Our Location</h2>
                    <p className={styles.locationDescription}>
                        Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing elit, 
                        sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur dolor si
                    </p>
                    <div className={styles.locationList}>
                        {locations.map((location, index) => (
                            <div key={index} className={styles.locationItem}>
                                <img src={iconLocation} alt="Location" className={styles.locationIcon} />
                                <div className={styles.locationText}>
                                    <p>{location.address}</p>
                                    <p>{location.city}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}