import React, { useState } from 'react';
import SuccessModal from '../../../component/SuccessModal';
import styles from './ContactUs.module.css';
import iconEmail from '../../../assets/img/contact/iconEmail.png';
import iconPhone from '../../../assets/img/contact/iconPhone.png';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        option: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            console.log('Form submitted:', formData);
            setShowModal(true);
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                option: '',
                message: ''
            });
            
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <section className={styles.contactUsSection}>
                <div className={styles.contactUsContainer}>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.contactTitle}>Contact us</h2>
                        <p className={styles.contactDescription}>
                            Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing elit, 
                            sed do eiusmod tempor.
                        </p>
                        
                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <img src={iconEmail} alt="Email" className={styles.contactIcon} />
                                <span>ditay30803@lawior.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <img src={iconPhone} alt="Phone" className={styles.contactIcon} />
                                <span>+889-776-899</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactFormWrapper}>
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                    disabled={isLoading}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            
                            <div className={styles.formRow}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                    disabled={isLoading}
                                />
                                <select
                                    name="option"
                                    value={formData.option}
                                    onChange={handleChange}
                                    className={`${styles.formInput} ${styles.formSelect}`}
                                    required
                                    disabled={isLoading}
                                >
                                    <option value="" disabled>Select option</option>
                                    <option value="Buying">Buying</option>
                                    <option value="Selling">Selling</option>
                                    <option value="Renting">Renting</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Enter Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.formTextarea}
                                rows="6"
                                required
                                disabled={isLoading}
                            ></textarea>

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Submit Now'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <SuccessModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Message Sent!"
                message="Thank you for contacting us! Our manager will review your request and get back to you shortly."
            />
        </>
    );
}