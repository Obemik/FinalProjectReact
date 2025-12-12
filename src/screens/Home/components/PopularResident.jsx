import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PopularResident.module.css';
import { houses } from '../../../assets/data/properties/properties';
import sqftIcon from '../../../assets/img/home/sqft.png';
import bedIcon from '../../../assets/img/home/bed.png';
import bathIcon from '../../../assets/img/home/bath.png';

export default function PopularResident() {
    const firstFour = houses.slice(0, 4);

    return (
        <section className={styles.popularSection}>
            <div className={styles.popularContainer}>
                <div className={styles.titleText}>
                    <h2 className={styles.title}>Popular Resident</h2>
                    <Link className={styles.explore} to="/properties">
                        Explore All →
                    </Link>
                </div>
                
                <div className={styles.container}>
                    {firstFour.map((house, index) => (
                        <Link 
                            key={house.id} 
                            className={`${styles.card} ${index % 2 === 1 ? styles.cardShift : ''}`}
                            to={`/properties/${house.id}`}
                        >
                            <img className={styles.img} src={house.img} alt={house.location} />
                            <div className={styles.line}></div>
                            <p className={styles.price}>{house.price}</p>
                            <p className={styles.location}>{house.location}</p>
                            <div className={styles.details}>
                                <div className={styles.detailBox}>
                                    <img className={styles.icon} src={sqftIcon} alt="sqft" />
                                    <span>{house.sqft}</span>
                                </div>
                                <div className={styles.detailBox}>
                                    <img className={styles.icon} src={bedIcon} alt="bed" />
                                    <span>{house.bed}</span>
                                </div>
                                <div className={styles.detailBox}>
                                    <img className={styles.icon} src={bathIcon} alt="bath" />
                                    <span>{house.bath}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}