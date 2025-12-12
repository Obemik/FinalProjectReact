import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import styles from './TeamMembers.module.css';
import { agents } from '../../../assets/data/agents/agents';
import teamBackground from '../../../assets/img/home/ClientBackground.png';

export default function TeamMembers() {
    const navigate = useNavigate();

    const handleAgentClick = (id) => {
        navigate(`/agents/${id}`);
    };

    const handleLinkedInClick = (e) => {
        e.stopPropagation(); 
        window.open('https://www.linkedin.com', '_blank', 'noopener,noreferrer');
    };

    return (
        <section className={styles.teamMembersSection}>
            <div className={styles.teamBackground}>
                <img src={teamBackground} alt="Team background" className={styles.backgroundImage} />
            </div>
            <div className={styles.teamContainer}>
                <h2 className={styles.teamTitle}>Meet our team members</h2>
                
                <div className={styles.teamGrid}>
                    {agents.map((agent) => (
                        <div 
                            key={agent.id} 
                            className={styles.teamCard}
                            onClick={() => handleAgentClick(agent.id)}
                        >
                            <div className={styles.cardImageWrapper}>
                                <img 
                                    src={agent.img} 
                                    alt={agent.name} 
                                    className={styles.cardImage} 
                                />
                                <span className={styles.roleLabel}>{agent.role}</span>
                            </div>
                            
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.agentName}>{agent.name}</h3>
                                    <button 
                                        className={styles.linkedinButton}
                                        onClick={handleLinkedInClick}
                                    >
                                        <FaLinkedin />
                                    </button>
                                </div>
                                <p className={styles.agentDescription}>{agent.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}