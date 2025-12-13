import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessModal from '../../../component/SuccessModal';
import styles from './SubscribeSection.module.css';
import subscribeImage from '../../../assets/img/subscribe/subscribe.png';

export default function SubscribeSection() {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send(
                'service_t4frkri',              
                'template_qf1pyb4',   
                {
                    subscriber_email: email,
                    to_email: 'ditay30803@lawior.com',
                    reply_to: email 
                },
                'hIKMeL6Kp1QlDhh0I'            
            );

            console.log("Email submitted:", email);
            setShowModal(true);
            setEmail('');
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
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
                                disabled={isLoading}
                            />
                            <button 
                                type="submit" 
                                className={styles.subscribeButton}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Get in Touch'}
                            </button>
                        </form>
                    </div>
                    <div className={styles.subscribeImage}>
                        <img src={subscribeImage} alt="Newsletter" />
                    </div>
                </div>
            </div>

            <SuccessModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Welcome Aboard!"
                message="You've successfully subscribed! Check your email for a special welcome message."
            />
        </>
    );
}