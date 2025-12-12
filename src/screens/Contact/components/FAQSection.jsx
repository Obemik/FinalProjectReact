import React, { useState } from 'react';
import { IoChevronDown, IoChevronForward } from 'react-icons/io5';
import styles from './FAQSection.module.css';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What services does your real estate firm offer?",
            answer: "Our real estate firm offers a range of services, including buying and selling homes, property management, rental services, and real estate investment advice."
        },
        {
            question: "How can I buy a home through your firm?",
            answer: "To buy a home through our firm, you can start by browsing our available properties online or contacting one of our agents who will guide you through the entire process."
        },
        {
            question: "Can your firm help me sell my home?",
            answer: "Yes, we provide comprehensive services to help you sell your home, including market analysis, professional photography, marketing, and negotiation support."
        },
        {
            question: "What is the role of a real estate agent?",
            answer: "A real estate agent helps clients buy, sell, or rent properties. They provide market expertise, handle negotiations, manage paperwork, and ensure smooth transactions."
        },
        {
            question: "How can I become a real estate agent in EstatePro?",
            answer: "To become a real estate agent with EstatePro, you need to have a valid real estate license, relevant experience, and submit an application through our careers page."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                        >
                            <div 
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <button className={styles.faqIcon}>
                                    {openIndex === index ? (
                                        <IoChevronDown size={24} />
                                    ) : (
                                        <IoChevronForward size={24} />
                                    )}
                                </button>
                            </div>
                            {openIndex === index && (
                                <div className={styles.faqAnswer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}