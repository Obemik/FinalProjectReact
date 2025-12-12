import React, { useState } from "react"
import styles from "./NewsletterSection.module.css"

export default function NewsletterSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
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
                        />
                        <button type="submit" className={styles.newsletterButton}>
                            Get in Touch
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}