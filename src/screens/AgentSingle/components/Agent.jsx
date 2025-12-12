import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Agent.module.css';
import { agents } from '../../../assets/data/agents/agents';

export default function Agent() {
    const { id } = useParams();
    const agent = agents.find(a => a.id === parseInt(id));

    if (!agent) {
        return null;
    }

    return (
        <section className={styles.agentSection}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>{agent.name}</h1>
                
                <div className={styles.breadcrumb}>
                    <Link to="/">Home</Link> / <Link to="/agents">Agents</Link> / <span>{agent.name}</span>
                </div>

                <div className={styles.agentContent}>
                    <div className={styles.imageWrapper}>
                        <img 
                            src={agent.img} 
                            alt={agent.name} 
                            className={styles.agentImage} 
                        />
                    </div>

                    <div className={styles.agentInfo}>
                        <span className={styles.roleLabel}>{agent.role}</span>
                        <h2 className={styles.agentName}>{agent.name}</h2>
                        <p className={styles.agentDescription}>{agent.descriptionFull}</p>

                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <FaPhone className={styles.contactIcon} />
                                <a href={`tel:${agent.tel}`} className={styles.contactLink}>
                                    {agent.tel}
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <a href={`mailto:${agent.email}`} className={styles.contactLink}>
                                    {agent.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}