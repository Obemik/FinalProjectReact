import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi2';
import styles from './Articles.module.css';
import { articles } from '../../../assets/data/blogs/blogs';
import articlesBackground from '../../../assets/img/home/ClientBackground.png';

export default function Articles() {
    const navigate = useNavigate();

    const handleArticleClick = (id) => {
        navigate(`/blog/${id}`);
    };
    const displayedArticles = articles.slice(0, 3);

    return (
        <section className={styles.articlesSection}>
            <div className={styles.articlesBackground}>
                <img src={articlesBackground} alt="Articles background" className={styles.backgroundImage} />
            </div>
            <div className={styles.articlesContainer}>
                <h2 className={styles.articlesTitle}>Articles & Resources</h2>
                
                <div className={styles.articlesGrid}>
                    {displayedArticles.map((article) => (
                        <div 
                            key={article.id} 
                            className={styles.articleCard}
                            onClick={() => handleArticleClick(article.id)}
                        >
                            <div className={styles.cardImageWrapper}>
                                <img 
                                    src={article.img} 
                                    alt={article.title} 
                                    className={styles.cardImage} 
                                />
                            </div>
                            
                            <div className={styles.cardContent}>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                
                                <div className={styles.articleMeta}>
                                    <div className={styles.metaItem}>
                                        <HiOutlineCalendar className={styles.metaIcon} />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <HiOutlineClock className={styles.metaIcon} />
                                        <span>{article.readTime}</span>
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