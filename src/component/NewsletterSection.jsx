import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import SuccessModal from './SuccessModal'; 
import styles from "./NewsletterSection.module.css"

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
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
            setEmail("");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <section className={styles.newsletterSection}>
                <div className={styles.newsletterContainer}>
                    <div className={styles.newsletterContent}>
                        <h2 className={styles.newsletterTitle}>Subscribe to our weekly newsletter</h2>
                        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.newsletterInput}
                                required
                                disabled={isLoading}
                            />
                            <button 
                                type="submit" 
                                className={styles.newsletterButton}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Get in Touch'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <SuccessModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Successfully Subscribed!"
                message="Thank you for subscribing! Check your email for a welcome message with all the details."
            />
        </>
    )
}