import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import styles from './ClientFeedback.module.css';
import clientBackground from '../../../assets/img/home/ClientBackground.png';
import clientHome from '../../../assets/img/home/ClientHome.png';
import clientPhoto from '../../../assets/img/home/ClientPhoto.png';

export default function ClientFeedback() {
    const navigate = useNavigate();

    return (
        <section className={styles.clientFeedbackSection}>
            <div className={styles.clientFeedbackBackground}>
                <img src={clientBackground} alt="Client background" className={styles.backgroundImage} />
            </div>
            <div className={styles.clientFeedbackContainer}>
                <h2 className={styles.clientFeedbackTitle}>What our clients say</h2>
                
                <div className={styles.clientContent}>
                    <div className={styles.clientHomeWrapper}>
                        <img src={clientHome} alt="Client home" className={styles.clientHomeImage} />
                    </div>
                    
                    <div className={styles.clientTestimonial}>
                        <h3 className={styles.testimonialQuote}>"They did an amazing job for our house."</h3>
                        <p className={styles.testimonialText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                            cilisis pretium leo pellentesque ultrices est varius amet 
                            rhoncus sed euismod sit id purus elementum nulla 
                            tincidunt massa vel.
                        </p>
                        <div className={styles.clientInfo}>
                            <img src={clientPhoto} alt="Tony Stark" className={styles.clientAvatar} />
                            <span className={styles.clientName}>Tony Stark</span>
                        </div>
                    </div>
                </div>
                
                <button 
                    className={styles.clientFeedbackButton}
                    onClick={() => navigate('/contact')}
                >
                    Get In Touch
                    <HiArrowRight className={styles.buttonArrow} />
                </button>
            </div>
        </section>
    );
}