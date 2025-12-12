import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ViewSuggest.module.css';
import { houses } from '../assets/data/properties/properties';
import sqftIcon from '../assets/img/home/sqft.png';
import bedIcon from '../assets/img/home/bed.png';
import bathIcon from '../assets/img/home/bath.png';

export default function ViewSuggest() {
    const { id } = useParams();
    const currentPropertyId = parseInt(id);

    const randomHouses = useMemo(() => {
        const filteredHouses = houses.filter(house => house.id !== currentPropertyId);
        const shuffled = [...filteredHouses].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    }, [currentPropertyId]);

    return (
        <section className={styles.propertiesSection}>
            <div className={styles.propertiesBackground}>
                <img 
                    src={require('../assets/img/home/ClientBackground.png')} 
                    alt="Background" 
                    className={styles.backgroundImage} 
                />
            </div>
            
            <div className={styles.propertiesContainer}>
                <h2 className={styles.title}>You can also view:</h2>
                
                <div className={styles.container}>
                    {randomHouses.map((house) => (
                        <Link 
                            key={house.id} 
                            className={styles.card}
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