import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutFirm.module.css';
import photo1 from '../../../assets/img/about/photo1.png';
import photo2 from '../../../assets/img/about/photo2.png';

export default function AboutFirm() {
    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        About Our Real<br />
                        Estate Firm
                    </h2>
                    
                    <div className={styles.textButtonWrapper}>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui 
                            tellus morbi integer neque, malesuada ac nulla tellu
                        </p>
                        
                        <div className={styles.buttons}>
                            <button 
                                className={styles.primaryButton}
                                onClick={() => navigate('/contact')}
                            >
                                Join our team
                            </button>
                            <button 
                                className={styles.secondaryButton}
                                onClick={() => navigate('/agents')}
                            >
                                Know more
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className={styles.imagesWrapper}>
                    <img 
                        src={photo1} 
                        alt="Modern living room" 
                        className={styles.image1}
                    />
                    <img 
                        src={photo2} 
                        alt="Business meeting" 
                        className={styles.image2}
                    />
                </div>
            </div>
        </section>
    );
}