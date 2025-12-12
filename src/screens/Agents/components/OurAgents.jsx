import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './OurAgents.module.css';
import { agents } from '../../../assets/data/agents/agents';

export default function OurAgents() {
    const navigate = useNavigate();

    const handleAgentClick = (id) => {
        navigate(`/agents/${id}`);
    };

    return (
        <section className={styles.ourAgentsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Agents</h2>
                <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui tellus morbi 
                    integer neque, molestibae ac nulla tellus mauris elit eu tellus
                </p>
                
                <div className={styles.agentsGrid}>
                    {agents.map((agent) => (
                        <div 
                            key={agent.id} 
                            className={styles.agentCard}
                            onClick={() => handleAgentClick(agent.id)}
                        >
                            <div className={styles.imageWrapper}>
                                <img 
                                    src={agent.img} 
                                    alt={agent.name} 
                                    className={styles.agentImage} 
                                />
                                <span className={styles.roleLabel}>{agent.role}</span>
                            </div>
                            
                            <div className={styles.cardContent}>
                                <h3 className={styles.agentName}>{agent.name}</h3>
                                <p className={styles.agentDescription}>{agent.description}</p>
                                
                                <div className={styles.contactInfo}>
                                    <div className={styles.contactItem}>
                                        <FaPhone className={styles.contactIcon} />
                                        <span className={styles.contactText}>{agent.tel}</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <FaEnvelope className={styles.contactIcon} />
                                        <span className={styles.contactText}>{agent.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}