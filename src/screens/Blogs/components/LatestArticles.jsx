import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi2';
import styles from './LatestArticles.module.css';
import { articles } from '../../../assets/data/blogs/blogs';

export default function LatestArticles() {
    return (
        <section className={styles.blogSection}>
            <div className={styles.blogContainer}>
                <h1 className={styles.blogTitle}>Latest Articles</h1>
                
                <div className={styles.blogBreadcrumb}>
                    <Link to="/">Home</Link> / Blog
                </div>
                
                <div className={styles.articlesGrid}>
                    {articles.map((article) => (
                        <Link 
                            key={article.id} 
                            to={`/blog/${article.id}`}
                            className={styles.articleCard}
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}