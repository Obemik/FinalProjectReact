import React, { useState } from 'react';
import styles from './SubscribeSection.module.css';
import subscribeImage from '../../../assets/img/subscribe/subscribe.png';

export default function SubscribeSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <div className={styles.subscribeSection}>
            <div className={styles.subscribeContainer}>
                <div className={styles.subscribeContent}>
                    <h2 className={styles.subscribeTitle}>Subscribe Our Newsletter</h2>
                    <p className={styles.subscribeDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui tellus morbi 
                        integer neque, malesuada ac nulla malesuada ac nulla tellu
                    </p>
                    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.subscribeInput}
                            required
                        />
                        <button type="submit" className={styles.subscribeButton}>
                            Get in Touch
                        </button>
                    </form>
                </div>
                <div className={styles.subscribeImage}>
                    <img src={subscribeImage} alt="Newsletter" />
                </div>
            </div>
        </div>
    );
}